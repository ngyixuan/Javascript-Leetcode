/**
 * @param {string[]} tokens
 * @return {number}
 */

var evalRPN = function (tokens) {
  const stack = [];
  for (const token of tokens) {
    if (isNaN(Number(token))) {
      const val2 = stack.pop();
      const val1 = stack.pop();

      console.log(val1, val2);
      switch (token) {
        case "+":
          stack.push(val1 + val2);
          break;

        case "-":
          stack.push(val1 - val2);
          break;

        case "*":
          stack.push(val1 * val2);
          break;

        case "/":
          stack.push((val1 / val2) | 0);
          break;
      }
    } else {
      stack.push(Number(token));
    }
  }
  return stack.pop();
};

tokens = ["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"];
console.log(evalRPN(tokens));
