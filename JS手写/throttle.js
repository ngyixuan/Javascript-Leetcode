function timeStampThrottle(delay, fn) {
  let oldTime = 0;
  return function () {
    let newTime = Date.now();
    if (newTime - oldTime >= delay) {
      oldTime = newTime;
      return fn.apply(this, arguments);
    }
  };
}

function test() {
  console.log("running");
}
// const throttleTest = timeStampThrottle(3000, test);
// setInterval(() => throttleTest(), 100);

function timingThrottle(fn, delay) {
  let oldTimer = null;
  return function () {
    if (!oldTimer) {
      oldTimer = setTimeout(() => {
        fn.apply(this, arguments);
        oldTimer = null;
      }, delay);
    }
  };
}

const throttleTest = timingThrottle(test, 3000);
setInterval(() => throttleTest(), 0);
