function Parent() {
  this.name = "parent1";
  this.num = [1, 2, 3];
  this.getName = function () {
    console.log(this.name);
  };
}
Parent.prototype.getNum = function () {
  console.log(this.num);
};

function Child() {
  Parent.call(this);
}

let child1 = new Child();
let child2 = new Child();

child1.name = "parent1 edited";
child1.num.push(4);
console.log(child1.name, "|", child2.name); //parent1 edited | parent1
console.log(child1.num, "|", child2.num); //[ 1, 2, 3, 4 ] | [ 1, 2, 3 ]
child1.getName(); // parent1 edited
child1.getNum(); //child1.getNum is not a function
