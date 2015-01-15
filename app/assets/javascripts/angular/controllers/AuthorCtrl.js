app.controller("AuthorCtrl", ['$scope', '$modalInstance', 'showAuthor',  function($scope, $modalInstance, showAuthor){
    // TBD: add closing button to modal
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
}])

