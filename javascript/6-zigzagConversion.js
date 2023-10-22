/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if (numRows == 1) {
    return s;
  }
  jump = numRows * 2 - 2;
  newStr = "";
  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j + i < s.length; j += jump) {
      newStr += s[j + i];

      if (i != 0 && i != numRows - 1 && j + jump - i < s.length) {
        newStr += s[j + jump - i];
      }
    }
  }
  return newStr;
};

s = "PAYPALISHIRING";
// s = "123456789";
numRows = 4;

console.log(convert(s, numRows));
