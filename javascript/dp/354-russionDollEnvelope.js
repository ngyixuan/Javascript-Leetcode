/**
 * @param {number[][]} envelopes
 * @return {number}
 */
var maxEnvelopes = function (envelopes) {
  envelopes.sort((a, b) => (a[0] == b[0] ? b[1] - a[1] : a[0] - b[0]));
  console.log(envelopes);
  let height = new Array(envelopes.length);
  for (let i = 0; i < envelopes.length; i++) {
    height[i] = envelopes[i][1];
  }
  return lengthOfLTS(height);
};
// var lengthOfLTS = function (height) {
//   let dp = new Array(height.length).fill(1);
//   for (let i = 0; i < height.length; i++) {
//     for (let j = 0; j < i; j++) {
//       if (height[i] > height[j]) {
//         dp[i] = Math.max(dp[i], dp[j] + 1);
//       }
//     }
//   }
//   let res = 0;
//   for (const val of dp) {
//     res = Math.max(res, val);
//   }

//   return res;
// };

var lengthOfLIS = function (nums) {
  var top = new Array(nums.length);
  // 牌堆数初始化为 0
  var piles = 0;
  for (var i = 0; i < nums.length; i++) {
    // 要处理的扑克牌
    var poker = nums[i];

    // ***** 搜索左侧边界的二分查找 *****
    var left = 0,
      right = piles;
    while (left < right) {
      var mid = Math.floor((left + right) / 2);
      if (top[mid] > poker) {
        right = mid;
      } else if (top[mid] < poker) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }
    // ********************************

    // 没找到合适的牌堆，新建一堆
    if (left == piles) piles++;
    // 把这张牌放到牌堆顶
    top[left] = poker;
  }
  // 牌堆数就是 LIS 长度
  return piles;
};
let envelopes = [
  [5, 4],
  [6, 4],
  [6, 7],
  [2, 3],
];
console.log(maxEnvelopes(envelopes));
