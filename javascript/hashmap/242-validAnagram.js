var isAnagram = function (s, t) {
  if (s.length != t.length) {
    return false;
  }
  let originText = new Map();
  let compareText = new Map();
  for (let i = 0; i < s.length; i++) {
    originText.set(s[i], (originText.get(s[i]) || 0) + 1);
    compareText.set(t[i], (compareText.get(t[i]) || 0) + 1);
  }

  for (let i = 0; i < t.length; i++) {
    if (compareText.get(t[i]) != originText.get(t[i])) {
      return false;
    }
    return true;
  }
};
s = "anagram";
t = "iagaram";
console.log(isAnagram(s, t));
