async function printNumbers() {
  for (let i = 1; i <= 10; i++) {
    await new Promise((resolve) => {
      setTimeout(() => {
        console.log(i);
        resolve();
      }, 100); // 每次延迟 100 毫秒
    });
  }
}

for (let i = 0; i < 10; i++) {
  setTimeout(() => {
    console.log(i);
  }, 100);
}
