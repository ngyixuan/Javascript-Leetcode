var reverseWords = function (s) {
  s = s.trim().split(" ");
  s = s.filter((i) => i);
  console.log(s);
  for (let i = 0; i < Math.floor(s.length / 2); i++) {
    temp = s[i];
    s[i] = s[s.length - 1 - i];
    s[s.length - 1 - i] = temp;
  }
  s = s.join(" ");
  return s;
};

s = "  hello world  ";
reverseWords(s);
