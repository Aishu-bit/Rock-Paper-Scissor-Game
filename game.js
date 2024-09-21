let userScore = 0;
let compScore = 0;

const userScorePara = document.querySelector("#userscore");
const compScorePara = document.querySelector("#compscore");

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");


const showWinner = (userWin,userChoice,compChoice) =>{
        if(userWin)
        {
            userScore++;
            userScorePara.innerText = userScore;
            msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
            msg.style.backgroundColor = "#7400b8";
        }
        else
        {
            compScore++;
            compScorePara.innerText = compScore;
            msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
            msg.style.backgroundColor = "#7400b8";
        }
};


const genCompChoice = () =>{
    const options = ["rock" , "paper", "scissor"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
};

const gameDraw = () =>{
    msg.innerText = "Game was draw. Play again";
    msg.style.backgroundColor = "#7400b8";
}


const playGame = (userChoice) =>{
    //generate computer choice
    const compChoice = genCompChoice();

    //Game Starts

    if(userChoice === compChoice)
    {
        gameDraw();
    }
    else
    {
        let userWin = true;

        if (userChoice === "rock")
        {
            userWin = compChoice === "paper" ? false : true;
        }
        else if (userChoice === "paper")
        {
            userWin = compChoice === "scissor" ?false : true;
        }
        else
        {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }   
}

choices.forEach((choice) =>{
    choice.addEventListener("click",() =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});