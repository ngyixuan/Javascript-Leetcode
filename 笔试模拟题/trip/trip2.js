function solve(n, m, k, arr) {
  for (let i = 0; i < n; i++) {
    num.push(line[i]);
  }
  num.sort((a, b) => a - b);
  let left = 0;
  while (left + m - 1 < num.length) {
    if (num[left + m - 1] - num[left] <= k) {
      num.splice(left, 1);
    } else {
      left++;
    }
  }
  console.log(num.length);
}

let [n, m, k] = [4, 3, 3];
let arr = [1, 2, 3, 6];
