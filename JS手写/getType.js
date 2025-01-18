//手写类型判断函数
function getType(value) {
  if (value === null) {
    return value + "";
  }
  if (typeof value === "object") {
    let valueClass = Object.prototype.toString.call(value);
    return valueClass.slice(8, -1).toLowerCase();
  } else {
    return typeof value;
  }
}

let obj = {
  name: "yixuan",
  age: 24,
};

console.log(getType(obj));
