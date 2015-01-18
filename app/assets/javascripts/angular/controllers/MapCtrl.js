app.controller("MapCtrl", ['$scope', '$location', "$timeout", "leafletData",
  "allMarkers", "allAuthors", "allStories", "navOffCanvas", function($scope, $location, $timeout, leafletData, allMarkers, allAuthors, allStories, navOffCanvas){


  // Splash stuff
  $scope.isVisible = true;

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

  $scope.toggled = function(open) {
    console.log('Dropdown is now: ', open);
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
    var overlays = ["allItems", "lastMonth", "thisMonth"]
    if (!$scope.layers.overlays[newOverlay].visible){
        $scope.layers.overlays[newOverlay].visible = true
        for (var i = 0; i < overlays.length; i++){
          if (overlays[i] != newOverlay){
            $scope.layers.overlays[overlays[i]].visible = false
          }
        }
      }
    }

$scope.focusMarker = function(marker_id){
  for (var i=0; i < $scope.markers.length; i++){
    if ($scope.markers[i].id == marker_id){
      $scope.markers[i].focus = true;
    }
  }
}
$scope.openModal = function(author_name){
  for (var i=0; i < $scope.authors.length; i++){
    var name = $scope.author[i].first_name + ' ' + $scope.author[i].last_name
    if ( name === author_name){
      $location.url() = "/authors/" + $scope.author[i].id
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
  var markers = allMarkers;

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
      type: 'group',
      name: 'allItems',
      visible: false
    },
    lastMonth: {
      type: 'group',
      name: 'lastMonth',
      visible: false
    },
    thisMonth: {
      type: 'group',
      name: 'thisMonth',
      visible: true
    }
  };

   angular.extend($scope, {
        icons: icons
    });

  angular.extend($scope, {
    maxbounds: bounds,
    defaults: {
      zoomControlPosition: 'bottomright',
      scrollWheelZoom: false,
      maxZoom: 14,
      minZoom: 12
    },
    layers: {
      baselayers: {
       mapbox: baseLayers.mapbox
     },
     overlays: {
      allItems: definedOverlays.allItems,
      lastMonth: definedOverlays.lastMonth,
      thisMonth: definedOverlays.thisMonth
    }
  },
   markers: markers
  });

  // Splash stuff
  angular.element(document).ready(function () {
    function toggle(){$scope.isVisible = !$scope.isVisible;}
    $timeout(toggle, 2500);
  });



// TBD: Icons stuff
  //  $scope.$on('leafletDirectiveMarker.popupopen', function(e, args) {
  //   e.currentScope.markers[args.markerName].icon.iconUrl = $scope.icons.selectedIcon.iconUrl
  //   console.log("popup open")
  // });

  // $scope.$on('leafletDirectiveMarker.popupclose', function(e, args) {
  //   // e.currentScope.markers[args.markerName].icon.iconUrl = $scope.icons.defaultIcon.iconUrl
  //   console.log("popup closed")
  // });
}])

