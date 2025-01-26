const PENDING = "pending";
const FULFILLED = "fulfilled";
const REJECTED = "rejected";
class myPromise {
  constructor(executor) {
    this.status = PENDING;
    this.value = undefined;
    this.reson = undefined;
    this.onFullfilledCallbacks = [];
    this.onRejectedCallbacks = [];

    const resolve = (value) => {
      if (this.status == PENDING) {
        this.status = FULFILLED;
        this.value = value;
        this.onFullfilledCallbacks.forEach((callbacks) => callbacks());
      }
    };

    const reject = (reason) => {
      if (this.status == PENDING) {
        this.status = REJECTED;
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
    onRejected =
      onRejected ||
      ((reason) => {
        throw reason;
      });

    return new myPromise((resolve, reject) => {
      const resolveCallback = () => {
        setTimeout(() => {
          try {
            const result = onFulFilled(this.value);
            if (result instanceof myPromise) {
              result.then(resolve, reject);
            } else {
              resolve(result);
            }
          } catch (error) {
            reject(error);
          }
        }, 0);
      };
      const rejectCallback = () => {
        setTimeout(() => {
          try {
            const result = onRejected(this.reason);
            if (result instanceof myPromise) {
              result.then(resolve, reject);
            } else {
              resolve(result);
            }
          } catch (error) {
            reject(error);
          }
        }, 0);
      };
      if (this.status === FULFILLED) {
        resolveCallback();
      }
      if (this.status === REJECTED) {
        rejectCallback();
      }
      if (this.status === PENDING) {
        this.onFullfilledCallbacks.push(resolveCallback);
        this.onRejectedCallbacks.push(rejectCallback);
      }
    });
  }
}

const promise = new myPromise((resolve, reject) => {
  setTimeout(() => {
    resolve("Success");
  }, 1000);
});

promise
  .then(
    (value) => {
      console.log("Resolved", value);
      return value;
    },
    (reason) => {
      console.log("Rejected", reason);
      return reason;
    }
  )
  .then(
    (value) => {
      console.log("Resolved twice", value);
    },
    (reason) => {
      console.log("Rejected twice", reason);
    }
  );
