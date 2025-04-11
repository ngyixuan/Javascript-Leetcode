/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function (people) {
  let queue = [];
  people.sort((a, b) => {
    if (b[0] !== a[0]) {
      return b[0] - a[0];
    } else {
      return a[1] - b[1];
    }
  });
  for (let i = 0; i < people.length; i++) {
    queue.splice(people[i][1], 0, people[i]);
  }

  return queue;
};

people = [
  [6, 0],
  [5, 0],
  [4, 0],
  [3, 2],
  [2, 2],
  [1, 4],
];
console.log(reconstructQueue(people));
