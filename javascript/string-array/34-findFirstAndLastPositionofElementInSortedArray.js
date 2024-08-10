/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let left = 0
    let right  = nums.length -1
    let res = []

    //先找最左侧的
    while(left<=right){
        let mid = left+ Math.floor((right-left) /2)
        if(nums[mid]===target){
            right = mid-1
        }
        else if( nums[mid] > target){
            right = mid -1
        }
        else if(nums[mid ]< target){
            left = mid +1
        }
    }

    if( left>=nums.length || nums[left] !==target){
        return [-1,-1]
    }

    //找最右侧的
    right = nums.length -1
    res.push(left)
    while(left<=right){
        let mid = left+ Math.floor((right-left) /2)
        if(nums[mid]===target){
            left = mid+1
        }
        else if( nums[mid] > target){
            right = mid -1
        }
        else if(nums[mid ]< target){
            left = mid +1
        }

    }
    res.push(right)
    return res
    
};
let nums = [5,7,7,8,8,10]
let target = 8

console.log(searchRange(nums, target))
