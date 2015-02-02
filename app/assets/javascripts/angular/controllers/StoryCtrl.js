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
    var htmlPlayer = '<iframe width="100%" height="20" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/' + showStory.audio + '&amp;color=d9eded&amp;inverse=false&amp;auto_play=false&amp;show_user=true"></iframe>'
    $scope.player =  $sce.trustAsHtml(htmlPlayer);

}])

