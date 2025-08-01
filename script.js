let gameSeq = [];
let userSeq = [];

let btn = ["yellow","red","purple","green"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");      

document.addEventListener("keypress", startGame);
document.addEventListener("touchend", startGame, { once: true }); 

function startGame() {
    if (!started) {
        started = true;
        levelUp();
    }
}

function levelUp() {
    userSeq = [];                                           
    level++;                                                     
    h2.innerText = `level ${level}`;                                

    let randIdx = Math.floor(Math.random() * 4);                       
    let randColor = btn[randIdx];                                     
    let randBtn = document.querySelector(`.${randColor}`);            
    gameSeq.push(randColor);                                          
    console.log(gameSeq);                                             

    gameflash(randBtn);                                       
}

function gameflash(btn) {
    btn.classList.add("flash");                              

    setTimeout(function () {
        btn.classList.remove("flash");                      
    }, 250);
}

let allbtns = document.querySelectorAll(".btn");
for (button of allbtns){                                       
    button.addEventListener("click", btnpress);               
}

function btnpress(){                    
    let btn = this;                         
    userflash(btn);                         

    let userColor = btn.getAttribute("id");                       
    userSeq.push(userColor);                                         

    checkans(userSeq.length-1);                                      
}

function userflash(btn) {
    btn.classList.add("userflash");                          

    setTimeout(function () {
        btn.classList.remove("userflash");                          
    }, 250);
}

function checkans(idx){
    if(userSeq[idx] === gameSeq[idx]){                            
        if(userSeq.length == gameSeq.length){                           
            setTimeout(levelUp,1000);                                 
        }
    }else{                                                            
        h2.innerHTML = `Game Over! Your score was <b>${level}</b> <br> press any key to start again.`;
        document.querySelector("body").style.backgroundColor = "red";                                   
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";                              
        },150); 
        reset();                                                                 
    }

}

function reset(){                          
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}






