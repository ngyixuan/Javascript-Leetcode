function changeStackSequence(n, arr) {
  let stack = [];
  let errIndex = 0;
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    if (num > 0) {
      stack.push(num);
    } else {
      let absNum = Math.abs(num);
      if (stack.length == 0 || stack[stack.length - 1] != absNum) {
        errIndex = i + 1;
        break;
      } else {
        stack.pop();
      }
    }
  }
  if (errIndex !== 0) {
    console.log(`${errIndex} ${errIndex + 1}`);
  } else {
    console.log('0 0');
  }
}

let n = 20;
let str = '-11 14 16 13 -13 -16 1 -1 6 10 7 -7 -10 5 3 -3 -5 -6 -11 -14';
let arr = str.split(' ').map(Number);
changeStackSequence(n, arr);
