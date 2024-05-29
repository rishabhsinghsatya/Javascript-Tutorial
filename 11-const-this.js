//The constructor is a special method in a class for creating and initializing an object instance of that class. When a new object is created using the new keyword, the constructor method is automatically called to set up the initial state of the object.

class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
}

const myCar = new Car("Toyota", "Corolla", 2020);
console.log(myCar); // Outputs: Car { make: 'Toyota', model: 'Corolla', year: 2020 }

// The this keyword refers to the current instance of the class. It is used to access properties and methods of the current object from within the class.

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  }
}

const person1 = new Person("Alice", 30);
person1.greet(); // Outputs: Hello, my name is Alice and I am 30 years old.
