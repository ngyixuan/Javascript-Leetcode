/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  intervals.sort((a, b) => a[0] - b[0]);
  let merge = [];
  for (let i = 0; i < intervals.length; i++) {
    if (intervals[i][1] < newInterval[0]) {
      merge.push(intervals[i]);
    } else if (intervals[i][0] > newInterval[1]) {
      merge.push(newInterval);
      return merge.concat(intervals.slice(i));
    } else {
      newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
      newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
    }
  }
  merge.push(newInterval);

  return merge;
};

let intervals = [
    [1, 3],
    [6, 9],
  ],
  newInterval = [5, 7];
console.log(insert(intervals, newInterval));
