/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  let startS = 0;
  let startT = 0;
  if (s.length > t.length) return false;
  while (startS < s.length && startT < t.length) {
    if (s[startS] == t[startT]) startS++;
    startT++;
  }

  if (startS === s.length) return true;
  return false;
};
let s = "axc",
  t = "ahbgdc";
console.log(isSubsequence(s, t));
