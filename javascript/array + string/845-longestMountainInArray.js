/**
 * @param {number[]} arr
 * @return {number}
 */
var longestMountain = function (arr) {
  let maxPoint = [];

  for (let i = 1; i < arr.length - 1; i++) {
    let left = arr[i - 1];
    let right = arr[i + 1];
    let curr = arr[i];
    if (left < curr && right < curr) maxPoint.push(i);
  }
  let maxDistance = 0;
  for (let i = 0; i < maxPoint.length; i++) {
    let peakLeft = maxPoint[i] - 1;
    let peakRight = maxPoint[i] + 1;
    while (peakLeft > 0 && arr[peakLeft] > arr[peakLeft - 1]) {
      peakLeft--;
    }
    while (peakRight < arr.length - 1 && arr[peakRight] > arr[peakRight + 1]) {
      peakRight++;
    }

    maxDistance = Math.max(maxDistance, peakRight - peakLeft + 1);
  }
  return maxDistance;
};

let arr = [1, 2, 3, 4, 3, 2, 1];
console.log(longestMountain(arr));
