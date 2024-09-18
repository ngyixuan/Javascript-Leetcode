var longestCommonPrefix = function (strs) {
  let first = 0;
  let second = 1;

  if (strs.length == 1) return strs[0];
  let prefix = strs[0].slice(first, second);
  let foundMismatch = false;
  while (second <= strs[0].length) {
    for (let i = 1; i < strs.length; i++) {
      if (strs[i].slice(first, second) === prefix) {
        continue;
      } else {
        foundMismatch = true;
      }
    }
    if (foundMismatch) break;

    second++;
    prefix = strs[0].slice(first, second);
  }

  return prefix.slice(first, second - 1);
};

strs = ["flower", "flowep", "flower"];
console.log(longestCommonPrefix(strs));
