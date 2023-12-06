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


function calcularImc(peso,altura){

  return peso/(altura*altura);
}

let imc= calcularImc(82,1.80);

function classificarImc(imc){
  if(imc <18.5){
    //- abaixo de 18.5, abaixo do peso
    return (`seu IMC é ${imc} você está abaixo do peso ideal`);
  
  }else if(imc >=18.5 && imc <=25){
    //- entre 18.5 e 25, peso normal
    return (`seu IMC é ${imc} você está no peso ideal`);
  
  }else if(imc >= 25 && imc <= 30){
    //- entre 25 e 30, acima do peso
    return (`seu IMC é ${imc} você está acima do peso ideal`);
  
  }else if(imc >=30 && imc <=40){
    //- entre 30 e 40, obeso
    return (`seu IMC é ${imc} você pode ser considerado obeso`);
  
  }else{
    //- acima de 40, obesidade grave
    return (`seu IMC é ${imc} você está com obesidade grave`);
    
  }
  
}
console.log(classificarImc(imc));

/*
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
*/

