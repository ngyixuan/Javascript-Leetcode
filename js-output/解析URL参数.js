//解析链接中的参数，例如 https://qq.com?a=1&b=2，解析出 { a: 1, b: 2 }。

function parseParams(str) {
  let obj = {};
  let parameters = str.split("?")[1];
  let parametersArr = parameters.split("&");
  for (let item of parametersArr) {
    let pairs = item.split("=");
    obj[pairs[0]] = parseInt(pairs[1]);
  }

  return obj;
}
let str = "https://qq.com?a=1&b=2";
console.log(parseParams(str));
