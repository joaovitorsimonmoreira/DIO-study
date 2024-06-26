const state = {
  view: {
    squares: document.querySelectorAll('.square'),
    enemy: document.querySelector('.enemy'),
    timeLeft: document.querySelector('#timeLeft'),
    gameScore: document.querySelector('#gameScore'),
    gameLifes: document.querySelector('#gameLifes'),

  },

  values: {
    timeId: null,
    countDownTimerId: setInterval(countDown, 1000),
    enemyVelocity: 1000,
    hitPosition: 0,
    scoreValue: 0,
    currentTime: 60,
    lifes: 3,

  },
}


// function escolherDificuldade(){
//   let escolha = document.getElementById('dificulty').value;
//   let vel;

//   if(escolha == "easy"){
//     vel = 1000

//   } else if(escolha == "medium"){
//     vel = 700

//   }else if(escolha == "hard"){
//     vel = 500

//   }else if(escolha == "not try"){
//     vel = 300
//   }else{
//     vel = 1000
//   }
//   return state.values.enemyVelocity = vel
// }

// function iniciarJogo(){
  
  

   

//   let novaURL = '//127.0.0.1:5501/projetosJavascript/gameDetonaRalph/html/index.html?enemyVelocity=' +escolherDificuldade();

  
//   return novaURL;
  
// }

// function startButton(){
//   let novaURL = iniciarJogo();
//   window.location.href = novaURL;
// }
// document.getElementById('startButton').addEventListener('click', function() {
//   initialize();
// });

function playSound(Sound){
  let audio = new Audio(`../audios/${Sound}`);
  audio.play();

  audio.volume = 0.2;
}

function countDown(){
  state.values.currentTime--;
  state.view.timeLeft.textContent = state.values.currentTime;

  if(state.values.currentTime <= 0){
    alert(`Game over!, o seu resultado foi ${state.values.scoreValue}`);
    state.view.gameScore.textContent = 0;
    state.values.scoreValue = 0;
    state.view.gameLifes.textContent = 3;
    state.values.lifes = 3;
    state.values.currentTime = 61;
  }
}

function randomSquare(){
  state.view.squares.forEach((square) =>{
    square.classList.remove('enemy');
  })

  let randomNumber = Math.floor(Math.random() * 9);
  let randomSquare = state.view.squares[randomNumber];

  randomSquare.classList.add('enemy');
  state.values.hitPosition = randomSquare.id;
}
 function moveEnemy(){   state.values.timeId = setInterval(randomSquare,state.values.enemyVelocity) }
// function moveEnemy() {
//   state.values.timeId = setInterval(() => {
//     randomSquare();
//   },escolherDificuldade());
// }

function addListenerHitBox(){
  state.view.squares.forEach((square) => {
    square.addEventListener("mousedown", () => {
      if(square.id === state.values.hitPosition){
        state.values.scoreValue++;
        state.view.gameScore.textContent = state.values.scoreValue;
        state.values.hitPosition = null;
        playSound('hit.m4a');
      }else{
        state.values.lifes--;
        state.view.gameLifes.textContent = state.values.lifes
        

        if(state.values.lifes === 0){
          clearInterval(state.values.lifes);
          alert(`Game over!, o seu resultado foi ${state.values.scoreValue}`);
          state.view.gameScore.textContent = 0;
          state.values.scoreValue = 0;
          state.view.gameLifes.textContent = 3;
          state.values.lifes = 3;
          state.values.currentTime = 61;
        }
        
      }
    })
  })
}

function initialize(){
  
  moveEnemy();
  addListenerHitBox();
}



initialize();