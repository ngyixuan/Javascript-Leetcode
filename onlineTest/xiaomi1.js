function test(s, t, p) {
  let iterations = 0;
  let infinite = false;
  while (s.includes(t)) {
    iterations++;
    if (iterations > 1000) {
      infinite = true;
      break;
    }
    s = s.replace(t, "");
    s += p;
  }
  console.log(infinite ? -1 : s);
}

let s = "abcaba";
let t = "ab";
let p = "b";
test(s, t, p);
