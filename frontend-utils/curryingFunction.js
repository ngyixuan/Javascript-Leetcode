// 假设我们有一个求长方形面积的函数
function getArea(width, height) {
  return width * height;
}
// 如果我们碰到的长方形的宽老是10
const area1 = getArea(10, 20);
const area2 = getArea(10, 30);
const area3 = getArea(10, 40);

// 我们可以使用闭包柯里化这个计算面积的函数
function getArea(width) {
  return (height) => {
    return width * height;
  };
}

const getTenWidthArea = getArea(10);
// 之后碰到宽度为10的长方形就可以这样计算面积
const area4 = getTenWidthArea(20);
console.log(area4);

// 而且如果遇到宽度偶尔变化也可以轻松复用
const getTwentyWidthArea = getArea(20);
