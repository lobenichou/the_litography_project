app.controller("MapCtrl", ['$scope', "$timeout", "leafletData", "allMarkers", function($scope, $timeout, leafletData, allMarkers){
  $scope.isVisible = true;
  $scope.markers = allMarkers
  console.log($scope.markers)

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

  $scope.baseLayers = {
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

  $scope.definedOverlays = {
    allStories:{
      type: 'group',
      name: 'allStories',
      visible: true
    },
    pastMonth: {
      type: 'group',
      name: 'pastMonth',
      visible: true
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
       mapbox: $scope.baseLayers.mapbox
     },
     overlays: {
      allStories: $scope.definedOverlays.allStories,
      pastMonth: $scope.definedOverlays.pastMonth,
      thisMonth: $scope.definedOverlays.thisMonth
    }
  },
  markers: $scope.markers
});

  angular.element(document).ready(function () {
    function toggle(){$scope.isVisible = !$scope.isVisible;}
    $timeout(toggle, 1000);
  });

leafletData.getLayers().then(function(results){
  console.log(results)
})
  // $rootScope.toggleLayer = function(layer, newLayer){
  //   if($scope.layers.overlays[layer].visible ){
  //     $scope.layers.overlays[layer].visible = false;
  //     $scope.layers.overlays[newLayer].visible = true;
  //   }
  // }
}])

