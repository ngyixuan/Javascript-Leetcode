var isAnagram = function (s, t) {
  let sMap = new Map();
  let tMap = new Map();
  if (s.length !== t.length) return false;
  for (let i = 0; i < s.length; i++) {
    sMap.set(s[i], (sMap.get(s[i]) || 0) + 1);
    tMap.set(t[i], (tMap.get(t[i]) || 0) + 1);
  }

  for (let [key, value] of sMap) {
    if (tMap.get(key) !== value) return false;
  }
  return true;
};

let s = "anagram",
  t = "nagaram";
console.log(isAnagram(s, t));
