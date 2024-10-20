function mySleep(delay) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}
async function demoSleep() {
  console.log("Start waiting...");

  // 使用 mySleep 等待 2 秒 (2000 毫秒)
  await mySleep(2000);

  console.log("Finished waiting after 2 seconds.");
}

demoSleep();
