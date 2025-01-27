// Function to get the value of the user's first name and store it in localStorage
function getValue() {
  // Get the value from the input field (user's name)
  let userName = document.getElementById('firstName').value;

  // Save the user's name in localStorage
  localStorage.setItem('userName', userName);

  // Get the greeting element
  let Greet = document.getElementById('welcome');
  
  // If the user has entered a name, display a personalized greeting, otherwise a generic one
  if (userName) {
    Greet.innerText = `Hello ${userName}`; // Personalized greeting
  } else {
    Greet.innerText = 'Hello'; // Generic greeting
  }
}

// Initialize variables for the user's and computer's choices
let userPicChoice = "";
let compChoice = "";

// Initialize scores for both the user and computer
let userScore = 0;
let computerScore = 0;

// Function to handle when the computer wins
function computerWins() {
  computerScore++; // Increase computer's score
}

// Function to handle when the user wins
function userWins() {
  userScore++; // Increase user's score
}

// Function to get a random choice for the computer
const getComputerChoice = () => {
  // Generate a random number between 0 and 2 to choose between rock, paper, or scissors
  const randomNumber = Math.floor(Math.random() * 3);

  // Return the computer's choice based on the random number
  switch (randomNumber) {
    case 0:
      compChoice = 'imgs/noteditedone.png'; // Rock image
      return 'rock';
    case 1:
      compChoice = 'imgs/force-removebg-preview.png'; // Paper image
      return 'paper';
    case 2:
      compChoice = 'imgs/REDLIGHTSABER.png'; // Scissors image
      return 'scissors';
  }
};

// Function to determine the winner of the game
let determineWinner = (userChoice, computerChoice) => {
  // Case when the user chooses "rock"
  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      computerWins(); // Computer wins
      userPicChoice = 'imgs/noteditedone.png'; // Set the user choice image
      return 'Computer WON';
    } else if (computerChoice === 'scissors') {
      userWins(); // User wins
      userPicChoice = 'imgs/noteditedone.png';
      return 'You WON!';
    } else if (computerChoice === 'rock') {
      userPicChoice = 'imgs/noteditedone.png'; // Tie, both are rock
      return 'You Tie';
    }
  }

  // Case when the user chooses "paper"
  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      computerWins(); // Computer wins
      userPicChoice = 'imgs/force-removebg-preview.png';
      return 'Computer WON';
    } else if (computerChoice === 'rock') {
      userWins(); // User wins
      userPicChoice = 'imgs/force-removebg-preview.png';
      return 'You WON!';
    } else if (computerChoice === 'paper') {
      userPicChoice = 'imgs/force-removebg-preview.png'; // Tie, both are paper
      return 'You Tie';
    }
  }

  // Case when the user chooses "scissors"
  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      computerWins(); // Computer wins
      userPicChoice = 'imgs/GREENLIGHTSABER.png';
      return 'The computer WON!';
    } else if (computerChoice === 'paper') {
      userWins(); // User wins
      userPicChoice = 'imgs/GREENLIGHTSABER.png';
      return 'You WON!';
    } else if (computerChoice === 'scissors') {
      userPicChoice = 'imgs/GREENLIGHTSABER.png'; // Tie, both are scissors
      return 'You Tie';
    }
  }

  // Case if userChoice is undefined (maybe user didn't choose)
  if (userChoice === undefined) {
    compPicChoice = 'imgs/tiefighter.gif'; // Default computer image
    userPicChoice = 'imgs/millenium.gif'; // Default user image
  }
};

// Main function to play the game
function playGame(userChoice) {
  // Get the computer's choice
  const computerChoice = getComputerChoice();
  
  // Log the user's and computer's choices for debugging purposes
  console.log('You played: ' + userChoice);
  console.log('The computer plays: ' + computerChoice);
  console.log(determineWinner(userChoice, computerChoice)); // Log the result of the game
  console.log(userScore); // Log user's score
  console.log(computerScore); // Log computer's score

  // Check if any player has won 3 times
  if (computerScore === 3) {
    console.log('A Computer Beat Your Ass!!!!');
    document.getElementById("userHeart3").classList.add('hide'); // Hide user heart
    compModal.style.display = "block"; // Show computer win modal
  }

  if (userScore === 3) {
    console.log('You Beat A Computer, not impressive');
    document.getElementById("computerHeart3").classList.add('hide'); // Hide computer heart
    userModal.style.display = "block"; // Show user win modal
  }

  // Update the images of the user and computer choices
  compPick.src = compChoice;
  userPick.src = userPicChoice;

  // Update the hearts based on the scores
  if (userScore === 1) {
    document.getElementById("computerHeart1").classList.add('hide'); // Hide one of the computer's hearts
  }
  if (userScore === 2) {
    document.getElementById("computerHeart2").classList.add('hide'); // Hide another computer's heart
  }
  if (computerScore === 1) {
    document.getElementById("userHeart1").classList.add('hide'); // Hide one of the user's hearts
  }
  if (computerScore === 2) {
    document.getElementById("userHeart2").classList.add('hide'); // Hide another user's heart
  }
}

// Event listener for when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Retrieve the user's name from localStorage
  const savedUserName = localStorage.getItem("userName");
  
  // Get the welcome element on the page
  const welcomeElement = document.getElementById("welcome");

  // Display a personalized welcome message if the user's name exists
  if (savedUserName) {
    welcomeElement.innerText = `Welcome, Jedi ${savedUserName}, to the Galactic Showdown! May the Force be with you as you challenge the stars in this epic Jedi duel. Choose wisely!`;
  } else {
    // If no name is saved, display a default message
    welcomeElement.innerText = 'Welcome, Master Jedi, to the Galactic Showdown! May the Force be with you as you face off against the stars in this epic Jedi duel. Choose wisely!';
  }
});

// Get the modal elements for user and computer win
let userModal = document.getElementById("userModal");
let compModal = document.getElementById("computerModal");

// The following blocks seem to be redundant because the game already checks for scores during playGame()

// Call the getValue function to display the user's name when the page loads
getValue();
