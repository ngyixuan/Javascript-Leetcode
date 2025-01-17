function isElement50PercentVisible(element) {
  return new Promise((resolve) => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // 判断是否超过 50% 可见
        if (entry.intersectionRatio >= 0.5) {
          resolve(true);
        } else {
          resolve(false);
        }
        // 停止观察
        observer.disconnect();
      },
      {
        threshold: [0.5], // 设置可见比例阈值为 50%
      }
    );

    observer.observe(element);
  });
}

// 示例用法
const element = document.querySelector("#myElement");
isElement50PercentVisible(element).then((isVisible) => {
  console.log(`Is the element 50% visible? ${isVisible}`);
});
