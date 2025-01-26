function countdown(totalTime) {
  var res = totalTime;
  const interval = setInterval(() => {
    console.log(res);
    res--;
    if (res < 0) {
      clearInterval(interval);
      console.log("countdown finished");
    }
  }, 1000);
}

countdown(5);
