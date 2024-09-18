/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let left = 0;
  let right = height.length - 1;
  let leftMax = 0;
  let rightMax = 0;
  let sum = 0;
  while (left < right) {
    if (height[left] < height[right]) {
      //左边的局部高度更小
      if (height[left] >= leftMax) {
        leftMax = height[left]; //如果left指针变高了
      } else {
        sum += leftMax - height[left];
      }
      left++;
    } else {
      if (height[right] >= rightMax) {
        rightMax = height[right];
      } else {
        sum += rightMax - height[right];
      }
      right--;
    }
  }

  return sum;
};

let height = [4, 2, 0, 3, 2, 5];
console.log(trap(height));
