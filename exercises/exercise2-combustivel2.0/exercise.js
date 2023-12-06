/*  
Faça um programa para calcular o valor gasto em uma viagem.

Voçê tera 5 variaveis:
1- Preço do etanol
2- Preço da gasolina
3- Tipo do combustivel no veiculo
4- Distancia por litro
5- Distancia percorrida na viagem

imprima no console o valor gasto na viagem.
*/

const precoEtanol = 4.59;
const precoGasolina = 5.78;
const combustivelVeiculo = "gasolina";
const distanciaPorLitro = 12;
const distanciaPercorrida = 145;

const custoEtanol = (distanciaPercorrida/distanciaPorLitro)*precoEtanol;

const custoGasolina = (distanciaPercorrida/distanciaPorLitro)*precoGasolina;

if(combustivelVeiculo === "gasolina"){
  console.log(`o preço gasto em gasolina sera $${custoGasolina} reais`)
}else if(combustivelVeiculo ==='etanol'){
  console.log(`o preço gasto em etanol sera $${custoEtanol} reais`)
}else{
  console.log('verifique os dados')
}



