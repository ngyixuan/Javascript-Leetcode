function deepCopy(target, hash = new WeakMap()) {
  if (typeof target !== "object" || target === null) return target;
  if (hash.has(target)) return hash.get(target);
  const cloneTarget = new target.constructor();
  console.log("target", target, "cloneTarget", cloneTarget);
  hash.set(target, cloneTarget);
  Reflect.ownKeys(target).forEach((key) => {
    cloneTarget[key] = deepCopy(target[key], hash);
  });

  return cloneTarget;
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
// 模拟循环引用
original.circularRef = original;

const deepCopied = deepCopy(original);
deepCopied.address.city = "New York";
deepCopied.hobbies.push("music");

console.log(original.address.city); // "Paris" (深拷贝不会影响原对象)
console.log(original.hobbies); // ["reading", "traveling"] (深拷贝后修改新对象不会影响原对象)
console.log(deepCopied.circularRef === deepCopied); // true (处理循环引用)
console.log(deepCopied);
