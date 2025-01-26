function test(n, k) {
  function calculateSmoothness(str) {
    let smoothness = 0;
    for (let i = 0; i < str.length - 1; i++) {
      smoothness += Math.abs(str.charCodeAt(i) - str.charCodeAt(i + 1));
    }
    return smoothness;
  }

  function findSmoothStr(n, k) {
    if (n === 1) {
      return k === 0 ? "a" : "";
    }
    const maxPossibleSmoothness = 25 * (n - 1);
    if (k > maxPossibleSmoothness) {
      return "";
    }
    function backtrack(current, remaining, targetSum) {
      if (remaining === 0) {
        return calculateSmoothness(current) === targetSum ? current : "";
      }
      const lastChar = current.length
        ? current.charCodeAt(current.length - 1)
        : "a".charCodeAt(0);
      for (let i = 0; i < 26; i++) {
        const nextChar = String.fromCharCode("a".charCodeAt(0) + i);
        const newStr = current + nextChar;
        const currentSmoothness = current.length
          ? Math.abs(lastChar - ("a".charCodeAt(0) + i))
          : 0;
        const remainingSmoothness =
          targetSum - (calculateSmoothness(current) + currentSmoothness);
        const maxPossibleSmoothness = 25 * (remaining - 1);
        if (remainingSmoothness <= maxPossibleSmoothness) {
          let result = backtrack(newStr, remaining - 1, targetSum);
          if (result) return result;
        }
      }
      return "";
    }
    const result = backtrack("", n, k);
    return result || "";
  }

  const result = findSmoothStr(n, k);
  console.log(result || -1);
}

let n = 3;
let k = 3;
test(n, k);
