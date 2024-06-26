//LEARN JAVASCRIPT

//Magic Eight Ball

/*
Build a virtual Magic Eight Ball using control flow in JavaScript. 
You’ll practice building decision-making into your programs and gain confidence 
in writing more robust JavaScript code.
*/

let userName = 'Mateus Evangelista';

userName !== '' ? console.log(`Hello, ${userName}!`) : console.log('Hello!');

let userQuestion = 'Will I have a boyfriend?';

console.log(`${userName}: ${userQuestion}`);

let randomNumber = Math.floor(Math.random() * 8);

let eightBall = '';

// Control flow to assign responses based on the random number
if (randomNumber === 0) {
    eightBall = 'It is certain';
} else if (randomNumber === 1) {
    eightBall = 'It is decidedly so';
} else if (randomNumber === 2) {
    eightBall = 'Reply hazy try again';
} else if (randomNumber === 3) {
    eightBall = 'Cannot predict now';
} else if (randomNumber === 4) {
    eightBall = 'Do not count on it';
} else if (randomNumber === 5) {
    eightBall = 'My sources say no';
} else if (randomNumber === 6) {
    eightBall = 'Outlook not so good';
} else if (randomNumber === 7) {
    eightBall = 'Signs point to yes';
}

console.log(eightBall)