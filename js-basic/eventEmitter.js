/* 
题目描述:实现一个发布订阅模式拥有on emit once off方法
*/

class EventEmitter {
  constructor() {
    // 事件调度中心
    this.cache = {};
  }

  // 订阅事件
  on(name, fn) {
    const tasks = this.cache[name];
    if (tasks) {
      this.cache[name].push(fn);
    } else {
      this.cache[name] = [fn];
    }
  }

  // 触发事件
  emit(name, ...args) {
    // 复制一份回调队列，防止回调里继续on导致死循环
    const tasks = this.cache[name].slice();
    if (tasks) {
      for (let fn of tasks) {
        fn(...args);
      }
    }
  }

  // 解除事件订阅
  off(name, fn) {
    const tasks = this.cache[name];
    if (tasks) {
      const index = tasks.findIndex((item) => item === fn);
      if (index >= 0) {
        // splice修改原数组，slice不修改原数组
        this.cache[name].splice(index, 1);
      }
    }
  }

  // 单次事件
  once(name, fn) {
    // 这里要保存以下this,或者使用箭头函数
    let that = this;
    function cb(...args) {
      fn(...args);
      that.off(name, cb);
    }
    this.on(name, cb);
  }
}
