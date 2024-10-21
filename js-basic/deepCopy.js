function deepCopy(obj) {
  if (!obj || typeof obj !== "object") {
    return;
  }

  let newObject = Array.isArray(obj) ? [] : {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObject[key] =
        typeof obj[key] === "object" ? deepCopy(obj[key]) : obj[key];
    }
  }

  return newObject;
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
// original.circularRef = original;

const deepCopied = deepCopy(original);
deepCopied.address.city = "New York";
deepCopied.hobbies.push("music");

console.log(original);
console.log(deepCopied);

// console.log(deepCopied.circularRef === deepCopied); // true (处理循环引用)
