function loadImg(url) {
  return new Promise((resolve, reject) => {
    let img = new Image();
    img.src = url;
    img.onload = () => {
      resolve(img);
    };
    img.onerror = () => {
      reject("加载失败");
    };
  });
}
loadImg("url").then(
  (value) => {
    console.log("success");
  },
  (error) => {
    console.error("no image");
  }
);
