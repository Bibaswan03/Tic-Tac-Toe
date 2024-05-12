let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#resetbtn");
let turn0=true;
let c=0;
const winpatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
let result=document.querySelector("#result")
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if(turn0)
            {
                box.innerText='X';
                turn0=false;
                result.innerText="Turn : O";
                console.log(result.innerText);
            }
            else{
                box.innerText='O';
                turn0=true;
                result.innerText="Turn : X";
            }
             box.disabled=true;
        checkwinner();
        c++;
            if(c==9)
            {
                result.innerText="Match draw";
            }
    })
})

reset.addEventListener("click",()=>{
    for(let box of boxes){
        box.innerText="";
    }
    reset.innerText="Reset game";
    result.innerText="Turn : X";
    enable();
    turn0=true;
    c=0;
})
const disable=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enable=()=>{
    for(let box of boxes){
        box.disabled=false;
    }
}
const checkwinner=()=>{
    for(let pattern of winpatterns)
        {
            let t1=boxes[pattern[0]].innerText;
            let t2=boxes[pattern[1]].innerText;
            let t3=boxes[pattern[2]].innerText;
            //console.log(boxes[pattern[0]].innerText , boxes[pattern[1]].innerText , boxes[pattern[2]].innerText)
            if(t1!="" && t2!="" && t3!="")
                {
                    if(t1==t2 && t2==t3)
                        {
                            result.innerText="Winner : "+t1;
                            reset.innerText="Play Again";
                            disable();
                        }
                }
        }
}