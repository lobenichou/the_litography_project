app.controller("AuthorCtrl", ['$scope', '$sce', '$modalInstance', 'showAuthor',  function($scope, $sce, $modalInstance, showAuthor){

    $scope.dismiss = function() {
      $scope.$dismiss();
      };

    deRegister = $scope.$on('$stateChangeSuccess',
                    function(event, toState, toParams, fromState, fromParams) {
                        if (toState.name === 'home' &&
                            fromState.name === 'home.authors') {
                            $modalInstance.close();//Close the modal
                            deRegister();//deRegister listener on first call
                        }
                    }
                );

    $scope.author = showAuthor
    var htmlPlayer = '<iframe width="100%" height="20" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/' + $scope.author.book_report_link + '&amp;color=d9eded&amp;inverse=false&amp;auto_play=false&amp;show_user=true"></iframe>'
    $scope.player =  $sce.trustAsHtml(htmlPlayer);
}])

