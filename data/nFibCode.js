function nFibonacci(n) {
  if (n === 0) {
    return 0;
  }
  else if (n === 1){
    return 1;
  } else {
    return nFibonacci(n-1) + nFibonacci(n-2);
  }
}

nFibonacci(7);
