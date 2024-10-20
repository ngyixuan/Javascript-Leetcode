function combinationSum(array, T) {
  // write code here
  let path = [];
  let res = [];
  array.sort((a, b) => a - b);

  function backtracking(start, sum, path) {
    if (sum > T) {
      return;
    }
    if (sum === T) {
      res.push([...path]);
      return;
    }

    for (let i = start; i < array.length; i++) {
      //   if (i > start && array[i] === array[i - 1]) {
      //     continue;
      //   }
      sum += array[i];
      path.push(array[i]);
      backtracking(i, sum, path);
      sum -= array[i];
      path.pop();
    }
  }
  backtracking(0, 0, path);

  return res;
}

let array = [2, 3, 6];
let T = 8;
combinationSum(array, T);
