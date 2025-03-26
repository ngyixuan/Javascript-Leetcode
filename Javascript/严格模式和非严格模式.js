function foo() {
  console.log(this);
}

foo(); // global

function bar() {
  "use strict"; // 函数级启用严格模式
  console.log(this);
}

bar(); // undefined
