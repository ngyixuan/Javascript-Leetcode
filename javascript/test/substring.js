const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
  // Write your code here
  let n = 0;
  let m = 0;
  let inputArr = [];
  let resultIndex = [];
  let line = (await readline()).split(" ").map(Number);
  n = line[0];
  m = line[1];
  let wordMap = new Map();
  for (let i = 0; i < n; i++) {
    line = (await readline()).split("");
    line.sort((a, b) => a.charCodeAt() - b.charCodeAt());
    let sortedWord = line.join("");
    inputArr.push({ word: sortedWord, visited: false, index: i });

    if (!wordMap.has(sortedWord)) {
      wordMap.set(sortedWord, 1);
    } else {
      wordMap.set(sortedWord, wordMap.get(sortedWord) + 1);
    }
  }
  let oddCount = 0;
  for (let word of wordMap) {
    if (word[1] % 2 !== 0) oddCount++;
  }
  if (oddCount > 1) {
    console.log(-1);
    return;
  } else {
    for (let i = 0; i < n; i++) {
      let count = wordMap.get(inputArr[i].word);
      if (count % 2 == 0) {
        resultIndex.push(i + 1);
        inputArr[i].visited = true;
      }
    }
  }
  let mid = Math.floor(resultIndex.length / 2);
  let result = [];
  let remainWord = inputArr.filter((item) => item.visited === false);
  result.push(...resultIndex.slice(0, mid));
  result.push(remainWord[0].index + 1);
  result.push(...resultIndex.slice(mid, resultIndex.length));

  console.log(result.join(" "));
})();
