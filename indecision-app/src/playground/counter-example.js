let count = 0;
const addOne = () => {
    count++;
    renderCounterApp();
};
const minusOne = () => {
    count--;
    renderCounterApp();
};
const reset = () => {
    count = 0;
    renderCounterApp();
};

const renderCounterApp = () => {
    const templateThree = (
        <div>
            <h1>Count : {count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
    ReactDOM.render(templateThree, appRoot);
};

renderCounterApp();

// const user = {
//     name: "Porkpiie",
//     age: 27,
//     location: "UK"
// };
// function getLocation(location) {
//     if (location) {
//         return <p>Location: {location}</p>;
//     }
// }

// const templateTwo = (
//     <div>
//         <h1>{user.name ? user.name : "Anonymous"}</h1>
//         {user.age && user.age >= 18 && <p>Age : {user.age}</p>}
//         {getLocation(user.location)}
//     </div>
// );
