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
                        // Add conditional for story types icons
                        for (j=0; j < data_stories[i].locations.length; j++){
                            var el = data_stories[i]
                            var lat = el.locations[j].latitude
                            var lng = el.locations[j].longitude
                            var title = '<div class="popup-content"><a href="/stories/' + el.id + '">' + el.title + '</a></div>'
                            var bg_image = "<img class='popup-image' src='" + el.book_cover + "'>"

                            var icons = "<div class='symbols'><div ng-if='markers.visual'><img src='/assets/visual.png'></div><div ng-if='markers.sound'><img src='/assets/audio.png'></div><div ng-if='markers.writing'><img src='/assets/writing.png'></div><div ng-if='markers.multimedia'><img src='/assets/multimedia.png'></div></div>"
                            var content = title + bg_image + icons
                            var published = el.published
                            var allPast = "allStories"
                            var lastMonth = "lastMonth"
                            var thisMonth = "thisMonth"
                            var pub_at = el.published_at.split("-")[1]
                            var ct = new Date()
                            var currentMonth = ct.getMonth() + 1
                            if (published == true){
                                if (pub_at == currentMonth){
                                    markers.push({layer: thisMonth, lat:lat, lng:lng, message: content, icon: defaultIcon, visual: el.visual, sound: el.sound, writing: el.writing, multimedia: el.multimedia })
                                }else{
                                    markers.push({layer: lastMonth , lat:lat, lng:lng, message: content, icon: defaultIcon})
                                }
                                markers.push({layer: allPast, lat:lat, lng:lng, message: content, icon: defaultIcon})
                            }
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
                },
                getAuthor: function (id){
                    return $http.get("/api/v1/authors/" + id).then( function(results){
                        var author = results.data
                        return author
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