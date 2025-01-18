const bool1 = true;
const bool2 = new Boolean(false);
console.log(bool1); // true
console.log(bool2); // [Boolean: false]
console.log(bool2 ? "Truthy" : "Falsy"); // "Truthy

const str1 = "hello";
const str2 = new String("hello");
console.log(str1); // hello
console.log(str2); // [String: 'hello']
