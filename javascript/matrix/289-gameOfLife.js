/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function (board) {
  let rowLength = board.length;
  let colLength = board[0].length;

  for (let row = 0; row < rowLength; row++) {
    for (let col = 0; col < colLength; col++) {
      let liveNeighbours = 0;
      let directions = [
        [-1, -1],
        [-1, 0],
        [-1, 1],
        [0, -1],
        [0, 1],
        [1, -1],
        [1, 0],
        [1, 1],
      ];
      for (let direction of directions) {
        let [x, y] = direction;
        let newRow = row + x;
        let newCol = col + y;

        if (
          (newRow >= 0 &&
            newCol >= 0 &&
            newRow < rowLength &&
            newCol < colLength &&
            board[newRow][newCol] === 1) ||
          (newRow >= 0 &&
            newCol >= 0 &&
            newRow < rowLength &&
            newCol < colLength &&
            board[newRow][newCol] === 2)
        ) {
          liveNeighbours++;
        }
      }
      if (board[row][col] == 1 && (liveNeighbours < 2 || liveNeighbours > 3))
        board[row][col] = 2;
      else if (board[row][col] == 0 && liveNeighbours === 3)
        board[row][col] = 3;
    }
  }

  for (let row = 0; row < rowLength; row++) {
    for (let col = 0; col < colLength; col++) {
      if (board[row][col] === 2) board[row][col] = 0;
      else if (board[row][col] === 3) board[row][col] = 1;
    }
  }

  return board;
};

let board = [
  [1, 1],
  [1, 0],
];
console.log(gameOfLife(board));
