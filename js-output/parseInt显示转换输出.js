console.log(parseInt(123)); //123
console.log(parseInt("123")); //123
console.log(parseInt("123abc")); //123
console.log(parseInt("")); //NaN
console.log(parseInt("true")); //NaN
console.log(parseInt(true)); //NaN
console.log(parseInt(false)); //NaN
console.log(parseInt(undefined)); //NaN
console.log(parseInt(null)); //NaN
console.log(parseInt({ a: 1 })); //NaN
console.log(parseInt([1, 2, 3])); //1
console.log(parseInt([3])); //3
console.log(parseInt(["1", "2", "3"])); //1
