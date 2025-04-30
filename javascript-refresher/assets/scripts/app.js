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

// function greet() {
//     console.log("Hello World")
// }
//
// greet();
// greet();
// greet();
// greet();
// greet();

// function greet(userName, Message) {
//     console.log(userName);
//     console.log(Message);
// }
//
// greet();


// function greetUser(userName, Message) {
//     console.log(userName);
//     console.log(Message);
// }
//
// greetUser("Max", "hello");
// greetUser("Manuel", "Hallo what's up?")

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

export default (userName, message) => {
    console.log('Hello');
    return userName + message;
}
