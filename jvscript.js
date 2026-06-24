const commend = document.getElementById("commend");
const opponentThrowInput = document.getElementById("opponentThrowInput");
const tryAgain = document.getElementById("tryAgain");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const gameOver = document.getElementById("gameOver");

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


// 1 == Rock
// 2 == Paper
// 3 == Scissors

gameOver.style.display = "none";

function appendToDisplay(playerChoice){

    let computerChoice = getRandomInt(1, 3);

    if(computerChoice === playerChoice){  

        commend.textContent = "Draw!";
        if(computerChoice === 1){
            opponentThrowInput.value = "Opponent threw rock.";
            
        } else if(computerChoice === 2){
            opponentThrowInput.value = "Opponent threw paper."
        } else if(computerChoice === 3){
            opponentThrowInput.value = "Opponent threw scissors.";
        }

    } else if(playerChoice === 1){
        if(computerChoice === 2){
            commend.textContent = "You Lose!";
            commend.style.color = "crimson";
            opponentThrowInput.value = "Opponent threw paper.";
        } else if(computerChoice === 3){
            commend.textContent = "You Win!";
            commend.style.color = "lime";
            opponentThrowInput.value = "Opponent threw scissors.";
        }
    } else if(playerChoice === 2){
            if(computerChoice === 1){
                commend.textContent = "You Win!";
                commend.style.color = "lime";
                opponentThrowInput.value = "Opponent threw rock.";
        } else if(computerChoice === 3){
            commend.textContent = "You Lose!";
            commend.style.color = "crimson";
            opponentThrowInput.value = "Opponent threw scissors.";
        }
    } else if(playerChoice === 3){
            if(computerChoice === 1){
                commend.textContent = "You Lose!";
                commend.style.color = "crimson";
                opponentThrowInput.value = "Opponent threw rock.";
        } else if(computerChoice === 2){
            commend.textContent = "You Win!";
            commend.style.color = "lime";
            opponentThrowInput.value = "Opponent threw paper.";
        }
    }

    gameOver.style.display = "block";
    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;

}

function resetGame(){

    opponentThrowInput.value = "";
    commend.textContent = "Waiting for your throw...";
    commend.style.color = "gold";

    rock.disabled = false;
    paper.disabled = false;
    scissors.disabled = false;

    gameOver.style.display = "none";
}






