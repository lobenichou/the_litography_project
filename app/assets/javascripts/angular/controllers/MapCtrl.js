app.controller("MapCtrl", ['$scope', '$location', "$timeout", "leafletData",
  "storyMarkers", "eventMarkers", "multistoryMarkers", "allAuthors", "allStories", "navOffCanvas", function($scope, $location, $timeout, leafletData, storyMarkers, eventMarkers, multistoryMarkers, allAuthors, allStories, navOffCanvas){

  // Author + story data data
  $scope.authors = allAuthors;
  $scope.stories = allStories;

  // Menu icon transform
  $scope.toggle = false;

  // Nav bar opening
  $scope.toggleNav = navOffCanvas.toggle;

  // Boostrap-ui Dropdown menu
  $scope.status = {
    isopen: false
  };


  $scope.go = function (path) {
    $location.path(path);
};

  // Toggle the dropdown menu
  $scope.toggleDropdown = function($event) {
    $event.preventDefault();
    $event.stopPropagation();
    $scope.status.isopen = !$scope.status.isopen;
  };

  // Toggle the different overlays
  $scope.toggleOverlays = function(newOverlay){
    var overlays = ["allItems", "lastMonth", "thisMonth", "allEvents", "today", "tomorrow", "friday",
    "saturday", "sunday"]
    if (!$scope.layers.overlays[newOverlay].visible){
        $scope.layers.overlays[newOverlay].visible = true
        for (var i = 0; i < overlays.length; i++){
          if (overlays[i] !== newOverlay){
            $scope.layers.overlays[overlays[i]].visible = false
          }
        }
      }
    }

$scope.switchOverlays = function(type){
  if (type ==="stories"){
    // Go back to all events and hide all stories
    $scope.layers.overlays.allEvents.visible = true
    $scope.layers.overlays.allItems.visible = false
    $scope.layers.overlays.lastMonth.visible = false
    $scope.layers.overlays.thisMonth.visible = false
  }else if (type === "events"){
    // got back to all story item and hide all calendar items
    $scope.layers.overlays.allItems.visible = true
    $scope.layers.overlays.allEvents.visible = false
    $scope.layers.overlays.today.visible = false
    $scope.layers.overlays.tomorrow.visible = false
    $scope.layers.overlays.friday.visible = false
    $scope.layers.overlays.saturday.visible = false
    $scope.layers.overlays.sunday.visible = false
  }

}

// Open story from "recent stories"
$scope.focusMarker = function(marker_id){
  for (var i=0; i < $scope.markers.length; i++){
    if ($scope.markers[i].id == marker_id){
      $scope.markers[i].focus = true;
    }
  }
}

$scope.openModal = function(author_name){
  for (var i=0; i < $scope.authors.length; i++){
    var name = $scope.authors[i].first_name + ' ' + $scope.authors[i].last_name
    if ( name === author_name){
      $location.url("/authors/" + $scope.authors[i].id)
    }
  }
}

// Icons
  var icons = {
    selectedIcon: {
      iconUrl: 'assets/dot-orange.png',
      iconSize:     [15, 15],
      iconAnchor:   [15, 15],
      popupAnchor:  [-7, -20]
    },
    defaultIcon: {
      iconUrl: 'assets/dot-grey.png',
      iconSize:     [15, 15],
      iconAnchor:   [15, 15],
      popupAnchor:  [-7, -20]
    }
  }

  // Map variables
  var markers = eventMarkers.concat(storyMarkers, multistoryMarkers)

  var bounds = {
    northEast:{
      lat: 37.2085,
      lng: -123.5007
    },
    southWest:{
      lat: 38.3333,
      lng: -121.1941
    }
  }

  var baseLayers = {
    mapbox:{
      name: 'Mapbox Litography',
      url: 'http://api.tiles.mapbox.com/v4/{mapid}/{z}/{x}/{y}.png?access_token={apikey}',
      type: 'xyz',
      layerParams: {
        apikey: 'pk.eyJ1IjoibGF1cmVuYmVuaWNob3UiLCJhIjoiQ1BlZGczRSJ9.EVMieITn7lHNi6Ato9wFwg',
        mapid: 'laurenbenichou.jm96meb6'
      }
    }
  };

  var definedOverlays = {
    allItems:{
      type: 'markercluster',
      name: 'allItems',
      visible: true
    },
    lastMonth: {
      type: 'markercluster',
      name: 'lastMonth',
      visible: false
    },
    thisMonth: {
      type: 'markercluster',
      name: 'thisMonth',
      visible: false
    },
    allEvents: {
      type: 'markercluster',
      name: 'allEvents',
      visible: false
    },
    today: {
      type: 'markercluster',
      name: 'today',
      visible: false
    },
    tomorrow: {
      type: 'markercluster',
      name: 'tomorrow',
      visible: false
    },
    friday: {
      type: 'markercluster',
      name: 'friday',
      visible: false
    },
    saturday: {
      type: 'markercluster',
      name: 'saturday',
      visible: false
    },
    sunday: {
      type: 'markercluster',
      name: 'sunday',
      visible: false
    }
  };


  angular.extend($scope, {
    icons: icons,
    maxbounds: bounds,
    defaults: {
      zoomControlPosition: 'bottomright',
      scrollWheelZoom: false,
      maxZoom: 14,
      minZoom: 10
    },
    layers: {
      baselayers: {
       mapbox: baseLayers.mapbox
     },
     overlays: {
      allItems: definedOverlays.allItems,
      lastMonth: definedOverlays.lastMonth,
      thisMonth: definedOverlays.thisMonth,
      allEvents: definedOverlays.allEvents,
      today: definedOverlays.today,
      tomorrow: definedOverlays.tomorrow,
      friday: definedOverlays.friday,
      saturday: definedOverlays.saturday,
      sunday: definedOverlays.sunday
    }
  },
   markers: markers
  });

}])

