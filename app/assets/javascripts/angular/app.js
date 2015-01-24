var app = angular.module("litography", ['ngAnimate','ui.router','ngResource', 'templates', 'leaflet-directive', 'cn.offCanvas', 'ui.bootstrap', 'angular-flexslider', 'plangular'])
.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {

    /**
     * Routes and States
     */
     $stateProvider
     .state('home', {
        url: "/",
        views:{
            // "splash": {
            //     templateUrl: "splash.html",
            //     controller: "SplashCtrl"
            // },
            "map":{
                templateUrl: "map.html",
                controller: "MapCtrl",
                resolve:{
                    allMarkers: ["markersService", function(markersService){
                        return markersService.getMarkers()
                    }],
                    allAuthors: ["authorsService", function(authorsService){
                        return authorsService.getAuthors()
                    }],
                    allStories: ["storyService", function(storyService){
                        return storyService.getStories()
                    }]
                }
            }
        }
    }).state('home.stories', {
        url: "^/stories/:story_id",
        onEnter: ["storyService", "$stateParams", "$modal", "$state", function (storyService, $stateParams, $modal, $state){
            $modal.open({
                templateUrl: "story.html",
                resolve: {
                    showStory: ["storyService", function(storyService){
                        console.log("resolving...")
                        return storyService.getStory($stateParams.story_id)
                    }]
                },
                controller: "StoryCtrl"
            }).result.finally(function () {
                $state.go('home');
            });
        }]
    }).state('home.authors', {
        url: "^/authors/:author_id",
        onEnter: ["authorsService", "$stateParams", "$modal", "$state", function (authorsService, $stateParams, $modal, $state){
            $modal.open({
                templateUrl: "author.html",
                resolve: {
                    showAuthor: ["authorsService", function(authorsService){
                        console.log("resolving...")
                        return authorsService.getAuthor($stateParams.author_id)
                    }]
                },
                controller: "AuthorCtrl"
            }).result.finally(function () {
                $state.go('home');
            });
        }]
    }).state('home.pitch',{
        url: "^/pitch",
        onEnter: ['$modal', "$state", function($modal, $state){
            $modal.open({
                templateUrl: "pitch.html",
                controller: ['$scope', '$modalInstance', function($scope, $modalInstance) {
                    $scope.dismiss = function() {
                                $scope.$dismiss();
                    };
                    deRegister = $scope.$on('$stateChangeSuccess',
                        function(event, toState, toParams, fromState, fromParams) {
                            if (toState.name === 'home' &&
                                fromState.name === 'home.pitch') {
                            $modalInstance.close();//Close the modal
                            deRegister();//deRegister listener on first call
                        }
                    }
                    );
                }]
            }).result.finally(function () {
                $state.go('home');
            });
        }]
    }).state('home.about',{
        url: "^/about",
        onEnter: ['$modal', "$state", function($modal, $state){
            $modal.open({
                templateUrl: "about.html",
                controller: ['$scope', '$modalInstance', function($scope, $modalInstance) {
                    $scope.dismiss = function() {
                                $scope.$dismiss();
                    };
                    deRegister = $scope.$on('$stateChangeSuccess',
                        function(event, toState, toParams, fromState, fromParams) {
                            if (toState.name === 'home' &&
                                fromState.name === 'home.about') {
                            $modalInstance.close();//Close the modal
                            deRegister();//deRegister listener on first call
                        }
                    }
                    );
                }]
            }).result.finally(function () {
                $state.go('home');
            });
        }]
    })

    // default fall back route
    $urlRouterProvider.otherwise('/');

    // enable HTML5 Mode for SEO
    $locationProvider.html5Mode(true);
}]);


