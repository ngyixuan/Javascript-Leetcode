var findSubstring = function (s, words) {
  let res = [];
  let wordsLength = words.length * words[0].length;
  let wordLength = words[0].length;
  let wordMap = new Map();
  //先把words的字都放在Map
  for (let word of words) {
    wordMap.set(word, (wordMap.get(word) || 0) + 1);
  }
  //外层遍历只遍历到 s.length - wordsLength + 1
  for (let i = 0; i < s.length - wordsLength + 1; i++) {
    let tempMap = new Map();
    //把长度等于words所有字的s字符串切分出来一个字串
    let sub = s.slice(i, i + wordsLength);
    //遍历这个字串是不是符合所有wordMap里的字，如果符合就在tempMap先记录这个字出现的次数
    for (let j = 0; j < sub.length; j += wordLength) {
      let subWord = sub.slice(j, j + wordLength);
      if (!wordMap.has(subWord)) {
        continue;
      } else {
        tempMap.set(subWord, (tempMap.get(subWord) || 0) + 1);
      }
    }
    //如果这个切分的子串的元素跟wordMap 不一样，就放弃这个字串，继续外层遍历， 如果一样就把外层遍历的i推入res数组
    if (checkWord(wordMap, tempMap)) res.push(i);
  }

  return res;
};
function checkWord(wordMap, tempMap) {
  for (let item of wordMap) {
    if (wordMap.get(item[0]) !== tempMap.get(item[0])) {
      return false;
    }
  }
  return true;
}
let s = "wordgoodgoodgoodbestword",
  words = ["word", "good", "best", "word"];
console.log(findSubstring(s, words));
