function Parent() {
  this.name = "parent";
  this.num = [1, 2, 3];
}
Parent.prototype.getNum = function () {
  console.log(this.num);
};

function Child() {}

Child.prototype = new Parent();
let child1 = new Child();
let child2 = new Child();

child1.name = "parent edited";
child1.num.push(4);
console.log(child1.name, "|", child2.name); //parent edited | parent
console.log(child1.num, "|", child2.num); //[ 1, 2, 3, 4 ] | [ 1, 2, 3, 4 ] 实例的引用类型都被修改了
child1.getNum(); //[ 1, 2, 3, 4 ]
