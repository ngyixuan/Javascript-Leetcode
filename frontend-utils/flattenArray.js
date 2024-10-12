function flattenArray(arr) {
  //   return arr.flat(Infinity);
  let res = [];
  let stack = [...arr];
  while (stack.length) {
    const next = stack.pop();
    console.log(next);
    if (Array.isArray(next)) {
      stack.push(...next);
    } else {
      res.push(next);
    }
    console.log(stack);
  }
  console.log(res.reverse());
  //   const flatten = (arr) => {
  //     let res = [];
  //     arr.forEach((item) => {
  //       if (Array.isArray(item)) {
  //         res = res.concat(flatten(item));
  //       } else {
  //         res.push(item);
  //       }
  //     });

  //     return res;
  //   };
  //   console.log(flatten(arr));
}
let arr = [1, [2, [3, 4]], 5];
flattenArray(arr);
