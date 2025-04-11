/*
 * @lc app=leetcode id=264 lang=javascript
 *
 * [264] Ugly Number II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function (n) {
  let p2 = 1;
  let p3 = 1;
  let p5 = 1;
  let ugly = new Array(n + 1);
  let p = 1;
  let product2 = 1;
  let product3 = 1;
  let product5 = 1;
  while (p <= n) {
    let min = Math.min(Math.min(product2, product3), product5);
    ugly[p] = min;
    p++;
    if (min == product2) {
      product2 = 2 * ugly[p2];
      p2++;
    }
    if (min == product3) {
      product3 = 3 * ugly[p3];
      p3++;
    }
    if (min == product5) {
      product5 = 5 * ugly[p5];
      p5++;
    }
  }

  return ugly[n];
};
// @lc code=end
let n = 10;
console.log(nthUglyNumber(n));
