var strStr = function (haystack, needle) {
  start = -1;
  for (let i = 0; i < haystack.length - needle.length + 1; i++) {
    findMatch = haystack.slice(i, needle.length + i);
    if (findMatch == needle) {
      start = i;
      break;
    }
  }
  return start;
};

haystack = "sadbutsad";
needle = "sad";
console.log(strStr(haystack, needle));
