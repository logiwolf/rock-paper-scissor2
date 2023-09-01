 // instruction
//--------------
//  1. play with computer and you
//  2. begin with a function called getComputerChoice that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’
//  3. use the console to make sure this is returning the expected output before moving to the next step!.
//  4. Write a function that plays a single round of Rock Paper Scissors. The function should take two parameters - the playerSelection and computerSelection.
//  5. and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock".
//  6. rock paper Scissors is case sensitive.
//  7. return the call instead of console.log
//  8. Write a NEW function called game(). Use the previous function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end.
//  9. use prompt to get user's input.
//  7. get help function.



// algorithm
//-----------
// 1. choose play game or display the instructions of the game. 1 is for play game and 2 is for instructions of the game.
// 2. if user choose one show user Input and if user choose two show the instructions of the game.
// 3. get computer's input.
// 4.  determine who wins.
// 5. if game round is less than five play other rounds.
// 6. when round is equal to 5 show the message of history of rounds.   


// algorithm
//-----------

// 2. if user choose one show user Input and if user choose two show the instructions of the game.
// 3. get user and computer's input.
const inputUserChoice = () =>{
        
    const prompt = require("prompt-sync")();
    let userInput = prompt ("enter user choice:  ",)
    userInput= userInput.toLowerCase();
    return userInput;
} 
const inputComputerChoice = () => {
    const compInput = Math.floor(Math.random()*3);
    switch (compInput){
        case 0 : return "rock";
            break;
        case 1 : return "paper";
            break;
        case 2 : return "scissor";
            break;
    }
}

// 4.  determine who wins.
const determineWinner = () => {
    const userChoice = inputUserChoice();
    console.log(`user choice : ${userChoice}`);
    const computerChoice = inputComputerChoice();
    console.log(`computer choice : ${computerChoice}`);
    
    //below code was broken. it need to be further evaluate
    // switch (userChoice, computerChoice){
    //     case userChoice === "rock" && computerChoice === "scissor" : 
    //         console.log("user win");
    //         break;
    //     case userChoice === "rock" && computerChoice === "paper" : 
    //         console.log("computer win");
    //         break;
    //     case userChoice === "scissor" && computerChoice === "rock" : 
    //         console.log("computer win");
    //         break;
    //     case userChoice === "scissor" && computerChoice === "paper" : 
    //         console.log("user win");
    //         break;
    //     case userChoice === "paper" && computerChoice === "rock" : 
    //         console.log("user win");
    //         break;
    //     case userChoice === "paper" && computerChoice === "scissor" : 
    //         console.log( "compute win");
    //         break;    
   // }

   if (userChoice === "rock" && computerChoice === "scissor") {
    console.log(" -------------");
    console.log("|  USER WIN   |");
    console.log(" -------------");
    console.log("-------------------------------------------");
   } else if (userChoice === "rock" && computerChoice === "paper") {
    console.log(" --------------")
    console.log("| COMPUTER WIN |");
    console.log(" --------------")
    console.log("-------------------------------------------");
   } else if (userChoice === "scissor" && computerChoice === "rock") {
    console.log(" --------------")
    console.log("| COMPUTER WIN |");
    console.log(" --------------")
    console.log("-------------------------------------------");
   } else if (userChoice === "scissor" && computerChoice === "paper"){
    console.log(" ----------");
    console.log("| USER WIN |");
    console.log(" ----------");
    console.log("-------------------------------------------");
   } else if (userChoice === "paper" && computerChoice === "rock") {
    console.log(" ---------- ");
    console.log("| USER WIN |");
    console.log(" ---------- ");
    console.log("-------------------------------------------");
   } else if (userChoice === "paper" && computerChoice === "scissor"){
    console.log(" --------------");
    console.log("| COMPUTER WIN |");
    console.log(" --------------");
    console.log("-------------------------------------------");
   } else  if (userChoice === "paper" && computerChoice === "paper" || userChoice === "rock" && computerChoice === "rock" || userChoice === "scissor" && computerChoice === "scissor"){
    console.log(" ----------- ");
    console.log("| GAME TIE! |");
    console.log(" ----------- ");
    console.log(" -------------------------------------------");
   } else {
    console.log(" ----------------------");
    console.log("| ENTER A VALID NUMBER |");
    console.log(" ----------------------");
    console.log("-------------------------------------------");
   }
}




// 5. if game round is less than five play other rounds.
// 6. when round is equal to 5 show the message of history of rounds.  
const repeatTheGame = () => {
    for (i=0;i<=5;i++){

        determineWinner();
    }
    console.log("The game is over!!");
}
// repeatTheGame();

// 1. choose play game or display the instructions of the game. 1 is for play game and 2 is for instructions of the game.
const firstPage = () => {
//const playGame = repeatTheGame();
const instruction = console.log ("0 is for continue game and 1 is for game instruction.");
console.log ("-------------------------------------------------------------------------")
const prompt = require("prompt-sync")();
let inputFirstPage = parseInt(prompt("Please enter 0 or 1 :"));
if (inputFirstPage === 0 ){
    return repeatTheGame();
} else if (inputFirstPage === 1 ){
    console.log(`please enter owner website to learn how to play rock paper scissor game.`)
} else {
    console.log(`Enter the correct value.`);
}
}
firstPage();
