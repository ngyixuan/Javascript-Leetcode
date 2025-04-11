/**
 * @param {string} date
 * @return {string}
 */
var convertDateToBinary = function (date) {
  let res = "";
  date = date.split("-").map(Number);
  for (let i = 0; i < date.length; i++) {
    let item = date[i];
    let binary = [];
    while (item > 0) {
      binary.unshift(item % 2);
      item = Math.floor(parseInt(item) / 2);
    }
    if (i < date.length - 1) {
      res = res.concat(binary.join("")) + "-";
    } else {
      res = res.concat(binary.join(""));
    }
  }
  console.log(res);
};

let date = "1900-01-01";
convertDateToBinary(date);
