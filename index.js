let userName;
let userScore = 0;
let computerScore = 0;

function game() {
    userName = prompt("Please enter your name");

    if (userName === "" || userName === null) {
        userName = "User";
        getAnswer();
    } else {
        getAnswer();
    }
}

function getComputerResult() {
    let result = Math.random();

    if (result >= 0 && result <= 0.4) {
        return "rock";
    } else if (result > 0.4 && result <= 0.7) {
        return "scissors";
    } else {
        return "paper";
    }
}

function getAnswer() {
    let userQuestion = prompt("Rock, Scissors, Paper... Please make your move");

    if (userQuestion === null) {
        alert("You aborted this game. To start new game just refresh the page.");
    } else {
        userQuestion = userQuestion.toLowerCase();
        switch (userQuestion) {
            case "rock":
                if (getComputerResult() === "paper") {
                    computerScore = computerScore + 1;

                    alert("Computer move is: paper");
                    alert(`Computer win this round 
                ${userName} - ${userScore} Computer - ${computerScore}`);
                    getScore();
                } else if (getComputerResult() === "rock") {
                    alert("Computer move is: rock");
                    alert("cumputer result is equal to yours");
                    getScore();
                } else {
                    userScore = userScore + 1;
                    alert("Computer move is: Scissors");
                    alert(`${userName} win this round 
                ${userName} - ${userScore} Computer - ${computerScore}`);
                    getScore();
                }

                break;

            case "scissors":
                if (getComputerResult() === "scissors") {
                    alert("Computer move is: scissors");
                    alert("cumputer result is equal to yours");
                    getScore();
                } else if (getComputerResult() === "rock") {
                    alert("Computer move is: rock");
                    computerScore = computerScore + 1;
                    alert(`Computer win this round 
                ${userName} - ${userScore} Computer - ${computerScore}`);
                    getScore();
                } else {
                    userScore = userScore + 1;
                    alert("Computer move is: paper");
                    alert(`${userName} win this round 
                ${userName} - ${userScore} Computer - ${computerScore}`);
                    getScore();
                }
                break;

            case "paper":
                if (getComputerResult() === "scissors") {
                    alert("Computer move is: scissors");
                    computerScore = computerScore + 1;
                    alert(`Computer win this round
                ${userName} - ${userScore} Computer - ${computerScore}`);
                    getScore();
                } else if (getComputerResult() === "rock") {
                    alert("Computer move is: rock");
                    userScore = userScore + 1;
                    alert(`${userName} win this round 
                ${userName} - ${userScore} Computer - ${computerScore}`);
                    getScore();
                } else {
                    alert("Computer move is: paper");
                    alert("cumputer result is equal to yours");
                    getScore();
                }
                break;

            default:
                getAnswer();
                break;
        }
    }
}

function getScore() {
    if (userScore === 3 || computerScore === 3) {
        if (userScore > computerScore) {
            alert(`${userName} Congratulations. You won this game. 
            Count - ${userName}- ${userScore} : Computer ${computerScore}`);
            startNewGame();
        } else if (computerScore > userScore) {
            alert(`Sorry. ${userName} You lost this game.
            Count - You:  ${userScore} : Computer ${computerScore}`);
            startNewGame();
        }
    } else {
        getAnswer();
    }
}

function startNewGame() {
    let answer = confirm("Do you want to start new game?");
    if (answer === true) {
        userScore = 0;
        computerScore = 0;
        game();
    } else {
        return null;
    }
}

game();
