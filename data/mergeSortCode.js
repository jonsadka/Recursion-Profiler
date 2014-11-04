function mergeSort(items){
  if (items.length < 2){
    return items;
  }

  var middle = parseInt(items.length / 2);
  var left   = items.slice(0, middle);
  var right  = items.slice(middle, items.length);

  return merge(mergeSort(left), mergeSort(right));
}
 
function merge(left, right){
  var result = [];

  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }

  while (left.length){
    result.push(left.shift());
  }

  while (right.length){
    result.push(right.shift());
  }

  return result;
}

mergeSort([2,4,5,3,8,6,7,1,9]);
