// let obj = {
//     from: 2,
//     to: '',
//   };

//   obj[Symbol.iterator] = function () {
//     if (typeof this.from !== "number" || typeof this.to !== "number") {
//       throw new Error("Error: 'from' or 'to' is not a number");
//     } else if (this.from >= this.to) {
//       throw new Error("Error: 'from' must be less than 'to'");
//     } else {
//       return {
//         current: this.from,
//         last: this.to,
//         next() {
//           if (this.current <= this.last) {
//             return { done: false, value: this.current++ };
//           } else {
//             return { done: true };
//           }
//         },
//       };
//     }
//   };

//   for (let key of obj) {
//     console.log(key);
//   }

function getPersons(name, age) {
  // Использование классов
  class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  }
  const john25 = new Person("John", 25);

  // Использование функции-конструктора.
  function Person2(name, age) {
    this.name = name;
    this.age = age;
  }
  const person = new Person2("John", 25);
  // Просто задать свойства
  const personObj = {};
  personObj.name = "John";
  personObj.age = 25;

  return [
    { name, age },
    Object.assign({}, { name, age }),
    new Object({ name, age }),
    Object.create({ name, age }),
    john25,
    person,
    personObj,
  ];
}

console.log(getPersons("John", 25));
