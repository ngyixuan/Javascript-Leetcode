/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  var calcPower = function (x, n) {
    console.log("x", x, "n", n);
    if (x == 0) return 0;
    if (n == 0) return 1;
    let res = calcPower(x, Math.floor(n / 2));
    res = res * res;

    if (n % 2 == 0) {
      return res;
    } else {
      return res * x;
    }
  };

  let ans = calcPower(x, Math.abs(n));
  if (n >= 0) return ans;
  else {
    return 1 / ans;
  }
};

let x = 2;
let n = 10;

console.log(myPow(x, n));
