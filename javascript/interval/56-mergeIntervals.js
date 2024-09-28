/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  let merge = [];
  for (let i = 0; i < intervals.length; i++) {
    if (merge.length == 0 || merge[merge.length - 1][1] < intervals[i][0]) {
      merge.push(intervals[i]);
    } else {
      merge[merge.length - 1][1] = Math.max(
        merge[merge.length - 1][1],
        intervals[i][1],
      );
    }
  }
  return merge;
};

let intervals = [
  [1, 4],
  [0, 2],
  [3, 5],
];
console.log(merge(intervals));
