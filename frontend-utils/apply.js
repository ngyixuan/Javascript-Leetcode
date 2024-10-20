Function.prototype.myapply = function (context) {
  if (typeof this != "function") {
    throw Error("type error");
  }
  let result = null;
  let args = arguments[1];
  context = context || window;

  context.fn = this;
  if (args) {
    result = context.fn(...args);
  } else {
    result = context.fn();
  }
  delete context.fn;
  return result;
};

function introduce(age, hobby) {
  console.log(
    `Hi, my name is ${this.name}, my age is ${age}, my hobby is ${hobby}`
  );
}

const person = {
  name: "yixuan",
};

introduce.myapply(person, [24, "gym"]);
