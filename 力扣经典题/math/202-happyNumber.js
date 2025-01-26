/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  let numSet = new Set();
  while (n !== 1) {
    if (numSet.has(n)) return false;
    numSet.add(n);
    let total = 0;
    while (n > 0) {
      total += Math.pow(n % 10, 2);
      n = Math.floor(n / 10);
    }
    n = total;
  }

  return true;
};

let n = 2;
console.log(isHappy(n));
