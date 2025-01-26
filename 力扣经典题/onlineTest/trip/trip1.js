function solve(n, m, k) {
  let totalSum = 0;
  for (let row = 1; row < n && k > 0; row++) {
    totalSum += row * m; // i*m + j
    k--;
  }

  for (let col = 1; col < m && k > 0; col++) {
    totalSum += (n - 1) * m + col;
    k--;
  }

  console.log(totalSum, k);

  let left = true;

  while (k > 0) {
    if (left) {
      for (let col = m - 2; col >= 0 && k > 0; col--) {
        totalSum += (n - 1) * m + col;
        k--;
      }
    } else {
      for (let col = 1; col < m; col++) {
        totalSum += (n - 1) * m + col;
        k--;
      }
    }

    left = !left;
  }
  return totalSum;
}
let [n, m, k] = [3, 2, 5];
console.log(solve(n, m, k));
