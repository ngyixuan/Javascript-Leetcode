function test(s, n, l, r) {
  let prefixSum = [0];
  for (let i = 0; i < n; i++) {
    prefixSum.push(prefixSum[i] + (s[i] === "1" ? 1 : 0));
  }
  console.log(prefixSum);
  let left = l - 1;
  let right = r - 1;
  let onesCount = prefixSum[right + 1] - prefixSum[left];
  let maxColored;
  if (onesCount == 0) {
    maxColored = right - left - 1;
  } else {
    maxColored = Math.min(onesCount + 1, right - left + 1);
  }
  console.log(maxColored - 1);
}

let l = 1,
  r = 8;
let n = 8;
let s = "01011111";
test(s, n, l, r);
