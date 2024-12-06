function superThrottle(fn, delay) {
  let oldTime = 0;
  let timer = null;
  return function () {
    let newTime = Date.now();
    if (newTime - oldTime < delay) {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        oldTime = newTime;
        fn.apply(this, arguments);
      }, delay);
    } else {
      oldTime = newTime;
      fn.apply(this, arguments);
    }
  };
}

// 测试函数：打印当前时间戳
function printMessage(message) {
  console.log(`${message} at ${Date.now()}`);
}

// 创建一个节流函数
const throttledPrint = superThrottle(printMessage, 2000);

// 模拟测试
let intervalId = setInterval(() => {
  throttledPrint("Triggered");
}, 500);

// 停止触发 5 秒后停止
setTimeout(() => {
  clearInterval(intervalId);
  console.log(`Stopped triggering at ${Date.now()}`);
}, 5000);
