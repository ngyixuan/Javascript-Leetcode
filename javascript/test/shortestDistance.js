let [n, m] = [3, 5];
let shortestArr = [];
let resMap = new Map();
// for (let i = 0; i < n; i++) {
let line = [1, 4, 7, 9, 13];
for (let j = 0; j < m - 1; j++) {
  console.log(line[j]);

  let diff = line[j + 1] - line[j];
  if (!resMap.has(j) || resMap.get(j) > diff) {
    resMap.set(j, diff);
  }
}
// }
console.log(resMap);
let sum = 0;
for (let item of resMap) {
  sum += item[1];
}
console.log(sum);
