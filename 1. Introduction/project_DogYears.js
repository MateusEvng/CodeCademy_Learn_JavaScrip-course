//Project - Dog Years

/* 
In this project, we’re going to practice variables and strings in JavaScript so you can hone your skills 
and feel confident taking them to the real world. Why? These concepts will help you use your data to output 
information to your users.
*/

let myAge = 21;
let earlyYears = 2;

earlyYears *= 10.5;

myAge -= 2;
let laterYears = myAge;

laterYears *= 4;
console.log(earlyYears)
console.log(laterYears)

let myAgeInDogYears = earlyYears + laterYears;

let s = 'Mateus Evangelista'

myName = s.toLowerCase()

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)