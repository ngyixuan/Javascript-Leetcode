function test(word) {
  let n = word.length;
  for (let i = 0; i < n; i++) {
    let letter = word[i];
    let temp = word.slice(0, i) + word.slice(i + 1, n);

    word = temp + letter;
  }
  console.log(word);
}

let word = "paectc";
test(word);
