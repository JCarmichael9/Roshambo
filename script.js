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
      computerWins()
      return 'Computer WON'
    } else if (computerChoice ==='rock') {
      userWins()
      return 'You WON!'
    };
  }

  if (userChoice === 'scissors') {
    if (computerChoice === 'rock')
      computerWins()
      return "The computer WON!"
  } else if (computerChoice ==='paper') {
    userWins()
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
  if (computerScore === 3)  {
    console.log('A Computer Beat Your Ass!!!!')
    userScore = 0
    computerScore = 0
    }
    
    if (userScore === 3)  {
      console.log('You Beat A Computer, not impressive')
      userScore = 0
      computerScore = 0
    }
};


playGame();


