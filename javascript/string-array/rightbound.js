var right_bound_1 = function(nums, target) {
    var left = 0, right = nums.length;
    
    while (left < right) {
        var mid = left + Math.floor((right - left) / 2);
        if (nums[mid] === target) {
            left = mid + 1; // 注意
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else if (nums[mid] > target) {
            right = mid;
        }
    }
    return left - 1; // 注意
}

var right_bound_2 = function(nums, target) {
    var left = 0, right = nums.length - 1;
    while (left <= right) {
        var mid = left + Math.floor((right - left) / 2);
        if (nums[mid] < target) {
            left = mid + 1;
        } else if (nums[mid] > target) {
            right = mid - 1;
        } else if (nums[mid] == target) {
            // 这里改成收缩左侧边界即可
            left = mid + 1;
        }
    }
    // 最后改成返回 right
    if (right < 0 || right >= nums.length) {
        return -1;
    }
    return nums[right] == target ? (right) : -1;
};

let nums = [1,2,2,2,2,5]
let target = 2
// console.log(right_bound_1(nums,target))
console.log(right_bound_2(nums,target))