/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function (words, maxWidth) {
  let full = [];
  let line = [];
  let count = 0;
  for (let i = 0; i < words.length; i++) {
    let tempCount = words[i].length + (line.length > 0 ? 1 : 0);
    if (count + tempCount <= maxWidth) {
      line.push(words[i]);
      count += tempCount;
    } else {
      full.push([...line]);
      line = [words[i]];
      count = words[i].length;
    }
  }
  if (line.length > 0) {
    full.push([...line]);
  }
  let res = [];

  for (let i = 0; i < full.length; i++) {
    let line = full[i];
    let sentence = "";
    let totalWordLen = 0;
    totalWordLen = line.join("").length;

    let totalSpace = maxWidth - totalWordLen;
    let gapSpace = Math.floor(totalSpace / (line.length - 1));
    let extraSpace = totalSpace % (line.length - 1);
    if (line.length == 1 || i == full.length - 1) {
      sentence += line.join(" ") + " ".repeat(totalSpace - (line.length - 1));
    } else {
      for (let j = 0; j < line.length; j++) {
        sentence += line[j];
        if (j < line.length - 1) {
          sentence += " ".repeat(gapSpace);
          if (j < extraSpace) {
            sentence += " ";
          }
        }
      }
    }
    res.push(sentence);
  }
  return res;
};

let words = ["What", "must", "be", "acknowledgment", "shall", "be"];
let maxWidth = 16;
fullJustify(words, maxWidth);
