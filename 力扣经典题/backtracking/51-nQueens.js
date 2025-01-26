/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
  var res = [];
  var used = new Array(n).fill(".").map(() => new Array(n).fill(".").join(""));

  var isValid = function (row, col, used) {
    let n = used.length;
    //Check if has Q in same col
    for (let i = 0; i <= row; i++) {
      if (used[i][col] === "Q") return false;
    }

    //Check if has Q in right top
    for (let i = 1; i <= row; i++) {
      if (row - i >= 0 && col + i < n && used[row - i][col + i] === "Q")
        return false;
    }

    //Check if has Q in left top
    for (let i = 1; i <= row; i++) {
      if (row - i >= 0 && col - i >= 0 && used[row - i][col - i] === "Q")
        return false;
    }

    return true;
  };

  var backtrack = function (used, row) {
    if (row === n) {
      res.push([...used]);
    }

    for (let col = 0; col < n; col++) {
      if (!isValid(row, col, used)) {
        continue;
      }
      let rowChars = used[row].split("");
      rowChars[col] = "Q";
      used[row] = rowChars.join("");
      backtrack(used, row + 1);
      rowChars[col] = ".";
      used[row] = rowChars.join("");
    }
  };
  backtrack(used, 0);
  return res;
};

console.log(solveNQueens(1));
