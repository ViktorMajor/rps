let userPoints = 0;
let computerPoints = 0;

while(userPoints < 2 && computerPoints < 2) {
let getComputerChoice = () => {
  let randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return "rock";
    case 1:
      return "paper";
      case 2:
        return "scissors";
  }
};
let userAnswer1 = (prompt("Rock, paper vagy scissors?"));
let userAnswer = userAnswer1.toLowerCase();
let computerAnswer = getComputerChoice();

console.log("The computer answer is: "+ computerAnswer);
console.log("Your answer is:"+userAnswer);
if (userAnswer === "rock" && computerAnswer === "scissors") {
  console.log("so You win!");
  userPoints++;

} else if (userAnswer === "rock" && computerAnswer === "paper") {
  console.log("so You lose!");
  computerPoints++;
  return

} else if (userAnswer === "rock" && computerAnswer === "rock") {
  console.log("so It was draw!");
  return

} else if (userAnswer === "paper" && computerAnswer === "scissors") {
  console.log("so You lose!");
  computerPoints++;

} else if (userAnswer === "paper" && computerAnswer === "paper") {
  console.log("so It was draw!");

} else if (userAnswer === "paper" && computerAnswer === "rock") {
  console.log("so You win!");
  userPoints++;

} else if (userAnswer === "scissors" && computerAnswer === "paper") {
  console.log("so You win!");
  userPoints++;
  
} else if (userAnswer === "scissors" && computerAnswer === "rock") {
  console.log("so You lose!");
  computerPoints++;

} else if (userAnswer === "scissors" && computerAnswer === "scissors") {
  console.log("so It was draw!");
  
} else {
  console.log("so You lose!");
}
      
            
console.log("Your ponts: "+userPoints);
console.log("The computers points: "+computerPoints);}