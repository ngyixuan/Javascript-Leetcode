/**
 * @param {number[]} start
 * @param {number} d
 * @return {number}
 */
var maxPossibleScore = function (start, d) {
  start.sort((a, b) => a - b);
  let low = 0;
  let high = start[start.length - 1] - start[0] + d;
  let ans = 0;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (check(start, d, mid)) {
      ans = mid;
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return ans;
};

var check = function (start, d, mid) {
  let prev = start[0];
  for (let i = 1; i < start.length; i++) {
    let next = Math.max(prev + mid, start[i]);
    if (next > start[i] + d) return false;
    prev = next;
  }
  return true;
};
let start = [6, 0, 3],
  d = 2;
console.log(maxPossibleScore(start, d));
