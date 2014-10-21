app.factory('Markers', ["$http", "$q", function($http, $q) {
    var Markers = []
    var events_markers = []
    var stories_markers = []
    var defaultIcon =  {
        iconUrl: 'assets/dot-grey.png',
        iconSize:     [15, 15],
        iconAnchor:   [15, 15],
        popupAnchor:  [-7, -20]
    }
    var event_data = $http.get("/api/v1/events.json"),
        story_data = $http.get("/api/v1/stories.json")

    $q.all([event_data, story_data]).then(function(results) {
        var data_stories = results[1].data.stories
        var data_events = results[0].data.event
        for (i=0 ; i < data_stories.length; i++){
            for (j=0; j < data_stories[i].locations.length; j++){
                var lat = data_stories[i].locations[j].latitude
                var lng = data_stories[i].locations[j].longitude
                var title = data_stories[i].title
                var layer = "stories"
                Markers.push({layer: layer, lat:lat, lng:lng, message: title, icon: defaultIcon})
            }
        }
        for (e=0 ; e < data_events.length; e++){
            if (data_events[e].latitude !== null){
                var lat = data_events[e].latitude
                var lng = data_events[e].longitude
                var title = data_events[e].name
                var layer = "events"
                Markers.push({layer: layer, lat:lat, lng: lng, message: title, icon: defaultIcon})
            }
        }
        return Markers
    });
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