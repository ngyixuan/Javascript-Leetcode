/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var plusOne = function (target, j) {
  let ch = target.split("");
  if (ch[j] == "9") ch[j] = "0";
  else {
    ch[j] = String.fromCharCode(ch[j].charCodeAt(0) + 1);
  }

  return ch.join("");
};

var minusOne = function (target, j) {
  let ch = target.split("");
  if (ch[j] == "0") ch[j] = "9";
  else {
    ch[j] = String.fromCharCode(ch[j].charCodeAt(0) - 1);
  }

  return ch.join("");
};
var openLock = function (deadends, target) {
  var step = 0;
  var queue = [];
  var dead = new Set(deadends);
  var visited = new Set();
  var start = "0000";
  queue.push(start);
  visited.add(start);
  while (queue.length !== 0) {
    let currQueueLength = queue.length;
    for (let i = 0; i < currQueueLength; i++) {
      var cur = queue.shift();
      if (dead.has(cur)) continue;
      if (cur === target) return step;
      for (let j = 0; j < 4; j++) {
        let up = plusOne(cur, j);
        let down = minusOne(cur, j);
        if (!visited.has(up)) {
          queue.push(up);
          visited.add(up);
        }
        if (!visited.has(down)) {
          queue.push(down);
          visited.add(down);
        }
      }
    }
    step++;
  }

  return -1;
};

let deadends = ["0201", "0101", "0102", "1212", "2002"];
let target = "0202";
console.log(openLock(deadends, target));
