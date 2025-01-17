var strStr = function (haystack, needle) {
  let start = -1;
  for (let i = 0; i < haystack.length - needle.length + 1; i++) {
    let temp = haystack.slice(i, needle.length + i);
    if (temp == needle) return i;
  }
  return start;
};
let haystack = "mississipi";
let needle = "issi";
console.log(strStr(haystack, needle));
