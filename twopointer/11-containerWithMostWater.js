/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let start = 0;
  let end = height.length - 1;
  let maxArea = 0;
  while (start < end) {
    let minHeight = Math.min(height[start], height[end]);
    let width = end - start;
    let area = minHeight * width;
    maxArea = Math.max(area, maxArea);
    if (height[start] < height[end]) start++;
    else end--;
  }

  return maxArea;
};
let height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
console.log(maxArea(height));
