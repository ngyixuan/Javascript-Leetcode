const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
  // Write your code here
  let jsonString = await readline();
  let arr = JSON.parse(jsonString);
  let map = {};
  let tree = [];
  arr.forEach((item) => {
    if (!map[item.id]) {
      map[item.id] = {
        ...item,
      };
    }
  });

  arr.forEach((item) => {
    let node = map[item.id];
    if (item.pid === null || item.pid == undefined) {
      if (!tree.includes(node)) {
        tree.push(map[item.id]);
      }
    } else {
      if (map[item.pid]) {
        if (!map[item.pid].child) {
          map[item.pid].child = [];
        }
        if (!map[item.pid].child.includes(node)) {
          map[item.pid].child.push(node);
        }
      }
    }
  });
  console.log(JSON.stringify(tree));
})();
