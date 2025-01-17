function quickSort(arr) {
  if (arr.length <= 1) return arr;
  let left = [];
  let right = [];
  let pivot = arr[arr.length - 1];

  //这里的要减去1是因为最后一个pivot是拿出来做中轴，不用把它也跟pivot比较
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

let arr = [1, 5, 4, 3, 2];
console.log(quickSort(arr));
