/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  stack = [];
  top = -1;

  let bracketMap = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  for (const i of s) {
    if (stack.length > 0) {
      if (i == bracketMap[stack[top]]) {
        stack.pop();
        top -= 1;
        continue;
      }
    }
    stack.push(i);
    top += 1;
  }
  if (stack.length > 0) {
    return false;
  }
  return true;
};
s = "()";
console.log(isValid(s));
