function myInstance(left, right) {
  if (left == null || typeof left != "object") return false;
  let proto = Object.getPrototypeOf(left);
  while (true) {
    if (proto == null) return false;
    if (proto === right.prototype) return true;
    proto = Object.getPrototypeOf(proto);
  }
}

function Parent() {
  this.name = "parent name";
}
let child = new Parent();
console.log(myInstance(child, Parent));
