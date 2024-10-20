function create(obj) {
  //1.创建构造函数
  //2.让构造函数的原型指向obj
  //3.返回构造函数的实例
  function F() {}
  F.prototype = obj;
  return new F();
}
