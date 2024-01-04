let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user");
const compScorePara = document.querySelector("#comp");
compScore
const genCompChoice = () => {
   const options = ["rock", "paper", "scissors"];
   let c = Math.floor(Math.random() * 3);
   return options[c];
}
const drawGame = () => {

   msg.innerText = "match is draw !😒 Play again";
   msg.style, backgroundColor = "black";
};
const showWinner = (userWin) => {
   if (userWin === true) {

      msg.innerText = 'You win ! wohoo👍'
      msg.style.backgroundColor = "green";
      userScore++;
      userScorePara.innerText = userScore;
      msg.style.borderRadius = "5rem";

   }
   else {
      msg.innerText = 'you loose 🤞';
      msg.style.backgroundColor = "red";
      compScore++;
      compScorePara.innerText = compScore;
      msg.style.borderRadius = "5rem";
   }
}

const playGame = (userchoice) => {
   const compChoices = genCompChoice();
   if (userchoice === compChoices) {
      drawGame();
   } else {
      let userWin = true;
      if (userchoice === "rock") {
         userWin = compChoices === "paper" ? false : true;
      } else if (userchoice === "paper") {
         userWin = compChoices === "scissors" ? false : true;
      }
      else if (userchoice === "scissors") {
         userWin = compChoices === "rock" ? false : true;
      }
      showWinner(userWin);
   }


}
choices.forEach((choice) => {
   console.log(choice);
   choice.addEventListener("click", () => {
      const userchoice = choice.getAttribute("id");
      playGame(userchoice);
   })
})