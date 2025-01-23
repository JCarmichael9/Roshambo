function getValue() {
  // Get the value from the input field
  let userName = document.getElementById('firstName').value;

  // Save the user's name in localStorage
  localStorage.setItem('userName', userName);

  // Use the value for something else
  let Greet = document.getElementById('welcome');
  if (userName) {
    Greet.innerText = `Hello ${userName}`;
  } else {
    Greet.innerText = 'Hello';
  }
}

userPicChoice = ""
compChoice =""

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
      compChoice = 'imgs/noteditedone.png'
      return 'rock';
      
    case 1:
      compChoice = 'imgs/force-removebg-preview.png'
      return "paper";
    case 2:
      compChoice = 'imgs/GREENLIGHTSABER.png'
      return "scissors";
  }
};

let determineWinner = (userChoice, computerChoice) => {

  if (userChoice === 'rock') {
    
    if (computerChoice === 'paper') {
      computerWins()
      userPicChoice = 'imgs/noteditedone.png'
      return 'Computer WON'
    } else if (computerChoice ==='scissors') {
      userWins()
      userPicChoice = 'imgs/noteditedone.png'
      return 'You WON!'
    } else if (computerChoice ==='rock') {
      userPicChoice = 'imgs/noteditedone.png'
      return 'You Tie'
    }
  }

  if (userChoice === 'paper') {

    if (computerChoice === 'scissors') {
      computerWins()
          userPicChoice = 'imgs/force-removebg-preview.png'
      return 'Computer WON'
    } else if (computerChoice ==='rock') {
      userWins()
          userPicChoice = 'imgs/force-removebg-preview.png'
      return 'You WON!'
    } else if (computerChoice ==='paper') {
          userPicChoice = 'imgs/force-removebg-preview.png'
      return 'You Tie'
    };
  }

  if (userChoice === 'scissors') {
        
    if (computerChoice === 'rock')
      computerWins()
    userPicChoice = 'imgs/GREENLIGHTSABER.png'
      return "The computer WON!"
  } else if (computerChoice ==='paper') {
    userWins()
    userPicChoice = 'imgs/GREENLIGHTSABER.png'
    return 'You WON!'
  } else if (computerChoice ==='scissors') {
    userPicChoice = 'imgs/GREENLIGHTSABER.png'
    return 'You Tie'
  }
  if (userChoice === undefined) {
    compPicChoice = 'imgs/tiefighter.gif'
    userPicChoice = 'imgs/millenium.gif'
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
    document.getElementById("userHeart3").classList.add('hide')
    compModal.style.display = "block";
    }
    
    if (userScore === 3)  {
      console.log('You Beat A Computer, not impressive')
      document.getElementById("computerHeart3").classList.add('hide')
      userModal.style.display = "block";
    }
    compPick.src = compChoice
    userPick.src = userPicChoice

    if (userScore === 1) {
      document.getElementById("computerHeart1").classList.add('hide')
    }
    if (userScore === 2) {
      document.getElementById("computerHeart2").classList.add('hide')
    }
    if (computerScore === 1) {
      document.getElementById("userHeart1").classList.add('hide')
    }
    if (computerScore ===2) {
      document.getElementById("userHeart2").classList.add('hide')
    }
};


document.addEventListener("DOMContentLoaded", () => {
  const savedUserName = localStorage.getItem("userName");
  const welcomeElement = document.getElementById("welcome");

  if (savedUserName) {
    welcomeElement.innerText = `Welcome, Jedi ${savedUserName}, to the Galactic Showdown! May the Force be with you as you challenge the stars in this epic Jedi duel. Choose wisely!`;
  } else {
    welcomeElement.innerText = 'Welcome to the Galactic Showdown! May the Force be with you as you face off against the stars in this epic Jedi duel. Choose wisely!';
  }
});



let userModal = document.getElementById("userModal");
let compModal = document.getElementById("computerModal");

if (userScore === 3 ) {
  
}

if (computerScore === 3) {

}

getValue();