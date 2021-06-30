const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissor = document.querySelector('#scissor');
const uPlay = document.querySelector('#uPlay');
const cPlay = document.querySelector('#cPlay');
const score = document.querySelector('#score');
const buttons = document.querySelector('#buttons');
const VS = document.querySelector('#VS');
const uScore = document.querySelector('#uScore');
const cScore = document.querySelector('#cScore');
const reset=document.createElement('button');
        reset.classList.add('font');
        reset.id = 'reset';
        var t = document.createTextNode('Restart the game');
        reset.appendChild(t);

    

let winner;
let userScore = 0;
let computerScore = 0;
let result1;

function computerPlay () {

    let computerGuess =  Math.floor(Math.random()*100)        //pulls a random number and assosiates it
                                                               // with a choice of rock, paper or scissor

        if (computerGuess < 33) {
            return "Rock";
        } else if (computerGuess >=33 && computerGuess < 66 ) {
            return "Paper";
        } else if (computerGuess >=66 ) {
            return "Scissor";
        }
}


function round1 (userChoice) {                                 //compares user choice to computer and gives result
                                                              //user choice is passed to round1 function from game function in this instance
        let computerGuess = computerPlay();
        let userChoice2 = userChoice.toLowerCase();

        cPlay.innerHTML=computerGuess;
        uPlay.innerHTML=userChoice;
    
            if (computerGuess === "Rock" && userChoice2 === "scissor" || computerGuess ==="Paper" && userChoice2 === "rock" || computerGuess === "Scissor" && userChoice2 === "paper") {
                result1="You lose"; 
            }else if (computerGuess === "Rock" && userChoice2 === "paper" || computerGuess === "Paper" && userChoice2 === "scissor" || computerGuess === "Scissor" && userChoice2 === "rock") {
                result1="You win!";
            }else  {
                result1="It's a draw!";
            } 
        scoreMachine();
        }


function scoreMachine() {

    if (result1 === "You lose") {
        computerScore = computerScore + 1;
        scoreColor();
        document.getElementById('cScore').innerHTML = computerScore;
    } else if (result1 === "You win!") {
        userScore = userScore + 1;
        scoreColor();
        document.getElementById('uScore').innerHTML = userScore;               
    }

    if (userScore===5) {
        winner='You won the game!'
        endGame();
    } else if (computerScore===5) {
        winner='You lost :('
        endGame();
    }
}

            

function scoreColor() {
    if (userScore>computerScore) {
        uScore.classList.add('greenScore');
        uScore.classList.remove('redScore');
        cScore.classList.remove('greenScore');
        cScore.classList.add('redScore');
    } else if (userScore<computerScore) {
        uScore.classList.add('redScore');
        uScore.classList.remove('greenScore');
        cScore.classList.add('greenScore');
        cScore.classList.remove('redScore');
    } else {
        uScore.classList.remove('redScore');
        uScore.classList.remove('greenScore');
        cScore.classList.remove('redScore');
        cScore.classList.remove('greenScore');
    }
}

function endGame() {
     
    rock.remove();
    paper.remove();
    scissor.remove();
    buttons.appendChild(reset);
    document.getElementById('VS').innerHTML = winner;
    VS.classList.add('vsSmall');
    
    
    
}

function resetGame(){

    document.getElementById('cScore').innerHTML = 0;
    document.getElementById('uScore').innerHTML = 0;
    document.getElementById('VS').innerHTML = 'VS';
    computerScore=0;
    userScore=0;
    reset.remove();
    buttons.appendChild(rock)
    buttons.appendChild(paper)
    buttons.appendChild(scissor)
    scoreColor();
    VS.classList.remove('vsSmall');
}





rock.addEventListener('click', function (e) {
    round1('Rock');
  });
  paper.addEventListener('click', function (e) {
    round1('Paper');
  });
  scissor.addEventListener('click', function (e) {
    round1('Scissor');
  });
  reset.addEventListener('click', function (e) {
    resetGame();
  });



