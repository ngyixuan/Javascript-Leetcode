function test(n) {
  //   let result = [];

  //   for (let x = 0; x <= N; x++) {
  //     let xStr = x.toString();
  //     let sum = 0;
  //     for (let digit of xStr) {
  //       sum += parseInt(digit);
  //     }
  //     if (sum + x == N) {
  //       console.log(x);
  //       result.push(x);
  //     }
  //   }

  //   console.log(result);
  function getDigitsSum(num) {
    return num
      .toString()
      .split("")
      .reduce((sum, digit) => sum + parseInt(digit), 0);
  }
  let results = [];
  let d = 1;
  while (true) {
    let minX = Math.pow(10, d - 1);
    let maxX = Math.pow(10, d) - 1;

    let minSum = minX + getDigitsSum(minX);
    let maxSum = maxX + getDigitsSum(maxX);

    if (minSum > n) {
      break;
    }
    let start = Math.max(minX, n - 9 * d);
    let end = Math.min(maxX, n);
    for (let x = start; x <= end; x++) {
      if (x + getDigitsSum(x) === n) {
        results.push(x);
      }
    }
    d++;
  }
  console.log(results);
}

test(101);
