let userscore=0;
let compscore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userpara=document.querySelector("#user");
const comppara=document.querySelector("#comp");

const draw=()=>{
    msg.innerText="It's a Tie!! Play Again";
    msg.style.backgroundColor="black";
}

const getcomputerchoice=()=>{
    let options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3); //0-2 random index
    return options[randIdx]; //returning computer choice
};

const showWinner=(userwin,userchoice,compchoice)=>{
    if(userwin){
        userscore++;
        userpara.innerText=userscore;
        msg.innerText=`You Win!! Your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor="Green";
    }
    else{
        compscore++;
        comppara.innerText=compscore;
        msg.innerText=`You Lose!! ${compchoice} beats your ${userchoice}`;
        msg.style.backgroundColor="red";
    }
}

const playgame=(userchoice)=>{
    const compchoice=getcomputerchoice();
    if(userchoice===compchoice){
        draw();
    }
    else{
        let userwin=true;
        if(userchoice==="rock"){
            //computer-->scissors,paper
            console.log(compchoice);
            userwin = compchoice === "paper" ? false : true;
        }
        else if(userchoice==="paper"){
            //computer-->scissors,rock
            console.log(compchoice);
            userwin = compchoice === "rock" ? true : false;
        }
        else{
            //computer-->rock,paper
            console.log(compchoice);
            userwin = compchoice === "rock" ? false : true;
        }
        showWinner(userwin,userchoice,compchoice);
    }
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        console.log("choice was clicked", userchoice);
        playgame(userchoice);
    });
});