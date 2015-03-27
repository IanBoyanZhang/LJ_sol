/**
 * @param {number} str
 * @returns {number}
 */

// Slow needs to improve performance
var atoi = function(str) {
  var BASE = 10;
  var ASCII_NUM0 = 0x30;
  var ASCII_NUM9 = 0x39;
  var ASCII_PLUS = 0x2B;
  var ASCII_MINUS = 0x2D 
  var ASCII_DEC_MARK = 0x2E;
  var ASCII_SPACE = 0x40;

  var INT_MAX = 2147483647;
  var INT_MIN = -2147483648;
  var strArr = '';
  var signBit = 0;
  var decBit = 0;
  var code = 0;

  var iter = 0;
  var originalIter = 0;
  var len = str.length;
  var intNum = 0;
  var singleDigit = 0;
  if (str === '') {
    return 0;
  }

  // Remove starting white space
  while( str[iter] === ' ' ){
      if ( iter < len - 1 ) {
        iter++;
      } else {
        return 0;
      }
  }

  // Check starting number or signBit if exists
  code = str[iter].charCodeAt();
  singleDigit = code - ASCII_NUM0;
  var isNum = (singleDigit < BASE && singleDigit >= 0) ? true : false;
  if (isNum) {
    signBit = 1;
    // First number
    intNum = singleDigit;
  } else {
    switch (code) {
      case ASCII_PLUS:
        signBit = 1;
        break;
      
      case ASCII_MINUS:
        signBit = -1;
        break;

      default:
        return 0;
    }
    
    // Check next starting number
    // remove white space
    iter+=1;
    /*
    while( str[iter] === ' ' ){
      if ( iter < len - 1) {
        iter++;
      } else {
        return 0;
      }
    }*/

    if (iter === len) {
      return 0;
    }

    code = str[iter].charCodeAt();
    singleDigit = code - ASCII_NUM0;
    isNum = (singleDigit < BASE && singleDigit >= 0) ? true : false;
    if (!isNum) {
      return 0;
    } else {
      // process first num 
      intNum = singleDigit;
    }
  }
    
  for ( iter += 1; iter < len; iter ++) {
    // Removing white space
    if (str[iter] === ' ') {
      break;
    }
    code = str[iter].charCodeAt();
    singleDigit = code - ASCII_NUM0;
    isNum = (singleDigit < BASE && singleDigit >= 0) ? true : false;
    if (isNum) {
      intNum = intNum * BASE + singleDigit;
    } else {
      break;
    }
  }

  if (intNum * signBit > INT_MAX) {
    return INT_MAX;
  }
  if (intNum * signBit < INT_MIN) {
    return INT_MIN;
  }

  return intNum * signBit;
}

/*
console.log(atoi("123"));
console.log("done");
console.log("\n");
console.log(atoi("1x23"));
console.log("done");
console.log("\n");
console.log(atoi("-123"));
console.log("done");
console.log("\n");
console.log(atoi("-1.23"));
console.log("done");
console.log("\n");
console.log(atoi("1.23"));
console.log("done");
console.log("\n");
console.log(atoi("-.23"));
console.log("done");
console.log("\n");
console.log(atoi(" "));
console.log("done");
console.log("\n");
console.log(atoi(" 123"));
console.log("done");
console.log("\n");
console.log(atoi(" -123"));
console.log("done");
console.log("\n");
console.log(atoi(" - 123"));
console.log("done");
console.log("\n");
console.log(atoi(" - 1  2  3   "));
console.log("done");
console.log("\n");
console.log(atoi(" - 1  2 e 3   "));
console.log("done");
console.log("\n");
console.log(atoi(" + 1  2 e 3   "));
console.log("done");
console.log("\n");
console.log(atoi("     "));
console.log("done");
console.log("\n");
console.log(atoi(" +"));
console.log("done");
console.log("\n");
console.log(atoi(" +1"));
console.log("done");
console.log("\n");
*/
console.log(atoi("-2147483649"));
console.log("done");
console.log("\n");

console.log(atoi(" +0 123"));
console.log("done");
console.log("\n");

console.log(atoi("123 456"));
console.log("done");
console.log("\n");

console.log(atoi("  - 321"));
console.log("done");
console.log("\n");






