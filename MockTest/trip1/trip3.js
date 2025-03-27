const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
  // Write your code here
  let [n, k, l] = (await readline()).split(" ").map(Number);
  let abilityArr = (await readline()).split(" ").map(Number);
  function canAchieve(performance) {
    let change = 0;
    let i = 0;
    while (i < n) {
      if (abilityArr[i] < performance) {
        change++;
        i += l;
        if (change > k) return false;
      } else {
        i++;
      }
    }
    return true;
  }

  let left = Math.min(...abilityArr);
  let right = Math.max(...abilityArr);
  while (left < right) {
    let mid = Math.floor((right + left + 1) / 2);
    if (canAchieve(mid)) {
      left = mid;
    } else {
      right = mid - 1;
    }
  }
  console.log(left);
})();
