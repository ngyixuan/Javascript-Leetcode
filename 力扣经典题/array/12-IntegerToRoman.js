/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  let str = "";
  let romanMap = [
    { val: 1000, letter: "M" },
    { val: 900, letter: "CM" },
    { val: 500, letter: "D" },
    { val: 400, letter: "CD" },
    { val: 100, letter: "C" },
    { val: 90, letter: "XC" },
    { val: 50, letter: "L" },
    { val: 40, letter: "XL" },
    { val: 10, letter: "X" },
    { val: 9, letter: "IX" },
    { val: 5, letter: "V" },
    { val: 4, letter: "IV" },
    { val: 1, letter: "I" },
  ];

  for (let item of romanMap) {
    while (num >= item.val) {
      str += item.letter;
      num -= item.val;
    }
  }
  return str;
};

let num = 3749;
intToRoman(num);
