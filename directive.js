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

    var bubbles = g.selectAll('.bubblesInChart');

    // Update elements on resize of page
    scope.$watch(function(){
      return el.clientWidth * el.clientHeight;
    }, function(){
      console.log('Window Resized');
      width = el.clientWidth;
      height = el.clientHeight;

      min = Math.min(width, height);

      svg.attr({width: width, height: height});

      g.attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')');

      bubbles.attr({'r': 100, 'cx':100, 'cy':100, 'class':'bubblesInChart'});
    });

    // Function when data is added or removed
    scope.$watch('data', function(data){
      console.log('Data changed');
      // bubbles.enter().append('circle')
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