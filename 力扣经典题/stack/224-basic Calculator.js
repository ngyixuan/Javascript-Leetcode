/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  let number = 0;
  let operationStack = [];
  let sign = 1;
  let result = 0;

  for (let i = 0; i < s.length; i++) {
    let item = s[i];
    if (!isNaN(parseInt(item))) {
      number = number * 10 + parseInt(item);
    } else if (item === "+" || item === "-") {
      result += number * sign;
      sign = item === "-" ? -1 : 1;
      number = 0;
    } else if (item === "(") {
      operationStack.push(result);
      operationStack.push(sign);
      result = 0;
      sign = 1;
    } else if (item === ")") {
      result += number * sign;
      result *= operationStack.pop();
      result += operationStack.pop();
      number = 0;
    }
  }

  return result + number * sign;
};

let s = "(1+(4+5+2)-3)+(6+8)";
calculate(s);
