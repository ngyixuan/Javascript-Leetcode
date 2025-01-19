/*
 * @lc app=leetcode id=49 lang=javascript
 *
 * [49] Group Anagrams
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  let charCodeMap = new Map();

  for (let item of strs) {
    let encodeIdx = encode(item);

    if (charCodeMap.has(encodeIdx)) {
      charCodeMap.get(encodeIdx).push(item);
    } else {
      charCodeMap.set(encodeIdx, [item]);
    }
  }

  return [...charCodeMap.values()];
};

function encode(str) {
  let codeArr = new Array(26).fill(0);
  for (let char of str) {
    let index = char.charCodeAt() - "a".charCodeAt();
    codeArr[index]++;
  }
  return codeArr.toString(); //不用join为了防止不同的字符频率数组生成相同的字符串
}
// @lc code=end
let strs = ["bdddddddddd", "bbbbbbbbbbc"];
console.log(groupAnagrams(strs));
