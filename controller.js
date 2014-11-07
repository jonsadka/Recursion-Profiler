app.controller('BubbleController',['$scope', '$window', '$http', function($scope, $window, $http){
    
  $scope.charts = d3.range(5).map(function(){
    return d3.range(10).map(Math.random);
  });

  $scope.shared = {
    ourData: d3.range(10).map(Math.random)
  };

  $scope.bubbleData = loadBubbleJSON($http, 'data/');


  // Start digest cycle on window resize  
  angular.element($window).on('resize', function(){
    $scope.$apply();
  });

}]);



function loadBubbleJSON($http, path){
  var result = [];

  var dataFiles = [
    'bubbleSortData.json',
    'linkedListData.json',
    'mergeSortData.json',
    'nFibData.json',
    'quickSortData.json'
  ];

  dataFiles.forEach(function(fileName){
    $http.get(path + fileName).then(function(res){
      result.push(res.data);
    });
  });

  return result;
}