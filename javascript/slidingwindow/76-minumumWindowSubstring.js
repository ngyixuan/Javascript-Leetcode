/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  let len = s.length + 1;
  let left = 0;
  let valid = 0;
  let needMap = new Map();
  let windowMap = new Map();
  for (let item of t) {
    needMap.set(item, (needMap.get(item) || 0) + 1);
  }
  for (let right = 0; right < s.length; right++) {
    if (needMap.has(s[right])) {
      windowMap.set(s[right], (windowMap.get(s[right]) || 0) + 1);
      if (windowMap.get(s[right]) === needMap.get(s[right])) valid++;
    }

    while (valid === needMap.size) {
      if (right - left < len) {
        start = left;
        len = right - left;
      }

      if (needMap.has(s[left])) {
        if (needMap.get(s[left]) === windowMap.get(s[left])) {
          valid--;
        }
        windowMap.set(s[left], windowMap.get(s[left]) - 1);
      }
      left++;
    }
  }

  return len === s.length + 1 ? "" : s.substring(start, start + len + 1);
};

let s = "a",
  t = "aa";
console.log(minWindow(s, t));
