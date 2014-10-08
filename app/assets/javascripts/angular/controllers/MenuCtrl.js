app.controller("MenuCtrl", ['$scope', 'navOffCanvas', function($scope, navOffCanvas){
  $scope.toggle = false;
  $scope.toggleNav = navOffCanvas.toggle;
}])
