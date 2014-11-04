function quickSort(items){
  //if itemsay is empty
  if (items.length === 0) {
    return [];
  }
  var left = [];
  var right = [];
  var pivot = items[0];
  //go through each element in itemsay
  for (var i = 1; i < items.length; i++) {
    if (items[i] < pivot) {
     left.push(items[i]);
    } else {
     right.push(items[i]);
    }
  }
  return quickSort(left).concat(pivot, quickSort(right));
}

quickSort([2,4,5,3,8,6,7,1,9]);
