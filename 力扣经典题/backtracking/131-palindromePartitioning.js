/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
  let result = [];
  let path = [];

  function isPalindrome(s, left, right) {
    for (let i = left, j = right; i < j; i++, j--) {
      if (s[i] !== s[j]) return false;
    }
    return true;
  }
  function backtracking(start) {
    if (start >= s.length) {
      result.push(Array.from(path));
      return;
    }
    for (let i = start; i < s.length; i++) {
      if (!isPalindrome(s, start, i)) continue;
      path.push(s.slice(start, i + 1));
      backtracking(i + 1);
      path.pop();
    }
  }
  backtracking(0, path, s);

  return result;
};
s = "aab";
console.log(partition(s));
