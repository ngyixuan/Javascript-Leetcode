function myNew() {
  //1. 创建一个空对象
  let newObj = null;
  //2. 将对象的原型指向构造函数的原型
  let constructor = Array.prototype.shift.call(arguments); //拿到构造函数
  if (typeof constructor !== "function") return; //如果不是函数就返回
  newObj = Object.create(constructor.prototype);
  //3. 将构造函数的this指向新对象
  let result = constructor.apply(newObj, arguments);
  //4. 根据构建函数返回类型作判断，如果是原始值则被忽略，如果是返回对象，需要正常处理
  let flag =
    result && (typeof result == "object" || typeof result == "function");
  return flag ? result : newObj;
}

function Person(name, age) {
  this.name = name;
  this.age = age;
  return {
    car: "car1",
  };
}

Person.prototype.great = function () {
  console.log(`Hi, I am ${this.name}`);
};

let newPerson = myNew(Person, "John", 30);
console.log(newPerson);
