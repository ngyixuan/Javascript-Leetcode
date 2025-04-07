## 动态解题思路

dp 数组的基础框架

```js
# 自顶向下递归的动态规划
def dp(状态1, 状态2, ...):
    for 选择 in 所有可能的选择:
        # 此时的状态已经因为做了选择而改变
        result = 求最值(result, dp(状态1, 状态2, ...))
    return result

# 自底向上迭代的动态规划
# 初始化 base case
dp[0][0][...] = base case
# 进行状态转移
for 状态1 in 状态1的所有取值：
    for 状态2 in 状态2的所有取值：
        for ...
            dp[状态1][状态2][...] = 求最值(选择1，选择2...)
```

以力扣第 509 题斐波那契数列为例，自底向上的 dp table

```js
var fib = function (N) {
  if (N === 0) return 0;
  let dp = new Array(N + 1).fill(0);
  // base case
  dp[0] = 0;
  dp[1] = 1;
  // 状态转移
  for (let i = 2; i <= N; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[N];
};
```

## 动态规划习题

- 53.最大子数组和 [Leetcode](https://leetcode.com/problems/maximum-subarray/description/) ｜[力扣](https://leetcode.cn/problems/maximum-subarray/description/) 🔥🔥🔥
- 121.买卖股票的最佳时机 [Leetcode](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/) ｜[力扣](https://leetcode.cn/problems/best-time-to-buy-and-sell-stock/description/) 🔥🔥🔥
- 300.最长递增子序列 [Leetcode](https://leetcode.com/problems/longest-increasing-subsequence/description/) ｜[力扣](https://leetcode.cn/problems/longest-increasing-subsequence/description/) 🔥🔥🔥
- 1143.最长公共子序列 [Leetcode](https://leetcode.com/problems/longest-common-subsequence/description/) ｜[力扣](https://leetcode.cn/problems/longest-common-subsequence/description/) 🔥🔥🔥
- 70.爬楼梯 [Leetcode](https://leetcode.com/problems/climbing-stairs/description/) ｜[力扣](https://leetcode.cn/problems/climbing-stairs/description/) 🔥🔥🔥
- 322.零钱兑换 [Leetcode](https://leetcode.com/problems/coin-change/description/) ｜[力扣](https://leetcode.cn/problems/coin-change/description/) 🔥🔥🔥
- 221.最大正方形[Leetcode](https://leetcode.com/problems/maximal-square/description/) ｜[力扣](https://leetcode.cn/problems/maximal-square/description/) 🔥🔥🔥
