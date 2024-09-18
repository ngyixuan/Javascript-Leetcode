// let t = parseInt(readline());
// let inputArr = [];
// for (let i = 0; i < t; i++) {
//   let line = readline().split(" ").map(Number);
//   inputArr.push([line[0], line[1]]);
// }
let inputArr = [
  [1, 50],
  [2, 2],
  [3, 1],
];
function calMaxBeauty(distribution) {
  let beauty = 0;
  for (let i = 0; i < distribution.length; i++) {
    for (let j = i + 1; j < distribution.length; j++) {
      beauty += Math.abs(distribution[i] - distribution[j]);
    }
  }
  return beauty;
}
function calculateMaxBeauty(n, m) {
  let distributions = [];

  function distribute(curr, remaining, index) {
    if (index == n - 1) {
      console.log("curr", curr, "index", index);
      curr.push(remaining);
      distributions.push([...curr]);

      curr.pop();
      return distributions;
    }

    for (let i = 0; i <= remaining; i++) {
      curr.push(i);

      distribute(curr, remaining - i, index + 1);
      curr.pop();
    }
  }
  distribute([], m, 0);
  let maxBeauty = 0;
  for (let item of distributions) {
    maxBeauty = Math.max(maxBeauty, calMaxBeauty(item));
  }
  return maxBeauty;
}
// let result = [];
// for (let i = 0; i < inputArr.length; i++) {
//   result.push(calculateMaxBeauty(inputArr[i][0], inputArr[i][1]));
// }
calculateMaxBeauty(2, 2);
// console.log(result.join(" "));
