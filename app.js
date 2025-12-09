let level=0;
let start=false;
let highScore=1;
let ranSequence=[];
let userSequence=[];
let h2=document.querySelector(".instruction");
let high=document.querySelector(".high");
let colors=["red", "green","yellow","purple"];
function levelUp(){
    userSequence=[];
    level++
    start=true;
    h2.innerText=`Level ${level}`;
    let ranIdx=Math.floor(Math.random()*3);
    let ranColor=colors[ranIdx];
    let btn=document.querySelector(`.${ranColor}`);
    ranSequence.push(ranColor);
    console.log(ranSequence);
    flashColor(btn);
}

document.addEventListener("keypress",function(){
    if(start==false){
        levelUp();
    }
});
function flashColor(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 350);  
}

function userClick(){
    if(start==true){
    flashColor(this);
    let color=this.getAttribute("id");
    console.log(color);
    userSequence.push(color);
    check(userSequence.length-1);
    }
}

let btnAll=document.querySelectorAll(".color");
for(btn of btnAll){
    btn.addEventListener("click",userClick);
}

function check(idx){
    if(userSequence[idx]===ranSequence[idx]){
        if(userSequence.length==ranSequence.length){
            setTimeout(levelUp,1000);
        }
    }
    else{
        h2.innerText="Game over ! Press any key to start again.";
        if(highScore<level){
            highScore=level;
            high.innerHTML=`<b>High Score:${highScore}</b>`;
        }
        let body=document.querySelector("body");
        body.classList.add("flashOver");
        setTimeout(function(){
            body.classList.remove("flashOver");
        },350);
        reset();
    }

}
function reset(){
    level=0;
    start=false;
    ranSequence=[];
    userSequence=[];
}





