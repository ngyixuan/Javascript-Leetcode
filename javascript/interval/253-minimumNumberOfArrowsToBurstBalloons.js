/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function (points) {
  points.sort((a, b) => a[1] - b[1]);
  let arrows = 1;
  if (points.length == 1) return arrows;
  let maxOverllapse = points[0][1];
  for (let i = 1; i < points.length; i++) {
    if (maxOverllapse >= points[i][0]) continue;
    maxOverllapse = points[i][1];
    arrows++;
  }
  return arrows;
};

let points = [
  [3, 9],
  [7, 12],
  [3, 8],
  [6, 8],
  [9, 10],
  [2, 9],
  [0, 9],
  [3, 9],
  [0, 6],
  [2, 8],
];
console.log(findMinArrowShots(points));
