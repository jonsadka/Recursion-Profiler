app.directive('bubbleChartDirective', [function(){

  // Render Function
  function link(scope, el, attr){
    console.log('Redered!');
    var data = scope.data;
    var el = el[0];
    var width = el.clientWidth;
    var height = el.clientHeight;
    var min = Math.min(width, height);
    var svg = d3.select(el).append('svg');
    var g = svg.append('g');

    // Update elements on resize of page
    scope.$watch(function(){
      return el.clientWidth * el.clientHeight;
    }, function(){
      width = el.clientWidth;
      height = el.clientHeight;

      min = Math.min(width, height);

      svg.attr({width: width, height: height});

      g.attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')');
    });

    // Function when data is added or removed
    scope.$watch('data', function(data){
      console.log('data changed');
    });

  }

  return {
    link: link,
    restrict: 'E',
    scope: {
      data: '='
    }
  };
}]);