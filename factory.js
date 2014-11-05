app.factory('recursiveFactory', ['$http', '$q', function($http, $q){
  var url =  "https://api.uber.com/v1/estimates/price?";
  url += "start_latitude=37.625732&start_longitude=-122.377807";
  url += "&end_latitude=37.785114&end_longitude=-122.406677";
  url += "&server_token=Gfna7WFIVdjbi5oaaQHIav-X1X27PWyHUAaWoOqA";

  var fetch = function(){
    console.log(url)
    var deferred = $q.defer();
    $http.get(url).success(deferred.resolve).error(deferred.reject);
    return deferred.promise;
  };

  return {
    fetch: fetch
  };

}]);