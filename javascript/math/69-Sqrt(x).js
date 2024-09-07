/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  let start = 0;
  let end = x;
  let ans = 0;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (mid * mid > x) {
      end = mid - 1;
    } else {
      ans = mid;
      start = mid + 1;
    }
    console.log("mid", mid, "start", start, "end", end);
  }
  return ans;
};
let x = 8;
console.log(mySqrt(x));
