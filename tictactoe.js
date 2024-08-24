let boxes=document.querySelectorAll(".box")
let srtBtn=document.querySelector(".startbut")
let rstBtn=document.querySelector(".resetBtn")
let msg_container=document.querySelector(".msg-container")
let msg=document.querySelector(".winner")
let winPatern=[
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];
let player0=true;
let count=0;

const gameDraw=()=>{
    msg_container.classList.remove("hide")
    msg.innerText=`GAME WAS A DRAW`
    disableBut();
} 
const disableBut=()=>{
    for(let i of boxes){
        i.disabled=true;
    }
}
const enbleBut=()=>{
    for(let i of boxes){
        i.disabled=false;
        i.innerText=""
    }
}
const showWinner=(win)=>{
    msg.innerText=`Congratulations ${win} `
    msg_container.classList.remove("hide")
    disableBut();

}
const checkWinner=()=>{
    for(let patt of winPatern){
        pt1=boxes[patt[0]].innerText
        pt2=boxes[patt[1]].innerText
        pt3=boxes[patt[2]].innerText
        if(pt1!="" && pt2!="" &&pt3!=""){
            if(pt1===pt2 && pt2===pt3){
                console.log(`The winner is ${pt1}`)
                showWinner(pt1);
                return true;
            }
        }
    }
}
boxes.forEach((bo)=>{
    bo.addEventListener("click",()=>{
        if(player0){
            bo.innerText="O"
            player0=false;
            
        }
        else{
            bo.innerText="X"
            player0=true;
           
        }
        bo.disabled=true;
        count++;
        
        let isWinner=checkWinner();

        if(count===9 && !isWinner){
            gameDraw();
        }
    })

})
const resetGame=()=>{
    player0=true;
    count=0;
    msg_container.classList.add("hide")
    enbleBut();
}
rstBtn.addEventListener("click",resetGame)
srtBtn.addEventListener("click",resetGame)
