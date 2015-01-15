app.controller("StoryCtrl", ['$scope', '$modalInstance', 'showStory', '$sce',  function($scope, $modalInstance, showStory, $sce){
    // TBD: add closing button to modal
    $scope.dismiss = function() {
      $scope.$dismiss();
      };

      deRegister = $scope.$on('$stateChangeSuccess',
                    function(event, toState, toParams, fromState, fromParams) {
                        if (toState.name === 'home' &&
                            fromState.name === 'home.stories') {
                            $modalInstance.close();//Close the modal
                            deRegister();//deRegister listener on first call
                        }
                    }
                );

    $scope.story = showStory
    // Get html safe from db
    $scope.description = $sce.trustAsHtml(showStory.text);

}])

