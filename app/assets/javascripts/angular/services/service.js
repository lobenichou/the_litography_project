app.factory('storyService', function($http, $q) {
    var getData = function() {
        var deferred = $q.defer();

        $http({method:"GET", url:"/api/v1/stories.json"}).success(function(data){
            deferred.resolve(data);
            console.log("data")
        })
        .error(function(data) {
            console.log("error")
        });

        return deferred.promise;
    };
    return { getData: getData };

});

