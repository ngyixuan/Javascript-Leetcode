function curry(fn, ...args) {
  return fn.length <= args.length ? fn(...args) : curry.bind(null, fn, ...args);
}

function sum(a, b, c) {
  return a + b + c;
}

const curriedSum = curry(sum, 1, 2, 3);
console.log(curriedSum(1, 2)(3)); // 输出: 6
console.log(curriedSum);
