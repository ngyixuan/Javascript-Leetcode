class EventBus {
  constructor() {
    this.events = {}; // 存储事件的回调函数
  }

  // 监听事件，绑定回调
  on(event, callback) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(callback);
  }

  // 一次性事件，触发一次后自动移除
  once(event, callback) {
    const onceCallback = (...args) => {
      callback.apply(this, args);
      this.off(event, onceCallback); // 执行完后移除
    };
    this.on(event, onceCallback);
  }

  // 移除事件回调
  off(event, callback) {
    if (!this.events[event]) return;

    this.events[event] = this.events[event].filter((cb) => cb !== callback);
  }

  // 触发事件，执行所有回调
  emit(event, ...args) {
    if (!this.events[event]) return;

    this.events[event].forEach((callback) => {
      callback.apply(this, args); // 执行回调函数
    });
  }
}
