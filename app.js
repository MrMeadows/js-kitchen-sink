// A variable name. Value is open to change. //
let myName = "Sebastian";

// An unchangeable constant that has a value of the number of states at the time this code was written. North Montana, anyone? //
const numOfStates = 50;

// A math equation required for this program. Value is open to change //
let scriptedArithmetic = 5 + 4;

function sayHello() {
    alert("Hello, World!")
};

sayHello;

function checkAge(name, age) {
    if (age < 21) {
        alert("Sorry, " + name + ", you aren't old enough to view this page!")
    }
};

checkAge(Charles, 21);
checkAge(Abby, 27);
checkAge(James, 18);
checkAge(John, 17);

let vegArray = ["Carrots", "Potatoes", "Onions", "Taco Lettuce"];

for (let i = 0; i < vegArray.length; i++) {
    console.log(vegArray[i]);
}

let pet = {
    name: "Rusty",
    breed: "Chorkie"
}

console.log(pet);

let array = [
    {name: "Bob", age: 25},
    {name: "Josie", age: 24},
    {name: "Tyrone", age: 28},
    {name: "Rachel", age: 19},
    {name: "Vaughn", age: 17}
]

for(let i = 0; i < array.length; i++) {
    checkAge(array[i]);
}

function getLength(anyWord) {
    return anyWord.length;
}

let lengthResult = getLength("Hello World!");

if (lengthResult % 2 == 0) {
    console.log("The world is nice and even!");
} else {
    console.log("The world is an odd place!")
};
 