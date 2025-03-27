function findNextPalindrome(hh, mm) {
  let minutePass = 0;
  while (true) {
    let hhStr = hh.toString().padStart(2, 0);
    let mmStr = mm.toString().padStart(2, 0);
    let timeStr = hhStr + mmStr;

    if (minutePass === 0 && isPalindrome(timeStr)) {
      console.log(0);
      return;
    }
    minutePass++;
    mm++;
    if (mm == 60) {
      mm = 0;
      hh = (hh + 1) % 24;
    }

    hhStr = hh.toString().padStart(2, 0);
    mmStr = mm.toString().padStart(2, 0);
    timeStr = hhStr + mmStr;
    if (isPalindrome(timeStr)) {
      console.log(minutePass);
      return;
    }
  }

  function isPalindrome(time) {
    return time === time.split('').reverse().join('');
  }
}
let t = '12:21';
// let t = '12:21';
// let t = '12:21';
let time = t.split(':').map(Number);
let hour = parseInt(time[0]);
let minute = parseInt(time[1]);
findNextPalindrome(hour, minute);
