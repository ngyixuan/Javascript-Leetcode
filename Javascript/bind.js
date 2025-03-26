Function.prototype.myBind = function (context) {
  if (typeof this != "function") {
    throw new Error("type error");
  }
  let args = [...arguments].slice(1);
  let fn = this;
  return function Fn() {
    return fn.apply(
      this instanceof Fn ? this : context,
      args.concat(...arguments)
    );
  };
};

//调用绑定后的函数
function greet(greeting, name) {
  console.log(greeting + ", " + name);
}
const greetHello = greet.myBind(null, "Hello");
greetHello("Alice"); // 输出: Hello, Alice

// 绑定后的函数通过new调用
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const BoundPerson = Person.myBind(null, "Alice");
const p = new BoundPerson(25);
console.log(p.name); // 输出: Alice
console.log(p.age); // 输出: 25
