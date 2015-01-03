app.factory('markersService', ["$http", "$q", function($http, $q) {
    return {
        getMarkers: function(){
            var defaultIcon =  {
                    iconUrl: 'assets/dot-grey.png',
                    iconSize:     [15, 15],
                    iconAnchor:   [15, 15],
                    popupAnchor:  [-7, -20]
                }
            return $http.get("/api/v1/stories.json").then(
                function(results){
                    var data_stories = results.data.stories
                    var markers = []
                    for (i=0 ; i < data_stories.length; i++){
                        for (j=0; j < data_stories[i].locations.length; j++){
                            var lat = data_stories[i].locations[j].latitude
                            var lng = data_stories[i].locations[j].longitude
                            var title = '<a href="/stories/' + data_stories[i].id + '">' + data_stories[i].title + '</a>'
                            var allPast = "allStories"
                            var lastMonth = "lastMonth"
                            var thisMonth = "thisMonth"
                            var pub_at = results.data.stories[i].published_at.split("-")[1]
                            var ct = new Date()
                            console.log(ct)
                            var currentMonth = ct.getMonth() + 1
                            console.log(pub_at, currentMonth)
                            if (pub_at == currentMonth){
                                markers.push({layer: thisMonth, lat:lat, lng:lng, message: title, icon: defaultIcon})
                            }else{
                                markers.push({layer: lastMonth , lat:lat, lng:lng, message: title, icon: defaultIcon})
                            }
                            markers.push({layer: allPast, lat:lat, lng:lng, message: title, icon: defaultIcon})
                         }
                    }
                    return markers
                },
                function(error){
                    console.log(error)
                })
            }}
    }]).factory('authorsService', ["$http", function($http){
            return{
                getAuthors: function(){
                    return  $http.get("/api/v1/authors.json").then(
                        function(results){
                            var authors = results.data.authors;
                            return authors
                    }, function(error){
                        console.log(error)
                    })
                }
            }
        }]).factory('storyService', ["$http", function($http){
            return {
                getStory: function(id){
                return $http.get("/api/v1/stories/" + id).then(function(results){
                    var story = results.data
                    return story
                }, function(error){
                    console.log(error)
                })
                }
            }
        }]).factory('navOffCanvas', ["cnOffCanvas", function (cnOffCanvas) {
            return cnOffCanvas({
                templateUrl: 'nav.html'
              })
            }])