function shallowCopy() {
  //Object.assign方法
  const obj = {
    name: {
      firstName: "Ng",
      lastName: "Yi Xuan",
    },
  };

  const newObj = Object.assign(obj);
  newObj.name.firstName = "Hina";

  //slice, concat
  let arr = ["1", "2", "3"];
  const newArr = arr.slice(0);
  const newArr2 = [].concat(arr);
  //Array.from
  const newArr3 = Array.from(arr);
  //扩展运算符
  const newArr4 = [...arr];
  const newArr5 = { ...obj };
  console.log(newArr5);

  //手写浅拷贝
  function shallowCopyFn(object) {
    if (!object || typeof object !== "object") {
      return;
    }
    let newObj = Array.isArray(object) ? [] : {};

    for (let key in object) {
      if (object.hasOwnProperty(key)) {
        newObj[key] = object[key];
      }
    }

    return newObj;
  }

  console.log(shallowCopyFn(obj) === obj);
}

shallowCopy();
