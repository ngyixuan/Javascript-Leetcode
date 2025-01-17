// async function async1() {
//   console.log("async1 start");
//   await async2();
//   console.log("async1 end");
// }
// async function async2() {
//   console.log("async2");
// }
// console.log("script start");
// setTimeout(function () {
//   console.log("settimeout");
// });
// async1();
// new Promise(function (resolve) {
//   console.log("promise1");
//   resolve();
// }).then(function () {
//   console.log("promise2");
// });
// console.log("script end");

// console.log(1);
// setTimeout(() => {
//   console.log(2);
//   process.nextTick(() => {
//     console.log(3);
//   });
//   new Promise((resolve) => {
//     console.log(4);
//     resolve();
//   }).then(() => {
//     console.log(5);
//   });
// });
// new Promise((resolve) => {
//   console.log(7);
//   resolve();
// }).then(() => {
//   console.log(8);
// });
// process.nextTick(() => {
//   console.log(6);
// });
// setTimeout(() => {
//   console.log(9);
//   process.nextTick(() => {
//     console.log(10);
//   });
//   new Promise((resolve) => {
//     console.log(11);
//     resolve();
//   }).then(() => {
//     console.log(12);
//   });
// });

console.log(1);

setTimeout(() => {
  console.log(2);
});

new Promise((resolve) => {
  console.log(4);
  resolve(5);

  Promise.resolve().then(() => {
    console.log(6);
  });
}).then((data) => {
  console.log(data);
});

setTimeout(() => {
  console.log(7);
});

console.log(8);
