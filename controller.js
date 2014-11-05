app.controller('recursionCtrl',['$scope', 'recursiveFactory', function($scope, recursiveFactory){
    $scope.getData = function(){
      recursiveFactory.fetch().then(function(result){
        console.log('Got the data!', result);
      }, function(error){
        console.log('Oh no, I have an error', error);
      })
    };
    $scope.description = "See the scripts below";
    $scope.circles = [1,2,3,4,5,6];
  }])