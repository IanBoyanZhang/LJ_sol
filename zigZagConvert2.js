/*
 * version 2 
 */ 

var convert = function(s, nRows){
  var sArr = '';
  var lane;
  var col = 0;
  var offset = 0;
  var n = nRows;
  var len = s.length;
  var idxMidOff = 0;
  var idxColOff = 0;
  if (n < 2) {
    return s;
  }
  // lane = 0
  if (n == 2) {
    lane = 0;
    idxMidOff = 1;
    idxColOff = 2*n-1;
  } else {
    lane = 1;
    idxMidOff = 2 * lane;
    idxColOff = 2 * n - 2;
    for ( offset = 0; offset < len; offset += idxColOff ) {
      sArr += s[offset];
    }
  }
  // lane till n - 1
  for ( ; lane < n - 1; lane ++) {
    for (col = 0, offset = 0 ; ; col += 1) {
      if (col > 0) {
        offset = col * idxColOff - idxMidOff;
        if (lane + offset > len - 1) {
          break;
        }
        sArr += s[lane + offset];
      }

      offset = col * idxColOff;
      if (lane + offset > len - 1) {
        break;
      }
      sArr += s[lane + offset];
    }
  }
  // lane = n - 1;
  for ( offset = 0; offset + n-1 <= len - 1; offset += idxColOff ) {
    sArr += s[n -1 + offset];
  }
  return sArr;
}

var s = "PAYPALISHIRING";
console.log(convert(s, 3));

var s = "ujjytonrpqveidwauczoycemwonnmkbjvkjoawgrmdvwirwctyquaviylxmyhpjfcstcqbufepbmjyreyhyaeizqfnqpczugtnj";
console.log(convert(s, 14));
//convert(s, 14);
var s = "AB";
console.log(convert(s, 1));


var s = "ABC";
console.log(convert(s, 2));
var s = "ABCD";
console.log(convert(s, 2));
var s = "AB";
console.log(convert(s, 2));

var s = "ABCDE";
console.log(convert(s, 2));


