// arguments object - no longer bound with arrow functions

const add = (a, b) => {
    return a + b;
};
console.log(add(55, 1, 1001));

// 'this' keyword - no longer bound

const user = {
    name: "Porkpiie",
    cities: ["Bristol", "Lincoln", "Paris"],
    printPlacesLived() {
        return this.cities.map(city => this.name + " has lived in " + city);
    }
};
console.log(user.printPlacesLived());

const multiplier = {
    numbers: [10, 20, 30],
    multiplyBy: 3,
    multiply() {
        return this.numbers.map(result => result * this.multiplyBy);
    }
};

console.log(multiplier.multiply());
