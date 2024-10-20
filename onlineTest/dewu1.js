function test(fruitsArr, l) {
  fruitsArr.sort((a, b) => a - b);
  let currHeight = l;
  for (let i = 0; i < fruitsArr.length; i++) {
    if (currHeight >= fruitsArr[i]) {
      currHeight++;
    } else {
      break;
    }
  }
  console.log(currHeight);
}
let arr = [10, 11, 13];
let l = 10;
test(arr, l);
