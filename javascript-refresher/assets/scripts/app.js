// import {apiKey} from "./util.js";

// import apiKey from "./util.js";

// import {apiKey, abc} from "./util.js";

// import * as util from "./util.js";

// import {apiKey, abc as content} from "./util.js";
//
// console.log (content);

// let userMessage = "Halo boss";

// console.log(10+5);
// console.log("hello" + " world");
// console.log(10 === 5);
// console.log(10 > 10);
// console.log(10 < 10);
// console.log(10 <= 10);
// console.log(10 >= 10);
// if (10 === 10)
//     console.log("work");

/*function greet() {
    console.log("Hello World")
}

greet();
greet();
greet();
greet();
greet();*/

/*function greet(userName, message) {
    console.log(userName);
    console.log(message);
}

greet();*/


/*function greetUser(userName, message) {
    console.log(userName);
    console.log(message);
}

greetUser("Max", "hello");
greetUser("Manuel", "Hallo what's up?")*/

/*function greetUser(userName, Message = "Hello boss") {
    console.log(userName);
    console.log(Message);
}

greetUser("Max");
greetUser("Manuel", "Hallo what's up?");*/

/*function greetUser(userName, message = "Hello!") {
    return "Hi, saya " + userName + ". " + message;
}

greetUser("Max");
greetUser("Manuel", "Hallo, what's up?");*/

/*function createGreeting (userName, message = "Hello") {
    return "Hi, saya " + userName + ". " + message;
}

console.log(createGreeting("Max"));
createGreeting("Manuel", "Hallo what's up?");*/

/*function createGreeting (userName, message = "Hello") {
    return "Hi, saya " + userName + ". " + message;
}

const greeting1 = createGreeting("Max");
console.log(greeting1);

const greeting2 = createGreeting ("Manuel", "Hallo what's up?");
console.log(greeting2);*/

// () => {

/*export default (userName, message) => {
    console.log('Hello');
    return userName + message;
}*/

// const userName = "Max";
// const userAge = 34;

/*const user = {
    name: "Max",
    age: 34,
};

console.log(user);*/


/*const user = {
    name: "Max",
    age: 34,
    greet() {
        console.log("Hello!");
        console.log(this.age);
    }
};

console.log(user.name);
user.greet();*/


/*const user = {
    name: "Max",
    age: 34,
    greet() {
        console.log("Hello!");
        console.log(this.age);
    }
};

console.log(user.name);
user.greet();


class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    } 
    
    greet() {
        console.log("Hi!");
    }
}

const user1 = new User("Manuel", 35);
console.log(user1);
user1.greet();*/

/*const hobbies = ["Sports", "Cooking", "Reading"];
console.log(hobbies[0]);

hobbies.push("Working");
console.log(hobbies);

/!*const index = hobbies.findIndex((item)=>{
    return item === "Sports";
});

console.log(index);*!/

const index = hobbies.findIndex((item) => item === "Sports");

console.log(index);*/

/*
const editHobbies = hobbies.map((item) => item + "!");

console.log(editHobbies);
*/

/*const editHobbies = hobbies.map((item) => ({text: item}));

console.log(editHobbies);


function transformToObjects(numberArray) {
    // Todo: Add your logic
    // should return an array of objects
    return numberArray.map(num => ({val: num}))
}

const input = [1, 2, 3];
const output = transformToObjects(input);
console.log(output); // [{ val: 1 }, { val: 2 }, { val: 3 }]*/

// const [firstName, lastName] = ["Max", "Schwarrzmuller"];
//
// // const firstName = userNameData[0];
// // const lastName = userNameData[1];
//
// console.log(firstName);
// console.log(lastName);
//
// const {name: userName, age} = {
//     name: "Max",
//     age: 34
// };
//
// // const name = user.name;
// // const age = user.age;
//
// console.log(userName);
// console.log(age);

// const hobbies = ["Sports", "Cooking"];
// const user = {
//     name: "Max",
//     age: 34
// };
//
// const newHobbies = ["Reading"];
//
// // const mergedHobbies = [hobbies, newHobbies];
// const mergedHobbies = [...hobbies, ...newHobbies];
//
// console.log(mergedHobbies);
//
// const extendedUser = {
//     isAdmin: true,
//     ...user
// };
//
// console.log(extendedUser);


// const password = prompt("Your password");
//
// if (password === "Hello") {
//     console.log("Hello works");
// } else if (password === "hello") {
//     console.log("hello works");
// } else  {
//     console.log("Access non granted.")
// }
//
// const hobbies = ["Sports", "Cooking"];
//
// for (const hobby of hobbies) {
//     console.log(hobby);
// }

const list = document.querySelector("ul");
list.remove();