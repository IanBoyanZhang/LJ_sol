var hammingWeight = function(n){
  var counter = 0;
  while(n > 0){
    if(n & 1){
      counter+=1;
    }
    n = n >> 1;
  }
  return counter;
}

console.log(hammingWeight(11));

