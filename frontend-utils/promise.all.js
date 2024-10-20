function promiseAll(promises) {
  return new Promise(function (resolve, reject) {
    if (!Array.isArray(promises)) {
      throw new Error("Argument is not array");
    }
    var resolveCount = 0;
    var resolveArray = [];

    for (let i = 0; i < promises.length; i++) {
      Promise.resolve(promises[i]).then(
        (value) => {
          resolveCount++;
          resolveArray[i] = value;
          if (resolveCount === promises.length) {
            return resolve(resolveArray);
          }
        },
        (error) => {
          return reject(error);
        }
      );
    }
  });
}

let p1 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve("Sucess p1");
  }, 0);
});

let p2 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve("Sucess p2");
  }, 0);
});

let p3 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve("Sucess p3");
  }, 0);
});

promiseAll([p1, p2, p3]).then((value) => {
  console.log(value);
});
