function gameWinner(a, b) {
  // Ensure a is always greater than or equal to b
  if (a < b) {
    [a, b] = [b, a];
  }
  // Calculate the difference
  let diff = a - b;
  // If the difference is even, the first player wins; otherwise, the second player wins.
  return diff % 2 === 0 ? "you" : "xiaoming";
}

// Read input and process each test case
function processInput(input) {
  const lines = input.trim().split("\n");
  const t = parseInt(lines[0], 10); // Number of test cases
  const results = [];

  for (let i = 1; i <= t; i++) {
    const [a, b] = lines[i].trim().split(" ").map(Number);
    results.push(gameWinner(a, b));
  }

  // Print the results
  results.forEach((result) => console.log(result));
}

// Example usage:
const input = `3
3 3
3 2
3 1`;
processInput(input);
