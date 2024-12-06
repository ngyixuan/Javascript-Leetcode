function findMostWord(article) {
  if (!article) return;
  article = article.trim().toLowerCase();
  let wordList = article.match(/[a-z]+/g);
  let visited = [];
  let maxNum = 0;
  let maxWord = "";
  article = " " + wordList.join(" ") + " ";
  wordList.forEach(function (item) {
    if (visited.indexOf(item) == -1) {
      visited.push(item);
      let word = new RegExp(" " + item + " ", "g");
      let num = article.match(word).length;
      if (num > maxNum) {
        maxNum = num;
        maxWord = item;
      }
    }
  });

  console.log(`Max word is ${maxWord}, appears ${maxNum} times`);
}

let test = "How do you know that we cannot do this kind of thing";
findMostWord(test);
