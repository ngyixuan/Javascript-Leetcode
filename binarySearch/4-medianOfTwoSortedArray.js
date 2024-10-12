/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let m = nums1.length;
  let n = nums2.length;
  let newNums = [];
  if (m == 0) {
    if (n % 2 == 0) {
      return (nums2[Math.floor(n / 2 - 1)] + nums2[Math.floor(n / 2)]) / 2.0;
    } else {
      return nums2[Math.floor(n / 2)];
    }
  }

  if (n == 0) {
    if (m % 2 == 0) {
      return (nums1[Math.floor(m / 2 - 1)] + nums1[Math.floor(m / 2)]) / 2.0;
    } else {
      return nums1[Math.floor(m / 2)];
    }
  }

  let count = 0;
  let i = 0,
    j = 0;
  while (count != m + n) {
    if (i === m) {
      while (j !== n) {
        console.log(i, j, newNums);

        newNums.push(nums2[j]);
        j++;
        count++;
      }

      break;
    }
    if (j === n) {
      while (i !== m) {
        newNums.push(nums1[i]);
        i++;
        count++;
      }
      break;
    }

    if (nums1[i] < nums2[j]) {
      newNums.push(nums1[i]);
      i++;
      count++;
    } else {
      newNums.push(nums2[j]);
      j++;
      count++;
    }
  }

  if (count % 2 == 0) {
    return (
      (newNums[Math.floor(count / 2 - 1)] + newNums[Math.floor(count / 2)]) /
      2.0
    );
  } else {
    return newNums[Math.floor(count / 2)];
  }
};

let nums1 = [1, 3];
let nums2 = [2];
console.log(findMedianSortedArrays(nums1, nums2));
