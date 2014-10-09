var app = angular.module("litography", ['ngAnimate','ui.router','ngResource', 'templates', 'leaflet-directive', 'cn.offCanvas', 'ui.bootstrap'])
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
                Markers: function(Markers){
                   return Markers
                }
            }
            },
            "menu":{
                templateUrl: "menu.html",
                controller: "MenuCtrl"
            }
           }
        })

    // default fall back route
    $urlRouterProvider.otherwise('/');

    // enable HTML5 Mode for SEO
    $locationProvider.html5Mode(true);
}]);

