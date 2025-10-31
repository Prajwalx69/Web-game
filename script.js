

alert("heyy this my 1st program usimg js 🤧")


const box = document.querySelector(".car");
    let x = 100, y = 400;
let score = document.getElementById("result");
    
    function move(direction){
        if ( direction === "up") y -= 10;
        if (direction === "down") y += 10;
        if (direction ===  "left") x -=10;
        if ( direction === "right") x += 10;
        
        box.style.top = y +"px";
        box.style.left = x + "px";
    }
    
    document.getElementById("up").onclick = () => move("up");
    document.getElementById("down").onclick =()=>  move("down");
    document.getElementById("left").onclick =()  =>move("left");
    document.getElementById("right").onclick =()    =>move("right");
   

    