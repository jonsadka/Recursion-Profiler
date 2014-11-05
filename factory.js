app.factory('recursiveFactory', ['$http', '$q', function($http, $q){
  var header = { headers: {'Access-Control-Allow-Origin' : '*',
                           'Access-Control-Allow-Methods' : 'POST, GET, OPTIONS',
                           'Access-Control-Allow-Headers' : 'Origin, X-Requested-With, Content-Type, Accept',
                           'Accept': 'application/json'}
    };

  var fetchPrice = function(){
    var url =  "https://api.uber.com/v1/estimates/price?";
    url += "start_latitude=37.625732&start_longitude=-122.377807";
    url += "&end_latitude=37.785114&end_longitude=-122.406677";
    url += "&server_token=Gfna7WFIVdjbi5oaaQHIav-X1X27PWyHUAaWoOqA";
    var deferred = $q.defer();
    $http.get(url, { headers: {"Access-Control-Allow-Origin": "*"} })
      .success(deferred.resolve)
      .error(deferred.reject);
    return deferred.promise;
  };

  var fetchTime = function(){
    console.log('Fetching Time!')
    var url =  "https://api.uber.com/v1/estimates/time?";
    url += "start_latitude=37.625732&start_longitude=-122.377807";
    url += "&server_token=Gfna7WFIVdjbi5oaaQHIav-X1X27PWyHUAaWoOqA";
    var deferred = $q.defer();
    $http.get(url, header)
      .success(deferred.resolve)
      .error(deferred.reject);
    return deferred.promise;
  };

  return {
    fetchPrice: fetchPrice,
    fetchTime: fetchTime
  };

}]);

// https://api.uber.com/v1/estimates/time?start_latitude=37.625732&start_longitude=-122.377807&server_token=Gfna7WFIVdjbi5oaaQHIav-X1X27PWyHUAaWoOqA
