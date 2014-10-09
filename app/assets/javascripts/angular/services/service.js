app.factory('Markers', ["$http", function($http) {
    var Markers = []
    var defaultIcon = {
    iconUrl: 'assets/dot-grey.png',
    iconSize:     [15, 15],
    iconAnchor:   [15, 15],
    popupAnchor:  [-7, -20] // point from which the popup should open relative to the iconAnchor
  }
    var promise = $http.get("/api/v1/stories.json").error(function(data){
            console.log("error")
        })
         .success(function(data){
            var stories = data.stories;
            for (i=0 ; i < stories.length; i++){
                for (j=0; j < stories[i].locations.length; j++){
                    Markers[i] = {lat: stories[i].locations[j].latitude, lng: stories[i].locations[j].longitude, message: stories[i].title, icon: defaultIcon}
                }
            }
            return Markers
        })

    return {
      markers: Markers
    }

}]);


app.factory('navOffCanvas', ["cnOffCanvas", function (cnOffCanvas) {
  return cnOffCanvas({
    controller: 'MenuCtrl',
    templateUrl: 'nav.html'
  })
}])