//排列

function permutation(str) {
  let result = [];
  let len = str.length;
  let path = [];
  let used = new Array(len).fill(false);
  function backtrack(path, used) {
    if (path.length >= len) {
      result.push([...path].join(""));
    }
    for (let i = 0; i < len; i++) {
      if (used[i]) continue;
      used[i] = true;
      path.push(str[i]);
      backtrack(path, used);
      path.pop(str[i]);
      used[i] = false;
    }
  }
  backtrack(path, used);
  console.log(result);
}

let numStr = "123";
// permutation(numStr);

//组合

function combination(str) {
  let result = [];
  let path = [];
  let len = str.length;
  function backtrack(path, startIndex) {
    if (startIndex >= len) return;

    for (let i = startIndex; i < len; i++) {
      path.push(str[i]);
      result.push([...path].join(""));
      backtrack(path, i + 1);
      path.pop(str[i]);
    }
  }
  backtrack(path, 0);
  console.log(result);
}

let alphabetStr = "abc";
combination(alphabetStr);
