/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  if (s.length !== t.length) return false;
  let sMap = new Map();
  let tMap = new Map();
  for (let i = 0; i < s.length; i++) {
    if (!sMap.has(s[i]) && !tMap.has(t[i])) {
      sMap.set(s[i], t[i]);
      tMap.set(t[i], s[i]);
    } else {
      if (sMap.get(s[i]) !== t[i] || tMap.get(t[i]) !== s[i]) return false;
    }
  }
  return true;
};
let s = "edg",
  t = "agd";
console.log(isIsomorphic(s, t));
