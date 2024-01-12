
const openNewPage = () =>{
  window.location.href = 'inside.html';
} 


let boxes = document.querySelectorAll(".box");
let msg = document.getElementById('msg');
let newGameEnd = document.getElementById('newGameEnd');
let newGameStart = document.getElementById('newGameStart');
let msgContainer = document.getElementById('msgContainer');
let explain = document.querySelectorAll(".explain")

let winningPatterns = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
]
let count = 0;
let turnX = true;

boxes.forEach((box) =>{
  box.addEventListener("click",()=>{
    count++;
    // console.log(count);
    if(turnX){
      box.innerText = 'X';
      box.style.color = 'brown';
      turnX = false;
      box.disabled = true;
    }else{
      box.innerText = 'O';
      box.style.color = 'black';
      turnX = true;
      box.disabled = true;

    }

    checkResult();

  })
})

const checkResult = () =>{

  for (const pattern of winningPatterns) {

    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if(pos1Val != '' && pos2Val != ''&& pos3Val != ''){

      if(pos1Val === pos2Val && pos1Val === pos3Val){
      msg.innerText = `Congratulations!!! ${pos1Val} won!!!`;
      msg.style.display = 'block';
      newGameEnd.style.display = 'block';
      msgContainer.style.height = '90vh';
      explain.forEach((element)=>{element.style.display = 'none'});
      boxes.forEach((box)=>{
        box.disabled = true;
      })

    }
    else if(count == 9){
      msg.innerText = `Match is drawn!!!`;
      msg.style.display = 'block';
      newGameEnd.style.display = 'block';
      msgContainer.style.height = '90vh';
      explain.forEach((element)=>{element.style.display = 'none'});
    }



    }
    
  }
}

const refreshPage = () =>{
  window.location.reload();
}

const redirect = () =>{
  window.location.href = 'index.html';
}