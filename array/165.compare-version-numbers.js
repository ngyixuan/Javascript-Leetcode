/*
 * @lc app=leetcode id=165 lang=javascript
 *
 * [165] Compare Version Numbers
 */

// @lc code=start
/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function (version1, version2) {
  let versionArr1 = version1.split(".").map(Number);
  let versionArr2 = version2.split(".").map(Number);

  let maxLen = Math.max(versionArr1.length, versionArr2.length);
  for (let i = 0; i < maxLen; i++) {
    let num1 = i < versionArr1.length ? versionArr1[i] : 0;
    let num2 = i < versionArr2.length ? versionArr2[i] : 0;
    if (num1 < num2) return -1;
    if (num1 > num2) return 1;
  }

  return 0;
};
// @lc code=end
let version1 = "1.2";
let version2 = "1.10";
console.log(compareVersion(version1, version2));
