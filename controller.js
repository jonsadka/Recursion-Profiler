app.controller('recursionCtrl',['$scope', 'recursiveFactory', function($scope, recursiveFactory){
    $scope.description = "See the scripts below";
    $scope.pricing = [];
    $scope.circles = [1,2,3,4,5,6];
    $scope.getPricingData = function(){
      recursiveFactory.fetch().then(function(result){
        $scope.pricing = result;
        console.log('Got the data!', result);
      }, function(error){
        console.log('Oh no, I have an error', error);
      })
    };
  }])