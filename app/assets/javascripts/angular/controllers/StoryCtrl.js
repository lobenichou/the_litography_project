app.controller("StoryCtrl", ['$scope', '$modal', 'showStory',  function($scope, $modal, showStory){
    // TBD: add closing button to modal
    $scope.dismiss = function() {
      $scope.$dismiss();
      };

    $scope.story = showStory
}])

