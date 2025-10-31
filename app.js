let boxes = document.querySelectorAll(".box");
let msg = document.getElementById("msg");
let menuBtn = document.getElementById("menuBtn")
let menu = document.getElementById("menu");

menuBtn.addEventListener("click",()=>{
    menu.classList.toggle("hidden")
})

let 
winPattern =[[0, 1, 2],
             [3, 4, 5],
              [6, 7, 8],
       [0, 3, 6],
[1, 4, 7],
[2, 5, 8],
[0, 4, 8],
[2, 4, 6]

]

let turnX = true;






boxes.forEach((box)=>{
    
    box.addEventListener("click",()=>{
        if (box.innerText !== "")return;
        if(turnX){
            box.innerText="X";
            turnX = false;
        }else{
            box.innerText="O";
            turnX = true;
            
        }
        
        checkWinner();
        checkDraw();
    })
    
    
})

const checkWinner = ()=>{
    for (let patt of winPattern){
       let val1 = boxes[patt[0]].innerText;
        let val2 = boxes[patt[1]].innerText;
        let val3= boxes[patt[2]].innerText;
        
        if (val1 !== "" && val2  !== "" && val3 != ""){
            
         if ( val1 === val2 && val2 === val3){
             msg.innerText = (`winner is ${val1}`)
             
             boxes.forEach((box)=> box.disabled= true);
             return;
             
         }
        }     
    }
}

const checkDraw =()=>{
    let allFilled = true;
    
    boxes.forEach(box=>{
        if(box.innerText === ""){
            allFilled = false;
        }
    })
    if (allFilled){
            msg.innerText = "its draw"
        }
    
}

document.getElementById("reset").addEventListener("click", ()=>{
    boxes.forEach(box => {
        box.innerText ="",
        box.disabled = false;
    })
    msg.innerText = "";
    turnX = true;
    
})