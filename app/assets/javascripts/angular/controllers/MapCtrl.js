app.controller("MapCtrl", ['$scope', '$cookies', '$location', "$timeout", "leafletData",
  "storyMarkers", "eventMarkers", "allMultistories", "allEvents", "multistoryMarkers", "allAuthors", "allStories", "navOffCanvas", function($scope, $cookies, $location, $timeout, leafletData, storyMarkers, eventMarkers, allMultistories, allEvents, multistoryMarkers, allAuthors, allStories, navOffCanvas){

  // Author + story data data
  $scope.authors = allAuthors;
  $scope.stories = allStories;
  $scope.events = allEvents
  $scope.multistories = allMultistories
  $scope.isVisible = true;

  if ($location.path() !== "/" ){
    $scope.loc = false;
  }else{
    $scope.loc = true;
  }

  $scope.close = function(){
    $scope.isVisible = false
  }

  angular.element(document).ready(function () {
    function toggle(){$scope.isVisible = false;}
      $timeout(toggle, 10000);
  });


  // Menu icon transform
  $scope.toggle = false;

  $scope.slideRight = false;
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
     // console.log(newOverlay)
    if (!$scope.layers.overlays[newOverlay].visible){
        $scope.layers.overlays[newOverlay].visible = true
        for (var i = 0; i < overlays.length; i++){
          if (overlays[i] !== newOverlay){
            $scope.layers.overlays[overlays[i]].visible = false
            // console.log($scope.layers)
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
$scope.focusMarker = function(id){
  $location.url("/stories/" + id)

}
$scope.focusMarkerMs = function(id){
  $location.url("/multistories/" + id)

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
      visible: true,
      layerOptions: {
          showCoverageOnHover: false
      }

    },
    lastMonth: {
      type: 'markercluster',
      name: 'lastMonth',
      visible: false,
      layerOptions: {
          showCoverageOnHover: false
      }
    },
    thisMonth: {
      type: 'markercluster',
      name: 'thisMonth',
      visible: false,
      layerOptions: {
          showCoverageOnHover: false
      }
    },
    allEvents: {
      type: 'markercluster',
      name: 'allEvents',
      visible: false,
      layerOptions: {
          showCoverageOnHover: false
      }
    },
    today: {
      type: 'markercluster',
      name: 'today',
      visible: false,
      layerOptions: {
          showCoverageOnHover: false
      }
    },
    tomorrow: {
      type: 'markercluster',
      name: 'tomorrow',
      visible: false,
      layerOptions: {
          showCoverageOnHover: false
      }
    },
    friday: {
      type: 'markercluster',
      name: 'friday',
      visible: false,
      layerOptions: {
          showCoverageOnHover: false
      }
    },
    saturday: {
      type: 'markercluster',
      name: 'saturday',
      visible: false,
      layerOptions: {
          showCoverageOnHover: false
      }
    },
    sunday: {
      type: 'markercluster',
      name: 'sunday',
      visible: false,
      layerOptions: {
          showCoverageOnHover: false
      }
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

