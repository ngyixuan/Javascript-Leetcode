var o = {
  a: 10,
  b: {
    fn: function () {
      console.log(this.a); //undefined
    },
  },
};
o.b.fn();
