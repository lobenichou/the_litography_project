var app = angular.module("litography", ['ngAnimate','ui.router','ngResource', 'templates', 'leaflet-directive', 'cn.offCanvas', 'ui.bootstrap', 'angular-flexslider'])
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
        })


    // default fall back route
    $urlRouterProvider.otherwise('/');

    // enable HTML5 Mode for SEO
    $locationProvider.html5Mode(true);
}]);

