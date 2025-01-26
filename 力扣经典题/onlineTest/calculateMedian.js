let marks = ["aadfa", "aparb", "ddddc", "cojpd"];

let judges = 4;
let attendees = 5;
let attendeesMap = new Map();

for (let i = 0; i < judges; i++) {
  let marksArr = marks[i].split("");
  for (let j = 0; j < attendees; j++) {
    if (!attendeesMap.has(j)) {
      attendeesMap.set(j, [marksArr[j]]);
    } else {
      attendeesMap.set(j, [...attendeesMap.get(j), marksArr[j]]);
    }
  }
}

let sortedAlphabet = [];
for (let i = 0; i < attendees; i++) {
  let result = attendeesMap
    .get(i)
    .sort((a, b) => a.charCodeAt() - b.charCodeAt());
  result.splice(0, 2);
  let mid;
  if (result.length % 2 == 0) {
    mid = result.length / 2 - 1;
    let charCode1 = result[mid].charCodeAt();
    let charCode2 = result[mid + 1].charCodeAt();
    let medianCharCode = Math.round((charCode1 + charCode2) / 2);
    let median1 = String.fromCharCode(medianCharCode);
    sortedAlphabet.push({ index: i, alphabet: median1 });
  } else {
    mid = Math.floor(result.length / 2);
    let median2 = result[mid];
    sortedAlphabet.push({ index: i, alphabet: median2 });
  }
}

sortedAlphabet.sort(
  (a, b) => a.alphabet.charCodeAt() - b.alphabet.charCodeAt(),
);

let outputIndex = "";
for (let item of sortedAlphabet) {
  outputIndex += item.index;
}
let outputAlphabet = "";
for (let item of sortedAlphabet) {
  outputAlphabet += item.alphabet;
}

console.log(outputIndex);
console.log(outputAlphabet);
