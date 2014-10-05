app.controller("MapCtrl", ['$scope', "leafletData", function($scope, leafletData){

  var bayarea = {
    northEast:{
      lat: 37.86862005954327,
      lng: -122.12230682373048
    },
    southWest:{
      lat: 37.68436373334184,
      lng: -122.55901336669923
    }
  }

   var mapbox_litography = {
                name: 'Mapbox Litography',
                url: 'http://api.tiles.mapbox.com/v4/{mapid}/{z}/{x}/{y}.png?access_token={apikey}',
                type: 'xyz',
                options: {
                    apikey: 'pk.eyJ1IjoibGF1cmVuYmVuaWNob3UiLCJhIjoiQ1BlZGczRSJ9.EVMieITn7lHNi6Ato9wFwg',
                    mapid: 'laurenbenichou.jm96meb6'
                }
              }

  angular.extend($scope, {
          maxbounds: bayarea,
          defaults: {
              scrollWheelZoom: false,
              maxZoom: 14,
              minZoom: 12
          },
           tiles: mapbox_litography
      });
}])