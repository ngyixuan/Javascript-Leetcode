var romanToInt = function (s) {
  const I = 1;
  const V = 5;
  const X = 10;
  const L = 50;
  const C = 100;
  const D = 500;
  const M = 1000;
  total = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] == "I") {
      total += I;
    }
    if (s[i] == "V") {
      if (i > 0 && s[i - 1] == "I") {
        total -= 2;
      }
      total += V;
    }
    if (s[i] == "X") {
      if (i > 0 && s[i - 1] == "I") {
        total -= 2;
      }
      total += X;
    }
    if (s[i] == "L") {
      if (i > 0 && s[i - 1] == "X") {
        total -= 20;
      }
      total += L;
    }
    if (s[i] == "C") {
      if (i > 0 && s[i - 1] == "X") {
        total -= 20;
      }
      total += C;
    }
    if (s[i] == "D") {
      if (i > 0 && s[i - 1] == "C") {
        total -= 200;
      }
      total += D;
    }
    if (s[i] == "M") {
      if (i > 0 && s[i - 1] == "C") {
        total -= 200;
      }
      total += M;
    }
  }
  return total;
};
s = "LVIII";
// s = "MCMXCIV";
console.log(romanToInt(s));
