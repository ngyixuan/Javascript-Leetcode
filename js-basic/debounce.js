function debounce(fn, delay) {
  let timer = null;
  return function () {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, arguments), delay);
  };
}

function test() {
  console.log("debounce");
}

const debounceTest = debounce(test, 3000);
setInterval(() => debounceTest(), 100);
