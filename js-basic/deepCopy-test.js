function deepCopy(obj, hash = new WeakMap()) {
  if (typeof obj !== "object" || obj === null) {
    return obj;
  }
  if (hash.has(obj)) {
    return hash.get(obj);
  }
  const target = Array.isArray(obj) ? [] : {};
  hash.set(obj, target);
  Reflect.ownKeys(obj).forEach((key) => {
    const val = obj[key];
    if (typeof val === "object" && val !== null) {
      target[key] = deepCopy(val, hash);
    } else {
      target[key] = val;
    }
  });

  return target;
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
