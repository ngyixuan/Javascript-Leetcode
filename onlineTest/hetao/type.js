const a = {
  count: 1,
  [Symbol.toPrimitive]: function () {
    return this.count++;
  },
};

console.log(a == 1 && a == 2 && a == 3); //true

const b = {
  count: 1,
  toString: function () {
    return this.count++;
  },
};

console.log(b == 1 && b == 2 && b == 3); //true

const c = {
  count: 1,
  toString: function () {
    return this.count++;
  },
};

console.log(c == 1 && c == 2 && c == 3); //true
