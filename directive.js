app.directive('bubbleDirective', ['d3', function(d3){

  

  return {
    restrict: 'EA',
    link: function(scope, el, attr){
      console.log('Redered!');
    }
  }
}])