/**
 * @param {number[][]} board
 * @return {number}
 */
var slidingPuzzle = function (board) {
  var queue = [];
  var visited = new Set();
  var step = 0;
  var target = "123450";
  var neighbor = [
    [1, 3],
    [0, 4, 2],
    [1, 5],
    [0, 4],
    [3, 1, 5],
    [4, 2],
  ];
  var start = "";
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      start += board[i][j];
    }
  }

  queue.push(start);
  while (queue.length != 0) {
    let queueCurrLength = queue.length;
    for (let i = 0; i < queueCurrLength; i++) {
      let curr = queue.shift();
      if (target === curr) return step;
      let idx = 0;
      while (curr[idx] != 0) {
        idx++;
      }

      for (const ele of neighbor[idx]) {
        let newboard = swap(curr, ele, idx);
        if (!visited.has(newboard)) {
          queue.push(newboard);
          visited.add(newboard);
        }
      }
    }
    step++;
  }
  return -1;
};

var swap = function (curr, i, j) {
  let newCurr = curr.split("");
  let temp = newCurr[i];
  newCurr[i] = newCurr[j];
  newCurr[j] = temp;
  return newCurr.join("");
};

let board = [
  [1, 2, 3],
  [4, 0, 5],
];
console.log(slidingPuzzle(board));
