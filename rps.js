let userPoints = 0;
let computerPoints = 0;

function logUserChoice(id) {
  let userChoice = id;

  let computerAnswer = getComputerChoice();

  let result = document.querySelector(".er");
  let vs = document.querySelector(".vs");

switch (userChoice) {
    case "rock":
      switch (computerAnswer) {
        case "rock":
          vs.innerHTML = "Kő vs Kő"
          result.innerHTML = "Döntetlen!";
          break;
        case "paper":
          vs.innerHTML = "Kő vs Papír"
          result.innerHTML = "Vesztettél!";
          computerPoints++;
          break;
        case "scissors":
          vs.innerHTML = "Kő vs Olló"
          result.innerHTML = "Győztél";
          userPoints++;
          break;
      }
      break;
    case "paper":
      switch (computerAnswer) {
        case "rock":
          vs.innerHTML = "Papír vs Kő"
          result.innerHTML = "Győztél";
          userPoints++;
          break;
        case "paper":
          vs.innerHTML = "Papír vs Papír"
          result.innerHTML = "Döntetlen!";
          break;
        case "scissors":
          vs.innerHTML = "Papír vs Olló"
          result.innerHTML = "Vesztettél!";
          computerPoints++;
          break;
      }
      break;
    case "scissors":
      switch (computerAnswer) {
        case "rock":
          vs.innerHTML = "Olló vs Kő"
          result.innerHTML = "Vesztettél!";
          computerPoints++;
          break;
        case "paper":
          vs.innerHTML = "Olló vs Papír"
          result.innerHTML = "Győztél";
          userPoints++;
          break;
        case "scissors":
          vs.innerHTML = "Olló vs Olló"
          result.innerHTML = "Döntetlen!";
          break;
      }
      break;
  }


  let your_p = document.querySelector(".your_p");
your_p.innerHTML = "A te pontjaid: " + userPoints;
  let com_p = document.querySelector(".com_p");
com_p.innerHTML = "A gép pontjai: " + computerPoints;

}

document.querySelector("#rock").addEventListener("click", function() {
  logUserChoice("rock");
});
document.querySelector("#paper").addEventListener("click", function() {
  logUserChoice("paper");
});
document.querySelector("#scissors").addEventListener("click", function() {
  logUserChoice("scissors");
});

let getComputerChoice = () => {
  let randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
}}