app.controller("MenuCtrl", ['$scope', '$http', 'navOffCanvas', function($scope, $http, navOffCanvas){

  // Authors
  $scope.authors
  $http.get("/api/v1/authors.json").error(function(data){
            console.log("error")
        })
        .success(function(data){
          $scope.authors = data.authors;
          return $scope.authors
        })

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

  $scope.toggleDropdown = function($event) {
    $event.preventDefault();
    $event.stopPropagation();
    $scope.status.isopen = !$scope.status.isopen;
  };



}])
