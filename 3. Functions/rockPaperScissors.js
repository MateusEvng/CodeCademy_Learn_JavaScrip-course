//LEARN JAVASCRIPT

//Rock, Paper, or Scissors

/*
In this project, we’re going to practice conditionals in JavaScript so you can hone your skills and feel
confident taking them to the real world. Why? Given a certain input you want to return a certain output. 
If this than that.
*/

console.log('hi');

let userInput = 'bomb';

const getUserChoice = userInput => {

  userInput = userInput.toLowerCase();

  if((userInput === 'rock') || (userInput === 'paper') || (userInput === 'scissors') || (userInput === 'bomb')) return userInput;
  else return console.log('Error!');

};


function getComputerChoice(){

  let temp = Math.random() * 3;
  temp = Math.floor(temp);

  switch(temp){
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
    default:
      return console.log('Error');
  }
  
}

function determineWinner(userChoise, computerChoise){

    if(userChoise === computerChoise) return console.log('TIE!');
    else if(userChoise === 'rock'){
        if(computerChoise === 'paper') return console.log('COMPUTER HAS WON!');
        else return console.log('YOU ARE THE WINNER!');
    }
    else if(userChoise === 'paper'){
        if(computerChoise === 'scissors') return console.log('COMPUTER HAS WON!');
        else return console.log('YOU ARE THE WINNER!')
    }
    else if(userChoise === 'scissors'){
        if(computerChoise === 'rock') return console.log('COMPUTER HAS WON!');
        else console.log('YOU ARE THE WINNER!');
    }
    else return console.log('YOU ARE THE WINNER!');

}

function playGame(){

    userInput = getUserChoice(userInput);
    const computerChoise = getComputerChoice();

    console.log(`Your choise is: ${userInput}`);
    console.log(`Computer's choise is: ${computerChoise}`);

    determineWinner(userInput, computerChoise);

}

playGame();



