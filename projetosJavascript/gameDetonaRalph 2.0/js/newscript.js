const startButton = document.getElementById("startButton");
const botaoEscolha = document.getElementById("botaoEscolha");
const bodyContent = document.getElementById('body');
const content = document.getElementById('content');

const criarDinamicamente = [
  {
    criarDiv: document.createElement('div'),
  }
]



botaoEscolha.addEventListener('click',()=>{
  let escolhaDaDificuldade = document.getElementById("escolhaDaDificuldade");

  let velocidadeDoInimigo;

  if(escolhaDaDificuldade.value =="easy"){
    velocidadeDoInimigo = 1000;

    alert(`você escolheu a dificuldade ${escolhaDaDificuldade.value}, boa sorte!`);

  }else if(escolhaDaDificuldade.value =="medium"){
    velocidadeDoInimigo = 800;

    alert(`você escolheu a dificuldade ${escolhaDaDificuldade.value}, boa sorte!`);

  }else if(escolhaDaDificuldade.value =="hard"){
    velocidadeDoInimigo = 700;

    alert(`você escolheu a dificuldade ${escolhaDaDificuldade.value}, boa sorte!`);

  }else if(escolhaDaDificuldade.value =="not try"){
    velocidadeDoInimigo = 500;

    alert(`você escolheu a dificuldade ${escolhaDaDificuldade.value}, boa sorte!`);
  }

  return velocidadeDoInimigo;
})

startButton.addEventListener('click', ()=>{
  bodyContent.removeChild(content)

})