console.log(123 == "123"); // true
console.log("123" == 123); //true
console.log(true == "1"); //true
console.log(true == 1); //true
console.log(true == [1, 2]); //false
console.log(true == [1]); //true
console.log(true == ["1"]); //true
console.log(null == undefined); //true
console.log(null == 0); //false
console.log([] == 0); //true
console.log([1] == 1); //true

console.log("5" + 3 - 2); // "53" - 2 -> 51
console.log("5" - 2 + "1"); // 3 + "1" -> "31"
