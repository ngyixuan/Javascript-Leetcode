function promiseRetry(fn, delay = 300, retryCount = 3) {
  return new Promise((resolve, reject) => {
    const attempt = (count) => {
      fn()
        .then(resolve)
        .catch((error) => {
          console.log(`Attempt ${retryCount - count + 1} failed: ${error}`); // 输出每次失败的原因
          if (count == 0) {
            reject(error); // 如果达到最大重试次数，最终 reject
          } else {
            setTimeout(() => attempt(count - 1), delay); // 延迟后递归重试
          }
        });
    };

    attempt(retryCount);
  });
}

let testCounter = 0;
function testPromise() {
  return new Promise((resolve, reject) => {
    testCounter++;
    if (testCounter < 3) {
      reject(`response ${testCounter}`);
    } else {
      resolve(`response ${testCounter}`);
    }
  });
}

promiseRetry(testPromise)
  .then((result) => console.log("Final success:", result))
  .catch((error) => console.error("Final error:", error));
