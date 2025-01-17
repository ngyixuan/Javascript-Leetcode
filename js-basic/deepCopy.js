function deepCopy(obj, hash = new WeakMap()) {
  //1. 如果是基本数据类型就返回
  if (obj == null || typeof obj !== "object") return obj;
  //2. 如果是 Date 类型
  // if (obj instanceof Date) {
  //   return new Date(obj);
  // }
  // 3. 如果是 RegExp 类型
  // if (obj instanceof RegExp) {
  //   return new RegExp(obj.source, obj.flags);
  // }
  //4. 检测循环引用
  if (hash.has(obj)) return hash.get(obj);

  // 5. 初始化拷贝的对象或数组
  const clone = Array.isArray(obj) ? [] : {};
  hash.set(obj, clone);

  // 6. 遍历对象或数组的属性
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      clone[key] = deepCopy(obj[key], hash);
    }
  }

  //7. 拷贝Symbol
  const symbols = Object.getOwnPropertySymbols(obj);
  for (const sym of symbols) {
    clone[sym] = deepCopy(obj[sym], hash);
  }

  return clone;
}

const original = {
  name: "Alice",
  age: 25,
  address: {
    city: "Paris",
    zip: "75000",
  },
  hobbies: ["reading", "traveling"],
  circularRef: null, // 用于测试循环引用
};
// // 模拟循环引用
original.circularRef = original;

const deepCopied = deepCopy(original);
deepCopied.address.city = "New York";
deepCopied.hobbies.push("music");

console.log(original);
console.log(deepCopied);

console.log(deepCopied.circularRef === deepCopied); // true (处理循环引用)
