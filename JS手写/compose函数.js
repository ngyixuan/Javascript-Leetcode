function compose(...funcs) {
  return function (initialValue) {
    return funcs.reduceRight((acc, fn) => fn(acc), initialValue);
  };
}
const add = (x) => x + 2;
const multiply = (x) => x * 3;
const square = (x) => x * x;

const composedFunction = compose(square, multiply, add);

// 计算顺序：先执行 add，然后 multiply，再执行 square
console.log(composedFunction(2)); // 输出 144
// 计算过程：(2 + 2) -> 4 * 3 -> 12 * 12 -> 144
