function test(keyboard, target, N, M) {
  function findCharPosition(char) {
    for (let i = 0; i < keyboard.length; i++) {
      for (let j = 0; j < keyboard[i].length; j++) {
        if (keyboard[i][j] === char) {
          return [i, j];
        }
      }
    }
  }
  function calculateDistance(pos1, pos2) {
    return Math.abs(pos1[0] - pos2[0]) + Math.abs(pos1[1] - pos2[1]);
  }
  let totalKeyStrokes = 0;
  let currPosition = [0, 0];
  for (let char of target) {
    let charPosition = findCharPosition(char);
    console.log(charPosition);
    totalKeyStrokes += calculateDistance(currPosition, charPosition) + 1;
    currPosition = charPosition;
  }

  console.log(totalKeyStrokes);
}

let keyboard = [
  ["_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_"],
  ["_", "_", "_", "_", "A", "_", "_", "_", "_", "_", "_"],
  ["_", "_", "_", "_", "_", "_", "_", "_", "M", "_", "_"],
  ["_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_"],
  ["_", "C", "_", "_", "_", "_", "_", "_", "_", "_", "_"],
];
let target = "ACM";
let N = 5,
  M = 11;
test(keyboard, target, N, M);
