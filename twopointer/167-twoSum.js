/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  let start = 0;
  let end = numbers.length - 1;

  while (start < end) {
    let num1 = numbers[start];
    let num2 = numbers[end];

    if (num1 + num2 < target) {
      start++;
    } else if (num1 + num2 > target) {
      end--;
    } else {
      return [start + 1, end + 1];
    }
  }
};

let numbers = [-1, 0],
  target = -1;

console.log(twoSum(numbers, target));
