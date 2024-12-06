let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("1"); // 输出 "1"
    resolve("success"); // 触发 p1 的 resolve
    console.log("2"); // 输出 "2"
  }, 1000);
});

let p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("3"); // 输出 "3"
    reject(new Error("error")); // 触发 p2 的 reject
    console.log("4"); // 输出 "4"
  }, 500);
  console.log("5"); // 同步代码，立即执行，输出 "5"
});

Promise.race([p1, p2])
  .then((result) => {
    console.log("6"); // 如果有 promise resolve，这里会执行
  })
  .catch((error) => {
    console.error(error.message); // 如果有 promise reject，这里会执行
  });
