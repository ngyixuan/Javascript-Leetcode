function numberToChinese(num) {
  let units = ["", "十", "百", "千"];
  let bigUnits = ["", "万", "亿"];
  let chineseDigits = [
    "零",
    "一",
    "二",
    "三",
    "四",
    "五",
    "六",
    "七",
    "八",
    "九",
  ];

  if (num === 0) return chineseDigits[0];
  let result = [];
  let strNum = num.toString();
  let zeroFlag = false;
  for (let i = 0; i < strNum.length; i++) {
    let digit = parseInt(strNum[i]);
    let position = strNum.length - i - 1; // 当前数字的位置，从高位开始
    let unitPosition = position % 4; // 小单位（十、百、千）的索引
    let bigUnitPosition = Math.floor(position / 4); // 大单位（万、亿）的索引

    if (digit === 0) {
      zeroFlag = true;
    } else {
      if (zeroFlag) {
        result.push(chineseDigits[0]);
        zeroFlag = false;
      }
      // 添加当前数字及其单位
      result.push(chineseDigits[digit] + units[unitPosition]);
    }
    // 如果是大单位的位置（万、亿等），并且有非零数字
    if (unitPosition === 0 && bigUnitPosition > 0) {
      result.push(bigUnits[bigUnitPosition]);
      zeroFlag = false;
    }
  }

  let resultStr = result.join("");

  // 特殊处理：避免"一十"输出成"一十"，应直接输出"十"
  if (resultStr.startsWith("一十")) {
    resultStr = resultStr.slice(1);
  }
  console.log(resultStr);
}
let num = 100100;
numberToChinese(num);
