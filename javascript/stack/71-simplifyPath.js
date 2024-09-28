/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  path = path.split("/").filter((i) => i !== "");

  let stack = [];
  for (let item of path) {
    if (item == "." || item == "") continue;
    if (item == "..") {
      if (stack.length > 0) stack.pop();
      continue;
    }
    stack.push(item);
  }

  let res = stack.length == 0 ? "/" : "/" + stack.join("/");

  return res;
};

let path = "/home/";
console.log(simplifyPath(path));
