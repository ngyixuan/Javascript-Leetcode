const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
  // Write your code here
  let readline1 = (await readline()).split(" ").map(Number);
  let n = readline1[0];
  let k = readline1[1];
  let arr = (await readline()).split(" ").map(Number);

  let left = 0;
  let sum = 0;
  let minLength = n + 1;

  for (let right = 0; right < n; right++) {
    sum += arr[right];
    while (sum >= k) {
      minLength = Math.min(minLength, right - left + 1);
      sum -= arr[left];
      left++;
    }
  }

  let result = minLength <= n ? n - minLength : -1;
  console.log(result);
})();
