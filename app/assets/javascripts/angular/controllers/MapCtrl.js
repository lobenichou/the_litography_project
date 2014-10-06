app.controller("MapCtrl", ['$scope', "$timeout", "leafletData", "storyService", function($scope, $timeout, leafletData, storyService ){

// Variables
$scope.stories = [];
$scope.markers = []
$scope.isVisible = true;
// Bounds
  var bayarea = {
    northEast:{
      lat: 37.86862005954327,
      lng: -122.12230682373048
    },
    southWest:{
      lat: 37.68436373334184,
      lng: -122.55901336669923
    }
  }

// tiles
   var mapbox_litography = {
      name: 'Mapbox Litography',
      url: 'http://api.tiles.mapbox.com/v4/{mapid}/{z}/{x}/{y}.png?access_token={apikey}',
      type: 'xyz',
      options: {
        apikey: 'pk.eyJ1IjoibGF1cmVuYmVuaWNob3UiLCJhIjoiQ1BlZGczRSJ9.EVMieITn7lHNi6Ato9wFwg',
        mapid: 'laurenbenichou.jm96meb6'
      }
    }

// Icon styles
var defaultIcon = {
    iconUrl: 'img/leaf-orange.png',
    shadowUrl: 'img/leaf-shadow.png',
    iconSize:     [38, 95],
    shadowSize:   [50, 64],
    iconAnchor:   [22, 94],
    shadowAnchor: [4, 62],
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
  }

// Init map
  angular.extend($scope, {
    maxbounds: bayarea,
    defaults: {
        scrollWheelZoom: false,
        maxZoom: 14,
        minZoom: 12
    },
     tiles: mapbox_litography
});

// Get markers from data
function setMap($scope, storyService) {
    var stories = storyService.getData();
    stories.then(function(result) {  // this is only run after $http completes
       $scope.stories = result.stories;
        for (i=0 ; i < $scope.stories.length; i++){
          for (j=0; j < $scope.stories[i].locations.length; j++){
            $scope.markers[i] = {lat: $scope.stories[i].locations[j].latitude, lng: $scope.stories[i].locations[j].longitude, message: $scope.stories[i].title }
          }
        }
        console.log($scope.markers)
      // add markers
      angular.extend($scope, {
        markers: $scope.markers
      })
    });
  }

// Splash
angular.element(document).ready(function () {
    function toggle(){$scope.isVisible = !$scope.isVisible;}
    $timeout(toggle, 4000);
});


setMap($scope, storyService)

}])