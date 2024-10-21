class EventCenter {
  constructor() {
    this.handlers = {};
  }
  addEventListener(type, event) {
    if (!this.handlers[type]) {
      this.handlers[type] = [];
    }
    this.handlers[type].push(event);
  }
  dispatchEvent(type, params) {
    if (!this.handlers[type]) {
      throw Error("No such event type");
    }
    this.handlers[type].forEach((event) => {
      event(params);
    });
  }
  removeEventListener(type, event) {
    if (!this.handlers[type]) {
      throw Error("No such event type");
    }
    if (!event) {
      delete this.handlers[type];
    } else {
      let eventIndex = this.handlers[type].findIndex((e) => e === event);
      if (eventIndex === -1) {
        throw Error("No such event");
      } else {
        this.handlers[type].splice(eventIndex, 1);
        if (this.handlers[type].length === 0) {
          delete this.handlers[type];
        }
      }
    }
  }
}

const eventCenter = new EventCenter();

function greet1({ first }) {
  console.log(`Hi, my first name is ${first}`);
}

function greet2({ last }) {
  console.log(`Hi, my last name is ${last}`);
}

eventCenter.addEventListener("greet", greet1);
eventCenter.addEventListener("greet", greet2);

// eventCenter.removeEventListener("greet", greet1);
eventCenter.dispatchEvent("greet", { first: "ng", last: "yixuan" });
