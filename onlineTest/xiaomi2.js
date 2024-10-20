function test(matrix) {
  function isValid(row, col, num) {
    const directions = [
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1],
    ];
    for (let [r, c] of directions) {
      let newRow = row + r;
      let newCol = col + c;
      if (newRow >= 0 && newRow < 3 && newCol >= 0 && newCol < 3) {
        if (
          matrix[newRow][newCol] !== 0 &&
          Math.abs(matrix[newRow][newCol] - num) === 1 // 修正这里
        ) {
          return false;
        }
      }
    }
    return true;
  }

  let count = 0;

  function dfs(r, c) {
    if (r === 3) {
      count++;
      return;
    }
    if (c === 3) {
      dfs(r + 1, 0);
      return;
    }

    if (matrix[r][c] !== 0) {
      dfs(r, c + 1);
      return;
    }

    for (let num = 1; num <= 9; num++) {
      if (isValid(r, c, num)) {
        matrix[r][c] = num;
        dfs(r, c + 1);
        matrix[r][c] = 0;
      }
    }
  }

  dfs(0, 0);
  console.log(count);
}

let matrix = [
  [1, 8, 5],
  [4, 6, 3],
  [0, 2, 0],
];
test(matrix);
