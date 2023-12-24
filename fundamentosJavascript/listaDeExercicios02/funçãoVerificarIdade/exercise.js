let dataAtual= new Date();
let ano= dataAtual.getFullYear();
let anoDeNascimento= 2004

function verificarIdade(){
  return ano-anoDeNascimento
}

function maioridade(){
  if (verificarIdade() > 18){
    console.log(`Você tem ${verificarIdade()} anos, portanto é maior de idade`)

  }else{
    console.log(`Você tem ${verificarIdade()} anos, portanto é menor de idade`)
  }
}

maioridade();