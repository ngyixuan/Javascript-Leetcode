function lcp(strs) {
  prefix = "";
  for (let i = 0; i < strs.length; i++) {
    if (strs[i] == "") {
      prefix = "";
    }
    for (let j = 0; j < strs[i].length; j++) {
      if (!prefix && i == 0) {
        prefix = strs[i];
      } else {
        // console.log(i, prefix);
        if (prefix.length > strs[i].length) {
          prefix = prefix.slice(0, strs[i].length);
        }
        if (j < prefix.length && strs[i][j] != prefix[j]) {
          prefix = prefix.slice(0, j);

          break;
        }
      }
    }
  }

  return prefix;
}
// strs = ["flower", "flow", "flight"];
// strs = ["dog", "racecar", "car"];
// strs = ["ab", "a"];
strs = ["abab", "aba", ""];
lcp(strs);
