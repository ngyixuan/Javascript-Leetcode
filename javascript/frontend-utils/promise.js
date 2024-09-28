class myPromise {
  constructor(executor) {
    this.status = "pending";
    this.value = undefined;
    this.reson = undefined;
    this.onFullfilledCallbacks = [];
    this.onRejectedCallbacks = [];

    const resolve = (value) => {
      if (this.state == "pending") {
        this.state = "fulfilled";
        this.value = value;
        this.onFullfilledCallbacks.forEach((callbacks) => callbacks(value));
      }
    };

    const reject = (reason) => {
      if (this.state == "pending") {
        this.state = "rejected";
        this.reason = reason;
        this.onRejectedCallbacks.forEach((callbacks) => callbacks(reason));
      }
    };

    try {
      executor(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }

  then(onFulFilled, onRejected) {
    onFulFilled =
      typeof onFulFilled == "function" ? onFulFilled : (value) => value;
    onRejected =
      typeof onRejected == "function" ? onFulFilled : (reason) => value;
  }
}
