## 回溯算法习题

- 46.全排列 [Leetcode](https://leetcode.com/problems/permutations/) ｜[力扣](https://leetcode.cn/problems/permutations/description/) 🔥🔥🔥
- 93.复原 IP 地址[Leetcode](https://leetcode.com/problems/restore-ip-addresses/) ｜[力扣](https://leetcode.cn/problems/restore-ip-addresses/description/) 🔥🔥🔥
- 22.括号生成 [Leetcode](https://leetcode.com/problems/generate-parentheses/description/) ｜[力扣](https://leetcode.cn/problems/generate-parentheses/description/) 🔥🔥🔥
- 78.子集 [Leetcode](https://leetcode.com/problems/subsets/) ｜[力扣](https://leetcode.cn/problems/subsets/description/) 🔥🔥🔥
- 39.组合总和 [Leetcode](https://leetcode.com/problems/combination-sum/description/) ｜[力扣](https://leetcode.cn/problems/combination-sum/description/) 🔥🔥🔥
- 47.全排列 II [Leetcode](https://leetcode.com/problems/permutations-ii/description/) ｜[力扣](https://leetcode.cn/problems/permutations-ii/description/) 🔥🔥🔥
- 40.组合总和 II [Leetcode](https://leetcode.com/problems/combination-sum-ii/) ｜[力扣](https://leetcode.cn/problems/combination-sum-ii/description/) 🔥🔥🔥
- 17.电话号码的字母组合 [Leetcode](https://leetcode.com/problems/letter-combinations-of-a-phone-number/description/) ｜[力扣](https://leetcode.cn/problems/letter-combinations-of-a-phone-number/description/)
- 77.组合 [Leetcode](https://leetcode.com/problems/combinations/description/) ｜[力扣](https://leetcode.cn/problems/combinations/description/)
- 131.分割回文串 [Leetcode](https://leetcode.com/problems/palindrome-partitioning/description/) ｜[力扣](https://leetcode.cn/problems/palindrome-partitioning/description/)
- 306.累加数 [Leetcode](https://leetcode.com/problems/additive-number/) ｜[力扣](https://leetcode.cn/problems/additive-number/description/)
- 89.格雷编码 [Leetcode](https://leetcode.com/problems/gray-code/description/) ｜[力扣](https://leetcode.cn/problems/gray-code/description/)
- 967.连续差相同的数字 [Leetcode](https://leetcode.com/problems/numbers-with-same-consecutive-differences/) ｜[力扣](https://leetcode.cn/problems/numbers-with-same-consecutive-differences/description/)
- 90.子集 II [Leetcode](https://leetcode.com/problems/subsets-ii/description/) ｜[力扣](https://leetcode.cn/problems/subsets-ii/description/)

## 回溯算法解题思路

### 组合框架

#### 1. 无重复元素可复选

```js
/**
 * 组合问题框架（无重复元素，可重复使用）
 * @param {number[]} nums - 候选数字（无重复）
 * @param {number} target - 目标值
 */
function combinationSum(nums, target) {
  const res = [];

  const backtrack = (start, path, sum) => {
    // 终止条件
    if (sum === target) {
      res.push([...path]);
      return;
    }
    if (sum > target) return;

    // 遍历选择列表
    for (let i = start; i < nums.length; i++) {
      // 做选择
      path.push(nums[i]);
      // 关键点：可重复使用
      backtrack(i, path, sum + nums[i]);
      // 撤销选择
      path.pop();
    }
  };

  backtrack(0, [], 0);
  return res;
}
```

#### 2. 有重复元素不可复选

```js
/**
 * 组合问题框架（有重复元素，不可重复使用）
 * @param {number[]} nums - 候选数字（可能有重复）
 * @param {number} target - 目标值
 */
function combinationSum2(nums, target) {
  const res = [];
  nums.sort((a, b) => a - b); // 必须排序

  const backtrack = (start, path, sum) => {
    // 终止条件
    if (sum === target) {
      res.push([...path]);
      return;
    }
    if (sum > target) return;

    // 遍历选择列表
    for (let i = start; i < nums.length; i++) {
      // 剪枝：跳过同一层级的重复元素
      if (i > start && nums[i] === nums[i - 1]) continue;

      // 做选择
      path.push(nums[i]);
      // 递归（传i+1表示不可重复使用）
      backtrack(i + 1, path, sum + nums[i]);
      // 撤销选择
      path.pop();
    }
  };

  backtrack(0, [], 0);
  return res;
}
```

### 子集框架

#### 1. 无重复元素可复选

```js
/**
 * 子集框架（无重复元素）
 * @param {number[]} nums - 无重复元素的数组
 * @return {number[][]} - 所有子集
 */
function subsets(nums) {
  const res = [];

  const backtrack = (start, path) => {
    // 每个节点都是有效结果
    res.push([...path]);

    for (let i = start; i < nums.length; i++) {
      path.push(nums[i]);
      backtrack(i + 1, path); // 不可重复使用元素
      path.pop();
    }
  };

  backtrack(0, []);
  return res;
}
```

#### 2. 有重复元素不可复选

```js
/**
 * 子集框架（有重复元素）
 * @param {number[]} nums - 可能含重复元素的数组
 * @return {number[][]} - 不重复的子集集合
 */
function subsetsWithDup(nums) {
  const res = [];
  nums.sort((a, b) => a - b); // 必须先排序

  const backtrack = (start, path) => {
    res.push([...path]);

    for (let i = start; i < nums.length; i++) {
      // 跳过同一层级的重复元素
      if (i > start && nums[i] === nums[i - 1]) continue;

      path.push(nums[i]);
      backtrack(i + 1, path);
      path.pop();
    }
  };

  backtrack(0, []);
  return res;
}
```

### 全排列框架

#### 1. 无重复元素

```js
/**
 * 排列问题框架（无重复元素）
 * @param {number[]} nums - 候选数字（无重复）
 */
function permute(nums) {
  const res = [];
  const used = new Array(nums.length).fill(false);

  const backtrack = (path) => {
    // 终止条件
    if (path.length === nums.length) {
      res.push([...path]);
      return;
    }

    // 遍历选择列表
    for (let i = 0; i < nums.length; i++) {
      // 剪枝：跳过已使用的元素
      if (used[i]) continue;

      // 做选择
      path.push(nums[i]);
      used[i] = true;
      // 递归
      backtrack(path);
      // 撤销选择
      path.pop();
      used[i] = false;
    }
  };

  backtrack([]);
  return res;
}
```

#### 2. 有重复元素

```js
/**
 * 排列问题框架（有重复元素）
 * @param {number[]} nums - 候选数字（可能有重复）
 */
function permuteUnique(nums) {
  const res = [];
  nums.sort((a, b) => a - b); // 必须排序
  const used = new Array(nums.length).fill(false);

  const backtrack = (path) => {
    // 终止条件
    if (path.length === nums.length) {
      res.push([...path]);
      return;
    }

    // 遍历选择列表
    for (let i = 0; i < nums.length; i++) {
      // 剪枝条件
      if (used[i]) continue;
      if (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) continue;

      // 做选择
      path.push(nums[i]);
      used[i] = true;
      // 递归
      backtrack(path);
      // 撤销选择
      path.pop();
      used[i] = false;
    }
  };

  backtrack([]);
  return res;
}
```
