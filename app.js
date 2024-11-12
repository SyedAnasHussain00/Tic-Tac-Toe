let boxes = document.querySelectorAll(".box");
let restbtn = document.querySelector("#rest");
let newbtn = document.querySelector("#new");
let msgCont = document.querySelector(".msg-cont");
let p = document.querySelector("#msg");

let moveO = true;

const WinPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const restGame = () => {
    moveO = true;
    enableboxes();
    msgCont.classList.add("hide");
}

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (moveO) {
      // Player O
      box.innerHTML = "O";
      moveO = false;
    } else {
      // Player X
      box.innerHTML = "X";
      moveO = true;
    }
    box.disabled = true;

    checkWinner();
  });
});

const disableboxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}

const enableboxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerHTML = "";
    }
}

const showWinner = (Winner) => {
    p.innerHTML = `WINNER ${Winner}`;
    msgCont.classList.remove("hide");
    disableboxes();
}


const checkWinner = () => {
  for (let pattern of WinPatterns) {
    let pos1Val = boxes[pattern[0]].innerHTML;
    let pos2Val = boxes[pattern[1]].innerHTML;
    let pos3Val = boxes[pattern[2]].innerHTML;

  if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
    if(pos1Val === pos2Val && pos2Val === pos3Val){
        console.log(`winner`, pos1Val)
        showWinner (pos1Val);
    }
  }
 }
};

newbtn.addEventListener("click", restGame);
restbtn.addEventListener("click", restGame);