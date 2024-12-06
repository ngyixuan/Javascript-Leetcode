function Parent(name) {
  this.name = name;
  this.num = [1, 2, 3];
}
Parent.prototype.getNum = function () {
  console.log(this.num);
}; //原型链继承方法

Parent.prototype.getName = function () {
  console.log(this.name);
};

function Child(name, age) {
  Parent.call(this, name); // 支持父类构造函数传参
  this.age = age;
}

Child.prototype = Object.create(Parent.prototype); // 这里改用 Object.create 就可以减少组合继承中多进行一次构造的过程
Child.prototype.constructor = Child;

let child1 = new Child("People1", 20);
let child2 = new Child("People2", 50);

child1.name = "Parent1 edited";
child1.num.push(4);
console.log(child1.name, "|", child2.name); //Parent1 edited | People2
console.log(child1.num, "|", child2.num); //[ 1, 2, 3, 4 ] | [ 1, 2, 3 ]
child1.getNum(); //[ 1, 2, 3, 4 ]
child1.getName(); //Parent1 edited
