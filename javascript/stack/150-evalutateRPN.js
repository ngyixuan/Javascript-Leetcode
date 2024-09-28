/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  let arithmetic = new Set(["+", "-", "*", "/"]);
  let waitingStack = [];
  for (let item of tokens) {
    if (!arithmetic.has(item)) {
      waitingStack.push(parseInt(item));
    } else {
      if (waitingStack.length < 2) continue;
      let num1 = waitingStack.pop();
      let num2 = waitingStack.pop();

      let totalNum = 0;
      switch (item) {
        case "+":
          totalNum = num1 + num2;
          break;

        case "-":
          totalNum = num2 - num1;
          break;

        case "*":
          totalNum = num1 * num2;
          break;

        case "/":
          totalNum = Math.trunc(num2 / num1);
          break;
      }
      waitingStack.push(totalNum);
    }
  }
  return waitingStack[waitingStack.length - 1];
};

let tokens = [
  "10",
  "6",
  "9",
  "3",
  "+",
  "-11",
  "*",
  "/",
  "*",
  "17",
  "+",
  "5",
  "+",
];
console.log(evalRPN(tokens));
