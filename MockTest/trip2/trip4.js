// function findMatchIntervals(intervals) {
//   intervals.sort((a, b) => a[0] - b[0]);
//   let count = 0;
//   for (let i = 0; i < intervals.length; i++) {
//     for (let j = i + 1; j < intervals.length; j++) {
//       if (
//         intervals[i][1] >= intervals[j][0] &&
//         intervals[i][0] <= intervals[j][1]
//       ) {
//         count++;
//       } else {
//         break;
//       }
//     }
//   }
//   return count;
// }

function findOverlap(intervals) {
  if (intervals.length < 2) return 0;
  const events = [];
  for (const [start, end] of intervals) {
    events.push([start, 1]);
    events.push([end, -1]);
  }

  events.sort((a, b) => a[0] - b[0] || b[1] - a[1]);
  let maxActive = 0;
  let activeCount = 0;

  for (const [, change] of events) {
    activeCount += change;
    maxActive = Math.max(maxActive, activeCount);
  }
  return maxActive + 1;
}
let intervals = [
  [1, 3],
  [2, 4],
  [5, 7],
  [6, 8],
  [1, 2],
];
// console.log(findMatchIntervals(intervals));
console.log(findOverlap(intervals));
