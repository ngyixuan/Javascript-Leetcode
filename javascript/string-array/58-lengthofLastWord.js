var lengthOfLastWord = function (s) {
  let wordLst = s.split(/(\s+)/).filter((x) => x.trim().length > 0);
  return wordLst[wordLst.length - 1].length;
};
s = "Hello World";
// s = "   fly me   to   the moon  ";
lengthOfLastWord(s);
