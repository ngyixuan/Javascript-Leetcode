function concatArray(arr1, arr2) {
  //   arr1 = arr1.concat(arr2).sort((a, b) => a - b);
  //   return arr1;

  let merge = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      merge.push(arr1[i]);
      i++;
    } else {
      merge.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    merge.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    merge.push(arr2[j]);
    j++;
  }

  return merge;
}

const array1 = [1, 3, 5, 7];
const array2 = [2, 4, 6, 8];
console.log(concatArray(array1, array2));
