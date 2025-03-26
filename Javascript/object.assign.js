Object.myassign = function (target, ...source) {
  if (target === null) {
    return;
  }
  let result = Object(target);
  source.forEach(function (obj) {
    if (obj !== null) {
      for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
          result[key] = obj[key];
        }
      }
    }
  });

  return result;
};
let target = { a: 1 };
let source1 = { b: 2 };
let source2 = { c: 3 };

let result = Object.myassign(target, source1, source2);
console.log(result); // 输出: { a: 1, b: 2, c: 3 }
