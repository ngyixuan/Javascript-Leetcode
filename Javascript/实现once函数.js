function once(func) {
  let called = false;
  let result;
  return function (...args) {
    if (!called) {
      called = true;
      result = func.apply(this, args);
    }
    return result;
  };
}
const sayHello = () => {
  once(() => console.log("Hello"));
};

sayHello();
sayHello();
