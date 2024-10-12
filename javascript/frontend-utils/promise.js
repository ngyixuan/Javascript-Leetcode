class myPromise {
  constructor(executor) {
    this.status = "pending";
    this.value = undefined;
    this.reson = undefined;
    this.onFullfilledCallbacks = [];
    this.onRejectedCallbacks = [];

    const resolve = (value) => {
      if (this.status == "pending") {
        this.status = "fulfilled";
        this.value = value;
        this.onFullfilledCallbacks.forEach((callbacks) => callbacks());
      }
    };

    const reject = (reason) => {
      if (this.status == "pending") {
        this.status = "rejected";
        this.reason = reason;
        this.onRejectedCallbacks.forEach((callbacks) => callbacks());
      }
    };

    try {
      executor(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }

  then(onFulFilled, onRejected) {
    if (this.status === "fulfilled") {
      onFulFilled(this.value);
    }
    if (this.status === "rejected") {
      onRejected(this.reason);
    }
    if (this.status === "pending") {
      this.onFullfilledCallbacks.push(() => onFulFilled(this.value));
      this.onRejectedCallbacks.push(() => onRejected(this.reason));
    }
  }
}

const promise = new myPromise((resolve, reject) => {
  setTimeout(() => {
    resolve("Success");
  }, 1000);
});

promise.then(
  (value) => {
    console.log("Resolved", value);
  },
  (reason) => {
    console.log("Rejected", reason);
  },
);
