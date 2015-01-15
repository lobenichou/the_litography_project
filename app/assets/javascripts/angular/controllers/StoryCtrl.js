app.controller("StoryCtrl", ['$scope', '$modal', 'showStory', '$sce',  function($scope, $modal, showStory, $sce){
    // TBD: add closing button to modal
    $scope.dismiss = function() {
      $scope.$dismiss();
      };
    $scope.story = showStory
    // Get html safe from db
    $scope.description = $sce.trustAsHtml(showStory.text);

}])

