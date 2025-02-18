console.log("Welcome to Tic Tac Toe")
let music = new Audio("Music.mp3")
let audioTurn = new Audio("Ting.mp3")
let gameover = new Audio("gameover.mp3")
let gamewin = new Audio("gamewin.mp3") 
let turn = "X"
let isgameover = false;

// Function to change the turn
const changeTurn = ()=>{
    return turn === "X"? "0": "X"
}

// Function to check for a win
const checkWin = ()=>{
  let boxtext = document.getElementsByClassName('boxtext');
  let wins = [
    [0,1,2,5,10,0],
    [3,4,5,5,30,0],
    [6,7,8,5,50,0],
    [0,3,6,-15,30,90],
    [1,4,7,5,30,90],
    [2,5,8,25,30,90],
    [0,4,8,5,30,45],
    [2,4,6,5,30,135]
    ]
    
  wins.forEach(e =>{
    if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && boxtext[e[0]].innerText !== ""){
      document.querySelector(".info").innerText = boxtext[e[0]].innerText + " won The Game "
      isgameover=true; 
      document.querySelector('.container').style['pointer-events'] = 'none';
      document.querySelector('.container').style['user-select'] = 'none';
      document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width='200px';
      document.querySelector(".line").style.width = '50vw';
      document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
      gamewin.play();
    }
  })
}
//game logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
      let boxtext = element.querySelector('.boxtext');
      element.addEventListener('click', () => {
         if (boxtext.innerText === '') {
           boxtext.innerText = turn;
           turn=changeTurn();
           audioTurn.play();
           checkWin();
           if(!isgameover)
           {
           document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
          
           }
         }
    })
  })
  
  //add onclick listener to reset button
  reset.addEventListener('click',()=>{
      let boxtexts = document.querySelectorAll('.boxtext');
      Array.from(boxtexts).forEach(element =>{
        element.innerText=""
      });
      gamewin.pause();
      turn="X";
      isgameover=false
      document.querySelector(".line").style.width = '1vw';
      document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
      document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width='1px'
      document.querySelector('.container').style['pointer-events'] = 'visible';
      document.querySelector('.container').style['user-select'] = 'visible';
      
  })
