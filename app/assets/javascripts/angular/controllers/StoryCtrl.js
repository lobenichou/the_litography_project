app.controller("StoryCtrl", ['$scope', '$modal', 'showStory',  function($scope, $modal, showStory){
    $scope.dismiss = function() {
      $scope.$dismiss();
      };

    $scope.story = showStory
    console.log($scope.story)
}])

