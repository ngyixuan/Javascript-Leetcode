/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function (s) {
  let stack = [];
  for (const i in s) {
    if (stack.length && stack[stack.length - 1] === s[i]) {
      stack.pop();
    } else {
      stack.push(s[i]);
    }
  }
  return stack.join("");
};

console.log(removeDuplicates("abbaca"));
