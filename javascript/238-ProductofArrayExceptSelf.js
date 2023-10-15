var productExceptSelf = function (nums) {
  let newArr = [];
  let j = 0;

  while (j < nums.length) {
    let newResult = 1;
    for (let i = 0; i < nums.length; i++) {
      if (i == j) continue;
      newResult *= nums[i];
    }
    newArr[j] = newResult;
    j++;
  }

  console.log(newArr);
};

nums = [-1, 1, 0, -3, 3];

// nums = [1, 2, 3, 4];
productExceptSelf(nums);
