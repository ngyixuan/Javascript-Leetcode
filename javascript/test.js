import EventEmitter from "events";
import AbortController from "abort-controller";

const MyEventEmitter = ({ fn, interval, signal }) => {
  const e = new EventEmitter();

  let counter = 0;

  const intervalId = setInterval(() => {
    if (!signal.aborted) {
      fn(counter);
      counter++;
    } else {
      clearInterval(intervalId);
      e.emit("aborted");
    }
  }, interval);

  return e;
};

const ac = new AbortController();

const e = MyEventEmitter({
  fn: (counter) => {
    console.log(counter);
  },
  interval: 1000, // Changed interval to 1000 milliseconds for a 1-second interval
  signal: ac.signal,
});

setTimeout(() => {
  console.log("Aborting after 4 seconds");
  ac.abort();
}, 4000);
