function test(num) {
  let len = num.length;

  let balanceNum = false;
  for (let i = 1; i < len; i++) {
    let left = num.slice(0, i);
    let right = num.slice(i);

    let leftTotal = [...left].reduce((acc, curr) => acc * Number(curr), 1);
    let rightTotal = Number(right);

    if (leftTotal === rightTotal) {
      balanceNum = true;
    }
  }
  if (balanceNum) console.log("YES");
  else console.log("NO");
}

let num = "1221";
