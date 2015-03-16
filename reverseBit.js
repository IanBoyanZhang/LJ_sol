var reverseBits = function(n) {
  var stack = [];
  var result = 0;
  var v = 0;
  var i = 0;
  while(n > 0){
    stack[stack.length] = n & 1;
    n = n >>> 1;
  }

  while(stack.length < 32){
    stack[stack.length] = 0;
  }

  // Reverse
  while(i < 32){
    result = result << 1 | stack[i];
    //result = (result | stack[i]) << 1;
    i+=1;
  }
 
 /* 
  function join_bitmap(hex_lower_word, hex_upper_word){
    var mask15 = 0x7fff;
    var bit15 = 0x8000;
    var bit31 = 0x80000000;
    return 0xffffffff & (((hex_upper_word&mask15) << 16) | hex_lower_word) + 
      ((hex_upper_word & bit15)?bit31:0);
  }
*/

  if(stack[0] === 1){
  //  join_bitmap(0x0000, result);
    result = 1 * Math.pow(2, 31) + (result&0x7fff);
  }

  return result;
}

console.log(reverseBits(43261596));
console.log(reverseBits(1));
