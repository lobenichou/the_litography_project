app.controller("MultiStoryCtrl", ['$scope', '$q', '$timeout', 'leafletData', '$modalInstance', 'showMultiStory', '$sce',  function($scope, $q, $timeout, leafletData, $modalInstance, showMultiStory, $sce){

  $scope.dismiss = function() {
    $scope.$dismiss();
  };

// Initialize first part of the story
  $scope.multistory = showMultiStory.info;
  $scope.part = $scope.multistory.parts[$scope.multistory.parts.length -1]
  $scope.template = "multistory-part.html"
  var htmlPlayer = '<iframe width="100%" height="120" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/' + $scope.part.audio + '&amp;color=d9eded&amp;inverse=false&amp;auto_play=false&amp;show_user=false&amp;show_artwork=false"></iframe>'
  $scope.player =  $sce.trustAsHtml(htmlPlayer);
  $scope.description = $sce.trustAsHtml($scope.part.text);
   var markers = showMultiStory.markers

// Update template
  $scope.setState = function(id){
    var id = id
    for (var i=0; i < markers.length; i++){
      if (markers[i].id == id){
          $scope.start.lat = markers[i].lat;
          $scope.start.lng = markers[i].lng;

        }
      }
    for(var i=0; i < $scope.multistory.parts.length ;i++){
      if ($scope.multistory.parts[i].part_number == id){
          $scope.part = $scope.multistory.parts[i]
          $scope.template = "multistory-part.html"
          var htmlPlayer = '<iframe width="100%" height="20" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/' + $scope.multistory.parts[i].audio + '&amp;color=d9eded&amp;inverse=false&amp;auto_play=false&amp;show_user=true"></iframe>'
          $scope.player =  $sce.trustAsHtml(htmlPlayer);
          $scope.description = $sce.trustAsHtml( $scope.multistory.parts[i].text);
        }
      }
    };


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

  angular.extend($scope, {
    start:{
      lat: markers[0].lat ,
      lng: markers[0].lng,
      zoom: 17
    },
    icons: icons,
    defaults: {
      zoomControlPosition: 'bottomright',
      scrollWheelZoom: false,
      maxZoom: 17,
      minZoom: 17
    },
    layers: {
      baselayers: {
        mapbox: baseLayers.mapbox
      }
    },
    markers: markers
  });


  deRegister = $scope.$on('$stateChangeSuccess',
    function(event, toState, toParams, fromState, fromParams) {
      if (toState.name === 'home' &&
        fromState.name === 'home.multistories') {
                            $modalInstance.close();//Close the modal
                            deRegister();//deRegister listener on first call
                          }
                        }
                        );
}])

