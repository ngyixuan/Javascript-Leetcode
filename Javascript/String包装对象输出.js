console.log(String(123)); //123
console.log(String("123")); //123
console.log(String("123abc")); //123abc
console.log(String("")); //空字符
console.log(String("true")); //true
console.log(String(true)); //true
console.log(String(false)); //false
console.log(String(undefined)); //undefined
console.log(String(null)); //null
console.log(String({ a: 1 })); //[object Object]
console.log(String([1, 2, 3])); //1,2,3
console.log(String([3])); //3
console.log(String(["1", "2", "3"])); //1,2,3
console.log(String(Symbol("desc"))); //Symbol(desc)

let sym = Symbol("desc");
let concatsym = Symbol("desc") + "";
console.log(String(Symbol("desc") + "")); //TypeError: Cannot convert a Symbol value to a string
