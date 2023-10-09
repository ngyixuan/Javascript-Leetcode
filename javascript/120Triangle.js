var minimumTotal = function (triangle) {
  row = 0;
  totalNumber = 0;
  while (row < triangle.length) {
    currentMinimum = Math.min(triangle[row]);
    console.log("currentMinimum", Math.min(triangle[row]));
    totalNumber += currentMinimum;
    row++;
  }
  return totalNumber;
};

triangle = [[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]];
console.log(minimumTotal(triangle));
