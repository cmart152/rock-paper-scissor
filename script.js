console.log("Hello and welcome to my game of rock paper scissor, good luck and may the odds ever be in your favour");

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
        
        
        console.log(computerGuess)

            if (computerGuess === "Rock" && userChoice2 === "scissor" || computerGuess ==="Paper" && userChoice2 === "rock" || computerGuess === "Scissor" && userChoice2 === "paper") {
                return "You lose" 
            }else if (computerGuess === "Rock" && userChoice2 === "paper" || computerGuess === "Paper" && userChoice2 === "scissor" || computerGuess === "Scissor" && userChoice2 === "rock") {
                return "You win!"
            }else if (computerGuess === "Rock" && userChoice2 === "rock" || computerGuess === "Paper" && userChoice2 === "paper" || computerGuess === "Scissor" || userChoice2 === "scissor") {
                return "It's a draw!"
            }
}


function game() {

    
    let userScore = 0;
    let computerScore = 0;                                            //initiate game, score keep, declare winner

            do {
            let userChoice = prompt("What's your move, Rock, Paper or Scissor?")
            let result = round1(userChoice)
            console.log(result)

            if (result === "You lose") {
                computerScore = computerScore + 1;     
            }else if (result === "You win!") {
                userScore = userScore + 1;
            }
            
            console.log("Your score is " + userScore)
            console.log("Computer score is " + computerScore)
     
        } while (computerScore < 3 && userScore < 3);

    if (computerScore === 3) {
        console.log("You lost the game you cunt");
    } else if (userScore === 3) {
        console.log("Holy shit you won!");
    }
    
    
}

