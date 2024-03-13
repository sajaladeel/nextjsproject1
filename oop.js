"use strict";
class Dad {
    constructor(name, age) {
        this.age = age;
        this.name = name;
    }
    speak() {
        console.log("im speaking");
    }
    eat() {
        console.log("im eating");
    }
}
const dad = new Dad("adeeel", 43);
dad.speak();
console.log(dad.eat);
