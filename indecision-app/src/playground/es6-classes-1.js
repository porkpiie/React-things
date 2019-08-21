class Person {
    constructor(name = "Anonymous", age = "0") {
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        return `Hi. I am ${this.name}!`;
    }
    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`;
    }
}

class Student extends Person {
    constructor(name, age, degree) {
        super(name, age);
        this.degree = degree;
    }
    hasDegree() {
        return !!this.degree;
    }
    getDescription() {
        let description = super.getDescription();

        if (this.hasDegree()) {
            description += ` Their degree is ${this.degree}.`;
        }

        return description;
    }
}
Traveller;

class Traveller extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }
    getGreeting() {
        let greeting = super.getGreeting();

        if (this.homeLocation) {
            greeting += ` I am visiting from ${this.homeLocation}.`;
        }

        return greeting;
    }
}

const human = new Traveller("Porkpiie Great", "27", "Bristol");
console.log(human.getGreeting());

const humanTwo = new Traveller(undefined, undefined, "Nowhere");
console.log(humanTwo.getGreeting());
