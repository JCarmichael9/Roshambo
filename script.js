function getValue() {
  // Get the value from the input field
  let userName = document.getElementById('firstName');

  // Use the value for something else
  let Greet = document.getElementById('welcome')
  userName
  ? (Greet.innerText=`Hello ${userName}`)
  : (Greet.innerText=`Hello James (your short af)`)
}

let userScore = 0
let computerScore = 0

function computerWins() {
  computerScore++
}

function userWins() {
  userScore++
}

//3,4
const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);

  switch (randomNumber) {
    case 0:
      return 'rock';
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
};

let determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return 'Its a tie';
  }

  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      computerWins()
      return 'Computer WON'

    } else if (computerChoice ==='scissors') {
      userWins()
      return 'You WON!'

    }
  }

  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'Computer WON'
    } else if (computerChoice ==='rock') {
      return 'You WON!'
    };
  }

  if (userChoice === 'scissors') {
    if (computerChoice === 'rock')
      return "The computer WON!"
  } else if (computerChoice ==='paper') {
    return 'You WON!'
  }
}




function playGame(userChoice) {
  const computerChoice = getComputerChoice();
  console.log('You played: ' + userChoice);
  console.log('The computer plays: ' + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
  console.log(userScore)
  console.log(computerScore)
};


playGame();


