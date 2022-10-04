let elements = Array.from(document.querySelectorAll(".enter"));

let resetBtn = document.querySelector("#reset-btn");

let resultCard = document.querySelector("#resultCard");

let boxes = Array.from(document.querySelectorAll('#box1 , #box2 , #box3 , #box4 , #box5 , #box6 , #box7 , #box8 , #box9'));


resetBtn.disabled = true;

let mark = "X";
boxes.map((box)=>{
    box.addEventListener("click",()=>{
        resetBtn.disabled = false;
        box.innerHTML = mark;
        box.style.pointerEvents = "none";
        if (mark === "X"){
            mark = "O";
        }
        else{
            mark = "X";
        }
        game();
    })
})

// Game Logic

let game = () => {
    if (boxes[0].innerHTML === boxes[1].innerHTML && boxes[1].innerHTML === boxes[2].innerHTML && boxes[0].innerHTML !== "" && boxes[1].innerHTML !== "" && boxes[2].innerHTML !== ""){
        boxes[0].style.backgroundColor = "green";
        boxes[1].style.backgroundColor = "green";
        boxes[2].style.backgroundColor = "green";
        boxes[3].style.backgroundColor = "red";
        boxes[4].style.backgroundColor = "red";
        boxes[5].style.backgroundColor = "red";
        boxes[6].style.backgroundColor = "red";
        boxes[7].style.backgroundColor = "red";
        boxes[8].style.backgroundColor = "red";
        boxes[3].style.pointerEvents = "none";
        boxes[4].style.pointerEvents = "none";
        boxes[5].style.pointerEvents = "none";
        boxes[6].style.pointerEvents = "none";
        boxes[7].style.pointerEvents = "none";
        boxes[8].style.pointerEvents = "none";

        resultCard.style.visibility  = "visible"
        resultCard.innerHTML = mark === "X" ? "O - Player Won Match" : "X - Player Won Match"; 
    }
    else if (boxes[0].innerHTML === boxes[3].innerHTML && boxes[3].innerHTML === boxes[6].innerHTML && boxes[0].innerHTML !== "" && boxes[3].innerHTML !== "" && boxes[6].innerHTML !== ""){
        boxes[0].style.backgroundColor = "green";
        boxes[1].style.backgroundColor = "red";
        boxes[2].style.backgroundColor = "red";
        boxes[3].style.backgroundColor = "green";
        boxes[4].style.backgroundColor = "red";
        boxes[5].style.backgroundColor = "red";
        boxes[6].style.backgroundColor = "green";
        boxes[7].style.backgroundColor = "red";
        boxes[8].style.backgroundColor = "red";

        boxes[1].style.pointerEvents = "none";
        boxes[4].style.pointerEvents = "none";
        boxes[5].style.pointerEvents = "none";
        boxes[2].style.pointerEvents = "none";
        boxes[7].style.pointerEvents = "none";
        boxes[8].style.pointerEvents = "none";

        resultCard.style.visibility  = "visible"
        resultCard.innerHTML = mark === "X" ? "O - Player Won Match" : "X - Player Won Match"; 
    }
    else if (boxes[0].innerHTML === boxes[4].innerHTML && boxes[4].innerHTML === boxes[8].innerHTML && boxes[0].innerHTML !== "" && boxes[4].innerHTML !== "" && boxes[8].innerHTML !== ""){
        boxes[0].style.backgroundColor = "green";
        boxes[1].style.backgroundColor = "red";
        boxes[2].style.backgroundColor = "red";
        boxes[3].style.backgroundColor = "red";
        boxes[4].style.backgroundColor = "green";
        boxes[5].style.backgroundColor = "red";
        boxes[6].style.backgroundColor = "red";
        boxes[7].style.backgroundColor = "red";
        boxes[8].style.backgroundColor = "green";

        boxes[3].style.pointerEvents = "none";
        boxes[1].style.pointerEvents = "none";
        boxes[5].style.pointerEvents = "none";
        boxes[6].style.pointerEvents = "none";
        boxes[7].style.pointerEvents = "none";
        boxes[2].style.pointerEvents = "none";

        resultCard.style.visibility  = "visible"
        resultCard.innerHTML = mark === "X" ? "O - Player Won Match" : "X - Player Won Match"; 
    }
    else if (boxes[1].innerHTML === boxes[4].innerHTML && boxes[4].innerHTML === boxes[7].innerHTML && boxes[4].innerHTML !== "" && boxes[1].innerHTML !== "" && boxes[7].innerHTML !== ""){
        boxes[0].style.backgroundColor = "red";
        boxes[1].style.backgroundColor = "green";
        boxes[2].style.backgroundColor = "red";
        boxes[3].style.backgroundColor = "red";
        boxes[4].style.backgroundColor = "green";
        boxes[5].style.backgroundColor = "red";
        boxes[6].style.backgroundColor = "red";
        boxes[7].style.backgroundColor = "green";
        boxes[8].style.backgroundColor = "red";

        boxes[3].style.pointerEvents = "none";
        boxes[0].style.pointerEvents = "none";
        boxes[5].style.pointerEvents = "none";
        boxes[6].style.pointerEvents = "none";
        boxes[2].style.pointerEvents = "none";
        boxes[8].style.pointerEvents = "none";

        resultCard.style.visibility  = "visible"
        resultCard.innerHTML = mark === "X" ? "O - Player Won Match" : "X - Player Won Match"; 
    }
    else if (boxes[2].innerHTML === boxes[4].innerHTML && boxes[4].innerHTML === boxes[6].innerHTML && boxes[2].innerHTML !== "" && boxes[4].innerHTML !== "" && boxes[6].innerHTML !== ""){
        boxes[0].style.backgroundColor = "red";
        boxes[1].style.backgroundColor = "red";
        boxes[2].style.backgroundColor = "green";
        boxes[3].style.backgroundColor = "red";
        boxes[4].style.backgroundColor = "green";
        boxes[5].style.backgroundColor = "red";
        boxes[6].style.backgroundColor = "green";
        boxes[7].style.backgroundColor = "red";
        boxes[8].style.backgroundColor = "red";

        boxes[3].style.pointerEvents = "none";
        boxes[0].style.pointerEvents = "none";
        boxes[5].style.pointerEvents = "none";
        boxes[1].style.pointerEvents = "none";
        boxes[7].style.pointerEvents = "none";
        boxes[8].style.pointerEvents = "none";

        resultCard.style.visibility  = "visible"
        resultCard.innerHTML = mark === "X" ? "O - Player Won Match" : "X - Player Won Match"; 
    }
    else if (boxes[2].innerHTML === boxes[5].innerHTML && boxes[5].innerHTML === boxes[8].innerHTML && boxes[2].innerHTML !== "" && boxes[5].innerHTML !== "" && boxes[8].innerHTML !== ""){
        boxes[0].style.backgroundColor = "red";
        boxes[1].style.backgroundColor = "red";
        boxes[2].style.backgroundColor = "green";
        boxes[3].style.backgroundColor = "red";
        boxes[4].style.backgroundColor = "red";
        boxes[5].style.backgroundColor = "green";
        boxes[6].style.backgroundColor = "red";
        boxes[7].style.backgroundColor = "red";
        boxes[8].style.backgroundColor = "green";

        boxes[3].style.pointerEvents = "none";
        boxes[0].style.pointerEvents = "none";
        boxes[4].style.pointerEvents = "none";
        boxes[1].style.pointerEvents = "none";
        boxes[7].style.pointerEvents = "none";
        boxes[6].style.pointerEvents = "none";

        resultCard.style.visibility  = "visible"
        resultCard.innerHTML = mark === "X" ? "O - Player Won Match" : "X - Player Won Match"; 
    }
    else if (boxes[3].innerHTML === boxes[4].innerHTML && boxes[4].innerHTML === boxes[5].innerHTML && boxes[3].innerHTML !== "" && boxes[4].innerHTML !== "" && boxes[5].innerHTML !== ""){
        boxes[0].style.backgroundColor = "red";
        boxes[1].style.backgroundColor = "red";
        boxes[2].style.backgroundColor = "red";
        boxes[3].style.backgroundColor = "green";
        boxes[4].style.backgroundColor = "green";
        boxes[5].style.backgroundColor = "green";
        boxes[6].style.backgroundColor = "red";
        boxes[7].style.backgroundColor = "red";
        boxes[8].style.backgroundColor = "red";

        boxes[0].style.pointerEvents = "none";
        boxes[1].style.pointerEvents = "none";
        boxes[2].style.pointerEvents = "none";
        boxes[6].style.pointerEvents = "none";
        boxes[7].style.pointerEvents = "none";
        boxes[8].style.pointerEvents = "none";

        resultCard.style.visibility  = "visible"
        resultCard.innerHTML = mark === "X" ? "O - Player Won Match" : "X - Player Won Match"; 
    }
    else if (boxes[6].innerHTML === boxes[7].innerHTML && boxes[7].innerHTML === boxes[8].innerHTML && boxes[6].innerHTML !== "" && boxes[7].innerHTML !== "" && boxes[8].innerHTML !== ""){
        boxes[0].style.backgroundColor = "red";
        boxes[1].style.backgroundColor = "red";
        boxes[2].style.backgroundColor = "red";
        boxes[3].style.backgroundColor = "red";
        boxes[4].style.backgroundColor = "red";
        boxes[5].style.backgroundColor = "red";
        boxes[6].style.backgroundColor = "green";
        boxes[7].style.backgroundColor = "green";
        boxes[8].style.backgroundColor = "green";

        boxes[0].style.pointerEvents = "none";
        boxes[1].style.pointerEvents = "none";
        boxes[2].style.pointerEvents = "none";
        boxes[3].style.pointerEvents = "none";
        boxes[4].style.pointerEvents = "none";
        boxes[5].style.pointerEvents = "none";

        resultCard.style.visibility  = "visible"
        resultCard.innerHTML = mark === "X" ? "O - Player Won Match" : "X - Player Won Match"; 
    }
    
    else if ( boxes[0].innerHTML !== "" && boxes[1].innerHTML !== "" && boxes[2].innerHTML !== "" && boxes[3].innerHTML !== "" && boxes[4].innerHTML !== "" && boxes[5].innerHTML !== "" && boxes[6].innerHTML !== "" && boxes[7].innerHTML !== "" && boxes[8].innerHTML !== ""){
        boxes[0].style.backgroundColor = "yellow";
        boxes[1].style.backgroundColor = "yellow";
        boxes[2].style.backgroundColor = "yellow";
        boxes[3].style.backgroundColor = "yellow";
        boxes[4].style.backgroundColor = "yellow";
        boxes[5].style.backgroundColor = "yellow";
        boxes[6].style.backgroundColor = "yellow";
        boxes[7].style.backgroundColor = "yellow";
        boxes[8].style.backgroundColor = "yellow";

        boxes[0].style.pointerEvents = "none";
        boxes[1].style.pointerEvents = "none";
        boxes[2].style.pointerEvents = "none";
        boxes[3].style.pointerEvents = "none";
        boxes[4].style.pointerEvents = "none";
        boxes[5].style.pointerEvents = "none";
        boxes[6].style.pointerEvents = "none";
        boxes[7].style.pointerEvents = "none";
        boxes[8].style.pointerEvents = "none";

        resultCard.style.visibility  = "visible"
        resultCard.innerHTML = "Match Draw"
    }
}


// Reset Function

const reset = () => {
    resetBtn.disabled = true;
    elements.map((ele)=>{
        ele.innerHTML = "";
        ele.style.backgroundColor = "rgb(244, 243, 240)";
        ele.style.pointerEvents = "auto";
    })
    resultCard.style.visibility  = "hidden";
    resultCard.innerHTML = "";
}