function minimizeUnpleasantness(n, categories, movable) {
  let categoryArr = categories.split("").map(Number);
  let movableArr = movable.split("").map(Number);

  let movableItem = [];

  for (let i = 0; i < movableArr.length; i++) {
    if (movableArr[i] !== 0) movableItem.push(categoryArr[i]);
  }
  movableItem.sort((a, b) => a - b);

  var calculateUgliness = function (path) {
    let sum = 0;
    for (let i = 0; i < n - 1; i++) {
      if (path[i] !== path[i + 1]) {
        sum += 1;
      }
    }

    return sum;
  };

  var backtrack = function (path, start, movableItem) {
    if (start == n) {
      return calculateUgliness(path);
    }
    if (movableArr[start] == 0) {
      path.push(categoryArr[start]);
    } else {
      path.push(movableItem.shift());
    }
    return backtrack(path, start + 1, movableItem);
  };

  return backtrack([], 0, movableItem);
}

// 示例使用
const n = 5;
const categories = "11212";
const movable = "01101";
console.log(minimizeUnpleasantness(n, categories, movable));
