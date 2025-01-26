var output = function (number, sum) {
  if (number <= 0) return sum;
  sum += number % 10;
  return output(Math.floor(number / 10), sum);
};
var art = function (word) {
  for (const item of word) {
    let artString = "";
    let nTimes = output(item.charCodeAt(), 0);
    while (nTimes != 0) {
      artString += item;
      nTimes--;
    }
    console.log(artString);
  }
};

let word = "n";
art(word);
