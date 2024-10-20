Function.prototype.myCall = function (context) {
  if (typeof this !== "function") {
    throw Error("type error");
  }
  let args = [...arguments].slice(1);
  let result = null;
  context = context || window;
  context.fn = this;
  result = context.fn(...args);
  delete context.fn;
  return result;
};

function introduce() {
  console.log(`Hi, my name is ${this.name}`);
}

const person = {
  name: "yixuan",
};

introduce.myCall(person);
