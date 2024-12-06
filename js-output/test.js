var fxObj = {
  age: 18,
  nature: ["smart", "good"],
  names: {
    name1: "fx name1",
    name2: "fx name2",
  },
  love: function () {
    console.log("fx is a great girl");
  },
};
var newObj = Object.assign({}, fxObj);
newObj.age = 100;
newObj.names.name2 = "newobj name2";
console.log(fxObj);
