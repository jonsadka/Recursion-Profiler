app.controller('recursionCtrl',['$scope', 'recursiveFactory', function($scope, recursiveFactory){
    $scope.pricing = [];
    $scope.time = [];
    $scope.circles = [1,2,3,4,5,6];
    $scope.getPricingData = function(){
      recursiveFactory.fetchPrice().then(function(result){
        $scope.pricing = result;
        console.log('Got the data!', result);
      }, function(error){
        console.log('Oh no, I have an error', error);
      })
    };
    $scope.getTimeData = function(){
      recursiveFactory.fetchTime().then(function(result){
        $scope.time = result;
        console.log('Got the data!', result);
      }, function(error){
        console.log('Oh no, I have an error', error);
      })
    };
  }])