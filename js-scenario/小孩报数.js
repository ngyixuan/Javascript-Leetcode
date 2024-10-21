function removeChild(n, count) {
  let player = [];
  for (let i = 0; i < n; i++) {
    player[i] = i + 1;
  }
  let totalRemove = 0;
  let counter = 0;
  let currIndex = 0;
  while (totalRemove < n - 1) {
    if (player[currIndex] !== 0) {
      counter++;
    }
    if (counter == 3) {
      player[currIndex] = 0;
      totalRemove++;
      counter = 0;
    }
    currIndex++;
    if (currIndex === n) {
      currIndex = 0;
    }
  }
  console.log(player);
}
removeChild(30, 3);
