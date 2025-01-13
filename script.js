function getValue() {
  // Get the value from the input field
  const inputValue = document.getElementById("firstName");

  // Use the value for something else
  document.getElementById('welcome').innerText = `Greetings Jedi ${firstName}`
}


getUserChoice = userInput => {
  userInput = userInput.toLowerCase();

  if (userInput === 'rock' || userInput === 'scissors' || userInput === 'paper') {
    return userInput;
  } else {
    console.log("Error! Try again");
  }
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

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === 'bomb') {
    return "You Won!"
  }

  if (userChoice === computerChoice) {
    return 'Its a tie';
  }

  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'Computer WON'
    } else {
      return 'You WON!'
    };
  }

  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'Computer WON'
    } else {
      return "You WON!"
    }
  }

  if (userChoice === 'scissors') {
    if (computerChoice === 'rock')
      return "The computer WON!"
  } else {
    return "You won!";
  };
}




const playGame = () => {
  const userChoice = getUserChoice('scissors');
  const computerChoice = getComputerChoice();
  console.log('You threw: ' + userChoice);
  console.log('The computer threw: ' + computerChoice);

  console.log(determineWinner(userChoice, computerChoice));
};


playGame();


