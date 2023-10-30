/**
 * @param {number} n
 * @return {boolean}
 */

function sum(n) {
  let sum = 0;

  while (n) {
    sum += (n % 10) ** 2;
    n = Math.floor(n / 10);
  }
  return sum;
}
var isHappy = function (n) {
  sumSet = new Set();

  while (n !== 1 && !sumSet.has(n)) {
    sumSet.add(n);
    n = sum(n);
  }

  return n == 1;
};

console.log(isHappy(2));
