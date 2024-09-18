/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  let maxLength = Math.max(num1.length, num2.length);
  num1 = num1.padStart(maxLength, "0");
  num2 = num2.padStart(maxLength, "0");
  let res = "";
  let carry = 0;
  for (let i = num1.length - 1; i >= 0; i--) {
    let temp = parseInt(num1[i]) + parseInt(num2[i]) + carry;
    carry = Math.floor(temp / 10);
    res = (temp % 10) + res;
  }
  if (carry) {
    res = 1 + res;
  }

  return res;
};

let num1 = "1";
let num2 = "9";
console.log(addStrings(num1, num2));
