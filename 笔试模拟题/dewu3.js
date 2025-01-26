function test(marks, n) {
  marks.sort((a, b) => a - b);
  const dp = new Array(n + 1).fill(Infinity);
  dp[0] = 0;
  for (let i = 1; i <= n; i++) {
    dp[i] = Math.min(dp[i], dp[i - 1] + 1);
    if (i >= 2 && marks[i - 1] - marks[i - 2] <= 20) {
      dp[i] = Math.min(dp[i], dp[i - 2]);
    }
    if (i >= 3 && marks[i - 1] - marks[i - 3] <= 10) {
      dp[i] = Math.min(dp[i], dp[i - 3]);
    }
  }

  console.log(
    dp.reduce((prev, curr) => {
      return prev + curr;
    })
  );
  //   marks.sort((a, b) => b - a);
  //   let groups = [];
  //   let i = 0;
  //   if (marks.length == 1) {
  //     console.log(marks.length);
  //     return;
  //   }
  //   while (i + 2 < marks.length) {
  //     if (marks[i] - marks[i + 2] <= 10) {
  //       groups.push(marks.slice(i, i + 3));
  //       i += 3;
  //     } else {
  //       break;
  //     }
  //   }

  //   while (i + 1 < marks.length) {
  //     if (marks[i] - marks[i + 1] <= 20) {
  //       groups.push(marks.slice(i, i + 2));
  //       i += 2;
  //     } else {
  //       break;
  //     }
  //   }

  //   while (i < marks.length) {
  //     groups.push([marks[i]]);
  //     i++;
  //   }
  //   console.log(groups.length);
}
let n = 6;
let marks = [100, 110, 120, 140, 160, 180];
// let marks = [100, 100, 100];
test(marks, n);
