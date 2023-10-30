/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function (words) {
  let size = 26;
  let firstHash = new Array(size).fill(0);
  let firstWord = words[0];
  let a = "a".charCodeAt();

  for (let i = 0; i < firstWord.length; i++) {
    let charCode = firstWord[i].charCodeAt() - a;
    firstHash[charCode] += 1;
  }

  let newHash = new Array(size).fill(0);
  for (let i = 1; i < words.length; i++) {
    for (let j = 0; j < words[i].length; j++) {
      let charCode = words[i][j].charCodeAt();
      newHash[charCode - a] += 1;
    }
    for (let j = 0; j < size; j++) {
      firstHash[j] = Math.min(firstHash[j], newHash[j]);
    }

    newHash.fill(0);
  }
  result = [];
  firstHash.forEach((element, index) => {
    while (element > 0) {
      result.push(String.fromCharCode(index + a));
      element--;
    }
  });

  return result;
};
words = ["bella", "label", "roller"];
commonChars(words);
