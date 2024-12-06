function findMostChars(str) {
  let map = {};
  for (let item of str) {
    if (!map[item]) {
      map[item] = 0;
    }
    map[item]++;

    // maxNum
  }
  let maxNum = 0;
  let mostChars = [];
  for (let [key, value] of Object.entries(map)) {
    if (value === maxNum) {
      mostChars.push(key);
    } else if (value > maxNum) {
      mostChars = [key];
      maxNum = value;
    }
  }
  return mostChars;
}

console.log(findMostChars("AABBB"));
