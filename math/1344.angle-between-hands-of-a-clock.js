/*
 * @lc app=leetcode id=1344 lang=javascript
 *
 * [1344] Angle Between Hands of a Clock
 */

// @lc code=start
/**
 * @param {number} hour
 * @param {number} minutes
 * @return {number}
 */
var angleClock = function (hour, minutes) {
  // 分针：1分钟 = 6度
  //时针：60分钟=30度，1分钟=0.5度

  let angle = minutes * 6 - ((hour % 12) * 30 + minutes * 0.5);
  let abs = Math.abs(angle);
  if (abs > 180) {
    abs = 360 - abs;
  }
  return abs;
};
// @lc code=end
let hour = 3,
  minutes = 30;
console.log(angleClock(hour, minutes));
