/*
Crie um programa, para calcular o gasto de uma viagem,
considerando os seguintes valores:
Preço do combustivel
Km por litro do veiculo
Distancia em km da viagem.
*/

/* const precoCombustivel = 5.5;
  const kmPorLitro = 4;
  const distanciaPercorrida = 20;
  
  
  let custo = (distanciaPercorrida/kmPorLitro)*precoCombustivel;
  
  console.log(`O preço gasto em gasolina sera ${custo}`);*/
  

function calcular(){

  var precoCombustivel= document.querySelector(precoCombustivel);
  var kmPorLitro = document.querySelector(kmPorLitro);
  var distanciaPercorrida = document.querySelector(distanciaPercorrida);
 

  var custo=(distanciaPercorrida/kmPorLitro)*precoCombustivel;

  alert(custo)
 
  

}

