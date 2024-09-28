function solve(n, k, prices) {
  let group = 1;
  let currMin = prices[0];
  let currMax = prices[0];
  for (let i = 1; i < n; i++) {
    let currVal = prices[i];
    if (Math.max(currVal - currMin, currMax - currVal) > k) {
      currMin = currVal;
      currMax = currVal;
      group++;
    } else {
      currMin = Math.min(currMin, currVal);
      currMax = Math.max(currMax, currVal);
    }
  }
  console.log(group);
}
let n = 4;
let k = 1;
let prices = [1, 3, 1, 4];
solve(n, k, prices);

//   let group = 0;
//   if (n < 2) {
//     console.log(1);
//     return;
//   }

//   let currMin = prices[0];
//   let currMax = prices[0];
//   group++;
//   for (let i = 1; i < n; i++) {
//     let currVal = prices[i];
//     if (Math.abs(currVal - currMin) > k || Math.abs(currVal - currMax) > k) {
//       currMin = currVal;
//       currMax = currVal;
//       group++;
//     } else {
//       currMin = Math.min(currMin, currVal);
//       currMax = Math.max(currMax, currVal);
//     }
//   }
//   console.log(group);
