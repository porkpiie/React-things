var nameVar = "Porkpiie";
var nameVar = "Memes";
console.log("nameVar", nameVar);

let nameLet = "Mark";
nameLet = "Jacko";
console.log("nameLet", nameLet);

const nameConst = "Frank";
console.log("nameConst", nameConst);

// Block scoping
function getPetName() {
    const petName = "Blue";
    return petName;
}

const petName = getPetName();
console.log(petName);

const fullName = "Porkpiie Great";
let firstName;

if (fullName) {
    const firstName = fullName.split(" ")[0];
    console.log(firstName);
}

console.log(firstName);
