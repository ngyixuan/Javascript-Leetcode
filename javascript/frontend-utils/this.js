// this.name = "window name";
// function A() {
//   this.name = "123";
// }

// A.prototype.getA = function () {
//   console.log(this);
//   return this.name;
// };

// let a = new A();
// let funcA = a.getA();
// funcA;

// window.name = "global name";
class B {
  constructor() {
    this.name = "B name";
  }
  getB() {
    console.log(this);
    console.log(this.name);
  }
}

let b = new B();
let funcB = b.getB.bind(b);
funcB();
