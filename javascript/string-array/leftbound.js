
var left_bound_1 = function(nums, target) {
    var left = 0;
    var right = nums.length; // 注意
    
    while (left < right) { // 注意
        var mid = left + Math.floor((right - left) / 2);
        if (nums[mid] == target) {
            right = mid;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else if (nums[mid] > target) {
            right = mid; // 注意
        }
    }
    // 判断 target 是否存在于 nums 中
    // 如果越界，target 肯定不存在，返回 -1
    if (left < 0 || left >= nums.length) {
        return -1;
    }
    // 判断一下 nums[left] 是不是 target
    return nums[left] == target ? left : -1;
}


var left_bound_2 = function(nums, target) {
    var left = 0, right = nums.length - 1;
    // 搜索区间为 [left, right]
    while (left <= right) {
        var mid = left + Math.floor((right - left) / 2);
        if (nums[mid] < target) {
            // 搜索区间变为 [mid+1, right]
            left = mid + 1;
        } else if (nums[mid] > target) {
            // 搜索区间变为 [left, mid-1]
            right = mid - 1;
        } else if (nums[mid] == target) {
            // 收缩右侧边界
            right = mid - 1;
        }
    }   
    // 判断 target 是否存在于 nums 中
    // 如果越界，target 肯定不存在，返回 -1
    if (left < 0 || left >= nums.length) {
        return -1;
    }
    // 判断一下 nums[left] 是不是 target
    return nums[left] == target ? left : -1;
};


let nums = [1,2,2,2,2,5]
let target = 3
console.log(left_bound_1(nums,target))
console.log(left_bound_2(nums,target))
