function test(x) {
  for (let a = 1; a <= 20; a++) {
    for (let b = 1; b <= 20; b++) {
      for (let c = 1; c <= 20; c++) {
        for (let d = 1; d <= 20; d++) {
          if (a == b || a == c || a == d || b == c || b == d || c == d)
            continue;
          if (a * d - b * c === x) {
            return `${a} ${b}\n${c} ${d}`;
          }
        }
      }
    }
  }
}
let x = 2;
console.log(test(x));
