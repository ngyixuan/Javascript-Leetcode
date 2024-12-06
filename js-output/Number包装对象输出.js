console.log(Number(123)); //123
console.log(Number("123")); //123
console.log(Number("123abc")); //NaN
console.log(Number("")); //0
console.log(Number("true")); //NaN
console.log(Number(true)); //1
console.log(Number(false)); //0
console.log(Number(undefined)); //NaN
console.log(Number(null)); //0
console.log(Number({ a: 1 })); //NaN
console.log(Number([1, 2, 3])); //NaN
console.log(Number([3])); //3
console.log(Number(["1", "2", "3"])); //NaN
