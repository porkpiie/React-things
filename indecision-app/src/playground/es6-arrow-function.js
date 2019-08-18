// //es5

// function square(x) {
//     return x * x;
// }

// console.log(square(3));

// // const squareArrow = (x) => {
// //     return x * x;
// // };

// //expression syntax can't be used in every situation, waiting on promises etc..
// const squareArrow = x => x * x;

// console.log(squareArrow(4));

// const getFirstName = fullName => {
//     return fullName.split(" ")[0];
// };

const getFirstName = fullName => fullName.split(" ")[0];
console.log(getFirstName("Porkpiie The Great"));
