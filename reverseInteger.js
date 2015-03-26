/**
 * @param {number} x
 * @returns {number}
 */

var reverse = function(x) {
  var stack = [];
  var rtnNum = [];
  var base = 10;
  var num = 0;
  var signbit = 0;
  var lastDigit;
  var MAXINT = 2147483647;
  var MININT = -2147483648;
  if (x < 0) {
    signbit = -1;
    num = -x;
  } else {
    signbit = 1;
    num = x;
  }
  // Performance consideration 
  while(num >= 1) {
    lastDigit =  num%base;
    stack[stack.length] = lastDigit;
    // digit shift
    num -= lastDigit;
    num = num/base;
  }
  var i = 0;
  while(i < stack.length) {
    rtnNum += stack[i++]
  }
// Taking care of last digit as zero by using Number
  var rtnVal = Number(signbit * rtnNum);
  return rtnVal > MAXINT || rtnVal < MININT ? rtnVal = 0 : rtnVal;
};

console.log(reverse(123));
console.log(reverse(-123));
console.log(reverse(1));
console.log(reverse(100));
console.log(reverse(2147483647));
console.log(reverse(-2147483648));
console.log(reverse(1000000003));
