function red() {
  console.log("red");
}
function yellow() {
  console.log("yellow");
}
function green() {
  console.log("green");
}

//callback 实现
function callbackstep(timer, color, callback) {
  setTimeout(() => {
    if (color == "red") {
      red();
    } else if (color == "green") {
      green();
    } else if (color == "yellow") {
      yellow();
    }
    callback();
  }, timer);
}
const callbackTask = () => {
  callbackstep(3000, "red", () => {
    callbackstep(2000, "green", () => {
      callbackstep(1000, "yellow", callbackTask);
    });
  });
};

// callbackTask();

//promise 实现

const promiseStep = (timer, color) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (color == "red") {
        red();
      } else if (color == "green") {
        green();
      } else if (color == "yellow") {
        yellow();
      }
      resolve();
    }, timer);
  });

const promiseTask = () => {
  promiseStep(3000, "red")
    .then(() => promiseStep(2000, "green"))
    .then(() => promiseStep(1000, "yellow"))
    .then(promiseTask);
};

promiseTask();
