/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let stack = [];
  let map = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  for (let item of s) {
    if (stack.length == 0) {
      stack.push(item);
    } else {
      let popItem = stack.pop();
      if (map[popItem] != item) {
        stack.push(popItem);
        stack.push(item);
      }
    }
  }
  if (stack.length == 0) return true;
  return false;
};
let s = "(]";
console.log(isValid(s));
