function nFib(n) {
  if (n === 0) {
    return 0;
  }
  else if (n === 1){
    return 1;
  } else {
    return nFib(n-1) + nFib(n-2);
  }
}
nFib(7);