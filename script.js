let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.getElementById("msg");  //Because querySelector did not work
const user = document.getElementById("user");
const comp = document.getElementById("comp");


const genCompChoice = () => {
    //Generate Computer choice
    const options = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random() * 3); //Random Index
    return options[randIdx];
};

const playGame = (userChoice) => {
    const compChoice = genCompChoice();

    if (userChoice === compChoice) {
        drawGame();
    }
    else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        }
        else if (userChoice === "paper") {
            userWin = compChoice === "scissor" ? false: true;
        }
        else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

const drawGame = () => {
    msg.innerText = "Game was draw. Play again.";
    msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        user.innerText = userScore;
        msg.innerText = "You win! Your "+userChoice+" beats "+compChoice;
        msg.style.backgroundColor = "green";    
    }
    else {
        compScore++;
        comp.innerText = compScore;
        compChoice = compChoice.charAt(0).toUpperCase() + compChoice.slice(1); //to convert rock/paper/scissor into Rock/Paper/Scissor
        msg.innerText = "You lose! "+compChoice+" beats your "+userChoice;
        msg.style.backgroundColor = "red";    
    }
};

const resetGame = () => {
    userScore = 0;
    compScore = 0;
    user.innerText = userScore;
    comp.innerText = compScore;
    msg.innerText = "Play your move";
    msg.style.backgroundColor = "#081b31";
};