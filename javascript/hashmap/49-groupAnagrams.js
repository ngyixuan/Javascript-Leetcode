var groupAnagrams = function (strs) {
  let group = new Map();
  for (let item of strs) {
    let encodeSum = encode(item);

    if (group.has(encodeSum)) {
      group.get(encodeSum).push(item);
    } else {
      group.set(encodeSum, [item]);
    }
  }
  let res = [];

  for (let i of group.values()) {
    res.push(i);
  }
  return res;
};

function encode(word) {
  let arr = new Array(26).fill(0);
  for (let i of word) {
    let acsii = i.charCodeAt() - "a".charCodeAt();
    arr[acsii]++;
  }

  return arr.join().toString();
}
let strs = ["bdddddddddd", "bbbbbbbbbbc"];
console.log(groupAnagrams(strs));
