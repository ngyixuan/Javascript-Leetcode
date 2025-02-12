/*
 * @lc app=leetcode id=71 lang=javascript
 *
 * [71] Simplify Path
 */

// @lc code=start
/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  let filterPath = path.split("/");
  let pathStack = [];
  for (let symbol of filterPath) {
    if (symbol == "." || symbol == "") continue;
    if (symbol === "..") {
      if (pathStack.length > 0) pathStack.pop();
      continue;
    }
    pathStack.push(symbol);
  }

  let res = "/" + pathStack.join("/");
  return res;
};
// @lc code=end
// let path = "/home/user/Documents/../Pictures";
let path = "/home//foo/";
// let path = "/.../a/../b/c/../d/./";
console.log(simplifyPath(path));
