const Parent = {
  name: "parent",
  num: [1, 2, 3],
};

let child1 = Object.create(Parent); //以现有对象为原型
let child2 = Object.create(Parent);

child1.name = "parent edited";
child1.num.push(4);
console.log(child1.name, "|", child2.name); // parent edited | parent
console.log(child1.num, "|", child2.num); // [ 1, 2, 3, 4 ] | [ 1, 2, 3, 4 ] 引用属性共用
