/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var advantageCount = function(nums1, nums2) {
    const bMap = {};
    for (let i = 0; i < nums2.length; i++) {
        const num = nums2[i];
        if (!bMap[num]) bMap[num] = [];
        bMap[num].push(i);
    }

    nums1.sort((a,b)=>b-a)
    nums2.sort((a,b)=>b-a)

    let aStart = 0
    let bStart = 0
    let aEnd = nums1.length-1
    let res = new Array(nums1.length).fill(null)
    while(aStart<=aEnd){
        let aMax = nums1[aStart]
        let aMin = nums1[aEnd]
        let bMax = nums2[bStart]
        let bIndex = bMap[bMax].pop()


        if(aMax>bMax){
            res[bIndex] = aMax
            aStart++
        }
        else{
            res[bIndex] = aMin
            aEnd--
        }

        bStart++
    }

    return res
};
let nums1 = [12,24,8,32]
let nums2 =[13,25,32,11]
console.log(advantageCount(nums1,nums2))

