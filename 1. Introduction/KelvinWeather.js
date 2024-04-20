//LEARN JAVASCRIPT

//Kelvin Weather

/*
In this project, we’re going to practice variables and printing to the console in JavaScript
so you can hone your skills and feel confident taking them to the real world. Why? You’ve got
to master the basics. Get comfortable with these fundamentals.
*/

const kelvin = 0;
//constant kelvin, assigned 293 as its value

let celsius = kelvin - 273;
//conversion: k to c

let fahrenheint = Math.floor(celsius*(9/5)+32)
//f equation, it's gonna get saved as a round value due the floor method

console.log(`The temperature is ${fahrenheint} degrees Fahrenheit.`)
