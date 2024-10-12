var generateParenthesis = function (n) {
  let track = "";
  let res = [];

  var backtracking = function (left, right) {
    if (right < left) return;
    if (right < 0 || left < 0) return;
    if (left === 0 && right === 0) {
      res.push(track);
      return;
    }
    track += "(";
    backtracking(left - 1, right);
    track = track.slice(0, -1);

    track += ")";
    backtracking(left, right - 1);
    track = track.slice(0, -1);
  };

  backtracking(n, n);
  return res;
};

console.log(generateParenthesis(1));
