function test(str) {
  //   if (!graph.includes("J")) {
  //     console.log("Too many fish");
  //     return;
  //   }

  //   let newGraph = graph
  //     .split("J")
  //     .filter((i) => i.length !== 0 && i.includes("F"));
  //   let fishGraph = graph
  //     .split("W")
  //     .filter((i) => i.length !== 0 && i.includes("F"));
  //   console.log(fishGraph.length);

  if (!str.includes("J")) {
    console.log("Too many fish!");
    return;
  }
  const n = str.length;
  const hooks = [];
  const fishes = [];
  for (let i = 0; i < n; i++) {
    if (str[i] === "J") {
      hooks.push(i);
    } else if (str[i] === "F") {
      fishes.push(i);
    }
  }
  if (fishes.length > hooks.length) {
    console.log("Too many fish!");
    return;
  }

  const fishingRange = [];
  for (let i = 0; i < hooks.length; i++) {
    const hooksPos = hooks[i];
    const leftBound = i > 0 ? hooks[i - 1] : -1;
    const rightBound = i < hooks.length - 1 ? hooks[i + 1] : n;
    const reacheablefish = [];
    for (let j = 0; j < fishes.length; j++) {
      const fishPos = fishes[j];
      if (fishPos > leftBound && fishPos < rightBound) {
        reacheablefish.push(j);
      }
    }
    fishingRange.push(reacheablefish);
  }

  const totalState = 1 << fishes.length;
  const dp = new Array(totalState).fill(Infinity);
  dp[0] = 0;
  for (let state = 0; state < totalState; state++) {
    if (dp[state] === Infinity) continue;
    const available = new Array(hooks.length).fill(null).map((_, hookIndex) => {
      return fishingRange[hookIndex].filter(
        (fishIndex) => !(state & (1 << fishIndex))
      );
    });

    const combinations = [];
    for (let i = 0; i < hooks.length; i++) {
      if (available[i].length > 0) {
        combinations.push([i, available[i]]);
      }
    }

    for (let i = 0; i < combinations.length; i++) {
      const [hookIndex, possibleFish] = combinations[i];
      for (const fishIndex of possibleFish) {
        const newState = state | (1 << fishIndex);
        dp[newState] = Math.min(sp[newState], dp[state] + 1);
      }
    }
  }

  const finalState = (1 << fishes.length) - 1;
  return dp[finalState] === Infinity ? "Too many fish!" : dp[finalState];
}

let graph = "FFWJWFFFJWF";
console.log(test(graph));
