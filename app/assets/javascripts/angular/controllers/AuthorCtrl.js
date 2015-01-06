app.controller("AuthorCtrl", ['$scope', '$modal', 'showAuthor',  function($scope, $modal, showAuthor){
    // TBD: add closing button to modal
    $scope.dismiss = function() {
      $scope.$dismiss();
      };

    $scope.author = showAuthor
}])

