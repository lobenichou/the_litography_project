app.controller("MapCtrl", ['$scope', "leafletData", "storyService", function($scope, leafletData, storyService ){

// Variables
$scope.stories = [];
$scope.markers = []

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

setMap($scope, storyService)

}])