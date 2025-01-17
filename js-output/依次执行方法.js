// 有三个异步方法，A，B，C，尝试编码实现下面描述的执行顺序：
// 1.依次执行 ABC 方法
// 2.先同时执行完 AB 方法后，再执行 C 方法
// 3.先同时执行 AB方法，A 或 B 方法执行完成后执行 C方法

function promise1(fnA, fnB, fnC) {
  return fnA()
    .then(() => fnB())
    .then(() => fnC());
}

// 示例调用
// promise1(A, B, C);

function promise2(fnA, fnB, fnC) {
  return Promise.all([fnA(), fnB()]).then(() => fnC()); // 确保返回 Promise
}

// promise2(A, B, C);

function promise3(fnA, fnB, fnC) {
  // 3.先同时执行 AB方法，A 或 B 方法执行完成后执行 C方法
  return Promise.race([fnA(), fnB()]).then(() => fnC());
}

// promise3(A, B, C);

function A() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("print A");
      resolve();
    }, 300);
  });
}
function B() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("print B");
      resolve();
    }, 500);
  });
}
function C() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("print C");
      resolve();
    }, 100);
  });
}

console.log("Test promise1:");
promise1(A, B, C).then(() => {
  console.log("Test promise2:");
  promise2(A, B, C).then(() => {
    console.log("Test promise3:");
    promise3(A, B, C);
  });
});
