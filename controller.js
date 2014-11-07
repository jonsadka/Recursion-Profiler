app.controller('BubbleController',['$scope', '$window', 'recursiveFactory', function($scope, $window, recursiveFactory){
    
  $scope.charts = [1,2,3,4,5,6];

  $scope.shared = {
    ourData: [1,2,3,4,5,6]
  };
  
  angular.element($window).on('resize', function(){
    $scope.$apply();
  });

}]);