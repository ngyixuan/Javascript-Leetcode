function createObj(parent) {
  var child = Object.create(parent);
  child.getNum = function () {
    //增加一些方法
    console.log(this.num);
  };
  return child;
}

const Parent = {
  name: "parent",
  num: [1, 2, 3],
};

let child1 = createObj(Parent); // 新对象以现有对象为原型
let child2 = createObj(Parent);

child1.name = "parent edited";
child1.num.push(4);
console.log(child1.name, "|", child2.name); // parent edited | parent
console.log(child1.num, "|", child2.num); // [ 1, 2, 3, 4 ] | [ 1, 2, 3, 4 ] 引用属性共用
child1.getNum(); // [ 1, 2, 3, 4 ] 使用增加的方法
