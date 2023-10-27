function foo() {
  setTimeout(() => {
    console.log("Too much"), 0;
  });
  return foo();
}

function infinity() {
  setTimeout(() => {
    console.log("Бесконечное выполнение кода");
    infinity();
  }, 0);
}

infinity();

//______Задание с классами_____//

class Calculator {
  constructor(num1, num2) {
    if (
      typeof num1 !== "number" ||
      typeof num2 !== "number" ||
      isNaN(num1) ||
      isNaN(num2) ||
      !isFinite(num1) ||
      !isFinite(num2)
    ) {
      throw new Error("Invalid input. Both x and y must be valid numbers.");
    }
    this.num1 = num1;
    this.num2 = num2;
  }
  setX(x) {
    if (typeof x !== "number" || isNaN(x) || !isFinite(x)) {
      throw new Error("Invalid input. x must be a valid number.");
    }
    this.num1 = x;
  }
  setY(y) {
    if (typeof y !== "number" || isNaN(y) || !isFinite(y)) {
      throw new Error("Invalid input. y must be a valid number.");
    }
    this.num2 = y;
  }
  logSum = () => {
    return this.num1 + this.num2;
  };
  logMul = () => {
    return this.num1 * this.num2;
  };
  logSub = () => {
    return this.num1 - this.num2;
  };
  logDiv = () => {
    if (this.num2 === 0) {
      throw new Error("Division by zero is not allowed.");
    }
    return this.num1 / this.num2;
  };
}

let calculator = new Calculator(2, 4);

const logSumRef = calculator.logSum;
const logMulRef = calculator.logMul;
const logSubRef = calculator.logSub;
const logDivRef = calculator.logDiv;
console.log(logDivRef());
