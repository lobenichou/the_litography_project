app.controller("MapCtrl", ['$scope', "$timeout", "leafletData", "Markers", function($scope, $timeout, leafletData, Markers ){

// Variables
$scope.isVisible = true;
$scope.markers = Markers.markers
var selectedIcon = {
        iconUrl: 'assets/dot-orange.png',
        iconSize:     [15, 15],
        iconAnchor:   [15, 15],
        popupAnchor:  [-7, -20]
      }
var defaultIcon = {
        iconUrl: 'assets/dot-grey.png',
        iconSize:     [15, 15],
        iconAnchor:   [15, 15],
        popupAnchor:  [-7, -20]
      }

// Bounds
 $scope.bounds = {
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
 $scope.tiles = {
      name: 'Mapbox Litography',
      url: 'http://api.tiles.mapbox.com/v4/{mapid}/{z}/{x}/{y}.png?access_token={apikey}',
      type: 'xyz',
      options: {
        apikey: 'pk.eyJ1IjoibGF1cmVuYmVuaWNob3UiLCJhIjoiQ1BlZGczRSJ9.EVMieITn7lHNi6Ato9wFwg',
        mapid: 'laurenbenichou.jm96meb6'
      }
    }

// Init map


// Get markers from data
function setMap($scope, markers, bounds, tiles) {
    // add markers
    console.log(markers)
   angular.extend($scope, {
    maxbounds: bounds,
    defaults: {
        scrollWheelZoom: false,
        maxZoom: 14,
        minZoom: 12
    },
     tiles: tiles,
     markers: markers
    });
// $scope.$on('leafletDirectiveMarker.click', function(e, args) {
//     // args.leafletEvent.target.options.icon.options = selectedIcon
// });
  }


angular.element(document).ready(function () {
    function toggle(){$scope.isVisible = !$scope.isVisible;}
    $timeout(toggle, 1000);
});

setMap($scope, $scope.markers, $scope.bounds, $scope.tiles )

// $scope.$watch("query", "$filter",  function(query, $filter){

//     $scope.filteredMarkers = $filter("filter")($scope.markers, query);

//     if (!$scope.filteredMarkers){
//         return true;
//     }else{
//       return $filter('filter')($scope.markers, query).length > 0
//     }
// });

}])
