var lengthOfLastWord = function (s) {
  let regrex = /\s+/g;
  s = s.trim().split(regrex);
  return s[s.length - 1].length;
};
let s = "luffy is still joyboy";
console.log(lengthOfLastWord(s));
