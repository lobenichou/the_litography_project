var app = angular.module("litography", ['ngAnimate','ui.router','ngResource', 'templates', 'leaflet-directive', 'cn.offCanvas', 'ui.bootstrap', 'angular-flexslider', 'plangular'])
.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {

    /**
     * Routes and States
     */
     $stateProvider
     .state('home', {
        url: "/",
        views:{
            "splash": {
                templateUrl: "splash.html",
                controller: "SplashCtrl"
            },
            "map":{
                templateUrl: "map.html",
                controller: "MapCtrl",
                resolve:{
                    allMarkers: ["markersService", function(markersService){
                        return markersService.getMarkers()
                    }],
                    allAuthors: ["authorsService", function(authorsService){
                        return authorsService.getAuthors()
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
            }).result.then(function(result) {
                if (result) {
                    return $state.transitionTo("home");
                }
            }, function (){
                return $state.transitionTo("home");
            });
        }]
    }).state('home.authors', {
        url: "authors/:author_id",
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
            }).result.then(function(result) {
                if (result) {
                    return $state.transitionTo("home");
                }
            }, function (){
                return $state.transitionTo("home");
            });
        }]
    })

    // default fall back route
    $urlRouterProvider.otherwise('/');

    // enable HTML5 Mode for SEO
    $locationProvider.html5Mode(true);
}]);


