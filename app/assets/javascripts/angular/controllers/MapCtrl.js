app.controller("MapCtrl", ['$scope', "$timeout", "leafletData",
  "allMarkers", "allAuthors", "navOffCanvas", function($scope, $timeout, leafletData, allMarkers, allAuthors, navOffCanvas){

  // Splash stuff
  $scope.isVisible = true;

  // Author data
  $scope.authors = allAuthors;

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

  // Toggle the dropdown menu
  $scope.toggleDropdown = function($event) {
    $event.preventDefault();
    $event.stopPropagation();
    $scope.status.isopen = !$scope.status.isopen;
  };

  // Toggle the different overlays
  $scope.toggleOverlays = function(newOverlay){
    var overlays = ["allStories", "pastMonth", "thisMonth"]
    if (!$scope.layers.overlays[newOverlay].visible){
        $scope.layers.overlays[newOverlay].visible = true
        for (var i = 0; i < overlays.length; i++){
          if (overlays[i] != newOverlay){
            $scope.layers.overlays[overlays[i]].visible = false
          }
        }
      }
    }
  // var selectedIcon = {
  //         iconUrl: 'assets/dot-orange.png',
  //         iconSize:     [15, 15],
  //         iconAnchor:   [15, 15],
  //         popupAnchor:  [-7, -20]
  //       }
  // var defaultIcon = {
  //         iconUrl: 'assets/dot-grey.png',
  //         iconSize:     [15, 15],
  //         iconAnchor:   [15, 15],
  //         popupAnchor:  [-7, -20]
  //       }

  // Map variables
  var markers = allMarkers;
  var bounds = {
    northEast:{
      lat: 37.86862005954327,
      lng: -122.12230682373048
    },
    southWest:{
      lat: 37.68436373334184,
      lng: -122.55901336669923
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
    allStories:{
      type: 'group',
      name: 'allStories',
      visible: false
    },
    pastMonth: {
      type: 'group',
      name: 'pastMonth',
      visible: false
    },
    thisMonth: {
      type: 'group',
      name: 'thisMonth',
      visible: true
    }
  };

  angular.extend($scope, {
    maxbounds: bounds,
    defaults: {
      scrollWheelZoom: false,
      maxZoom: 14,
      minZoom: 10
    },
    layers: {
      baselayers: {
       mapbox: baseLayers.mapbox
     },
     overlays: {
      allStories: definedOverlays.allStories,
      pastMonth: definedOverlays.pastMonth,
      thisMonth: definedOverlays.thisMonth
    }
  },
   markers: markers
  });

  // Splash stuff
  angular.element(document).ready(function () {
    function toggle(){$scope.isVisible = !$scope.isVisible;}
    $timeout(toggle, 1000);
  });

}])

