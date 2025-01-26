const obj = {
  count: 0,
  method: function () {
    const inner = () => {
      console.log(this.count++);
    };
    inner();
  },
};

obj.method(); // 输出：0
