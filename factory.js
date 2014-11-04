app.factory('recursiveFactory', ['$http', function(http){

  var path = ''// add url here

  return {
    init: function(jsonData){

      // do logic

      var promise = http.get( path, jsonData, {

        headers: {
          
        }

      })

    }
  };

})