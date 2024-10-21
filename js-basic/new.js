function createNew() {
  //1.创建空对象和构造函数
  //2.设置对象的原型为构造函数的prototype

  let newObj = null;
  let constructor = Array.prototype.shift.call(arguments);
  let result = null;
  if (typeof constructor !== "function") {
    return;
  }
  newObj = Object.create(constructor.prototype);
  result = constructor.apply(newObj, arguments);
  let flag =
    result && (typeof result == "object" || typeof result == "function");
  return flag ? result : newObj;
}

function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.great = function () {
  console.log(`Hi, I am ${this.name}`);
};

let newPerson = createNew(Person, "John", 30);
console.log(newPerson);
