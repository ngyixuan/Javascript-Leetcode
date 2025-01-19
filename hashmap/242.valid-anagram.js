/*
 * @lc app=leetcode id=242 lang=javascript
 *
 * [242] Valid Anagram
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  let smap = new Map();
  let tmap = new Map();
  if (s.length !== t.length) return false;
  for (let i = 0; i < s.length; i++) {
    smap.set(s[i], (smap.get(s[i]) || 0) + 1);
    tmap.set(t[i], (tmap.get(t[i]) || 0) + 1);
  }

  for (let [key, value] of smap.entries()) {
    if (tmap.get(key) !== value) return false;
  }

  return true;
};
// @lc code=end
let s = "anagram",
  t = "nagaram";

console.log(isAnagram(s, t));
