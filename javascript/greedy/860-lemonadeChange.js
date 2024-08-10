/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
  let five = 0,
    ten = 0,
    twenty = 0;
  for (let i = 0; i < bills.length; i++) {
    if (bills[i] == 5) five++;
    else if (bills[i] == 10) {
      if (five < 1) return false;
      ten++;
      five--;
    } else {
      if (five > 0 && ten > 0) {
        ten--;
        five--;
      } else if (five >= 3) {
        five -= 3;
      } else return false;
    }
  }
  return true;
};
bills = [5, 5, 10, 10, 20];
console.log(lemonadeChange(bills));
