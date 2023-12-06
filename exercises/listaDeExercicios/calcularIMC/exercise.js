/*
faça um algoritimo para calcular o IMC de uma pessoa.

IMC= é um critério da organização mundial da saude, para medir o peso ideal de um individuo

formula= peso/(altura²)

tabela de imc ideial:

IMC para adultos:
- abaixo de 18.5, abaixo do peso
- entre 18.5 e 25, peso normal
- entre 25 e 30, acima do peso
- entre 30 e 40, obeso
- acima de 40, obesidade grave
*/

let peso= 82;
let altura= 1.80;

let imc= peso/(altura*altura);//metodo simples, tambem é possivel usar uma biblioteca, ficando Math.pow(altura,2);(caso queria fazer potencias maiores ex> 10³²)

console.log(imc);

if(imc <18.5){
  //- abaixo de 18.5, abaixo do peso
  console.log(`seu IMC é ${imc} você está abaixo do peso ideal`);

}else if(imc >=18.5 && imc <=25){
  //- entre 18.5 e 25, peso normal
  console.log(`seu IMC é ${imc} você está no peso ideal`);

}else if(imc >= 25 && imc <= 30){
  //- entre 25 e 30, acima do peso
  console.log(`seu IMC é ${imc} você está acima do peso ideal`);

}else if(imc >=30 && imc <=40){
  //- entre 30 e 40, obeso
  console.log(`seu IMC é ${imc} você pode ser considerado obeso`);

}else{
  //- acima de 40, obesidade grave
  console.log(`seu IMC é ${imc} você está com obesidade grave`);
}

