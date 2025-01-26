for (var i = 0; i < 3; i++) {
  (function (num) {
    setTimeout(function () {
      console.log(num);
    }, 3000);
  })(i);
}
