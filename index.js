let obj = {
    from: 2,
    to: '',
  };
  
  obj[Symbol.iterator] = function () {
    if (typeof this.from !== "number" || typeof this.to !== "number") {
      throw new Error("Error: 'from' or 'to' is not a number");
    } else if (this.from >= this.to) {
      throw new Error("Error: 'from' must be less than 'to'");
    } else {
      return {
        current: this.from,
        last: this.to,
        next() {
          if (this.current <= this.last) {
            return { done: false, value: this.current++ };
          } else {
            return { done: true };
          }
        },
      };
    }
  };
  
  for (let key of obj) {
    console.log(key);
  }
  