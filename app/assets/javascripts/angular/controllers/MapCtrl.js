app.controller("MapCtrl", ['$scope', function($scope){
  angular.extend($scope, {
          center: {
              lat: 37.7766849831305,
              lng: -122.34066009521486,
              zoom: 12
          },
          defaults: {
              scrollWheelZoom: false
          }
      });
}])