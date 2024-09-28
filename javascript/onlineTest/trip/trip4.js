const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
  // Write your code here
  let [n, k, p] = (await readline()).split(" ").map(Number);
  let employeePositions = (await readline()).split(" ").map(Number);
  let passPosition = (await readline()).split(" ").map(Number);
  let res = [];
  let index = 0;
  employeePositions.sort((a, b) => a - b);
  passPosition.sort((a, b) => a - b);
  const dp = Array(n + 1)
    .fill()
    .map(() => Array(k + 1).fill(Infinity));
  dp[0][0] = 0;
  for (let i = 1; i <= n; i++) {
    for (let j = 0; j <= k; j++) {
      dp[i][j] = Math.min(
        dp[i][j],
        dp[i - 1][j] + Math.abs(employeePositions[i - 1] - p),
      );

      if (j > 0) {
        dp[i][j] = Math.min(
          dp[i][j],
          dp[i - 1][j - 1] +
            Math.abs(employeePositions[i - 1] - passPosition[j - 1]) +
            Math.abs(passPosition[j - 1] - p),
        );
      }
    }
  }
  console.log(Math.min(...dp[n]));
  // for (let employeePosition of employeePositions) {
  //     let minTime = Math.abs(employeePosition - p);
  //     while (
  //         index < passPosition.length &&
  //         passPosition[index] <= employeePosition
  //     ) {
  //         minTime = Math.min(
  //             minTime,
  //             Math.abs(employeePosition - passPosition[index]) +
  //                 Math.abs(passPosition[index] - p)
  //         );
  //         index++;
  //     }

  //     if (index < passPosition.length) {
  //         minTime = Math.min(
  //             minTime,
  //             Math.abs(employeePosition - passPosition[index]) +
  //                 Math.abs(passPosition[index] - p)
  //         );
  //     }
  //     res.push(minTime)
  // }
  // console.log(res[res.length - 1]);
})();
