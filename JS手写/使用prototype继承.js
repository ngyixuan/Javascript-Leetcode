function parent() {
  this.name = "Yixuan";
}

function children() {
  this.name = "Hina";
}

let p = new parent();
chidlren.prototype = p;
let c = new children();
console.log(p.name);
console.log(c.name);
