function throttle(fn, limit = 500) {
  let oldTime = Date.now();
  return function (...args) {
    let currTime = Date.now();
    if (currTime - oldTime > limit) {
      fn.apply(this, args);
      prevTime = currTime;
    }
  };
}
