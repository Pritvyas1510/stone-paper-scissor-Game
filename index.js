let userScore=0;
let compScore=0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg")
const userScorePara = document.querySelector("#User-score")
const compScorePara = document.querySelector("#comp-score")

const gencompchoice = () =>{

    const opetion =["Rook","Paper","Scissors"]
    const randidx=Math.floor(Math.random()*3);
    return opetion[randidx];
    
}

const drawgame = ()=>{
    msg.innerText="Game was Draw. Play again";
    msg.style.backgroundColor="#081b31"  
}
const showWinner = (userWin ,userChoice,compchoice)=>{

    if(userWin)
    {
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`You Win Your ${userChoice} Beats ${compchoice}`;
        msg.style.backgroundColor="green"  

    }
    else{
        compScore++;
        compScorePara.innerText=compScore;
        
        msg.innerText=`You Lose ${userChoice} Beats Your ${compchoice}`;
        
        msg.style.backgroundColor="red"  
    }
}

const playgame = (userChoice)=>{
    console.log("user choice = " ,userChoice)
    const compchoice = gencompchoice();
    console.log("Computer Choice =",compchoice)

if(userChoice === compchoice)
{
    drawgame();
}
else{
    let userWin =true

    if(userChoice === "Rook"){

        compchoice === "Paper"?false:true;

        }
        else if(userChoice === "Paper"){

            userWin=compchoice === "Scissors"?false:true
        }
        else
        {
           userWin= compchoice === "Rook"?false:true
        }
        showWinner(userWin,userChoice,compchoice)
    }
    
}
choices.forEach((choice) => {

    choice.addEventListener("click",()=>{
        const userChoice =choice.getAttribute("id")
        playgame(userChoice)
    })
});

