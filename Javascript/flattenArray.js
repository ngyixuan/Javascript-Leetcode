function flattenArray(arr) {
  //   return arr.flat(Infinity);

  let res = [];
  for (let item of arr) {
    if (Array.isArray(item)) {
      res = res.concat(flattenArray(item));
    } else {
      res.push(item);
    }
  }

  return res;
}
let arr = [1, [2, [3, 4]], 5];
console.log(flattenArray(arr));
