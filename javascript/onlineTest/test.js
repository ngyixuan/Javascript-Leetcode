function filterDuplicate(arr) {
  //   let newMap = {};
  let newSet = new Set();
  for (let item of arr) {
    newSet.add(item);
    // newMap[item] = (newMap[item] || 0) + 1;
  }
  //   console.log(newMap);
  console.log(newSet.keys());
  // console.log(Object.keys(newMap).map(Number));
}

let arr = ["2", 2, 4, 5, "6", "6", 6];
filterDuplicate(arr);
