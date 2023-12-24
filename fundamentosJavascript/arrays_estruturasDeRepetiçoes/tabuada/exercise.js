/*
crie um programa que ao informa o numero, mostre a tabuada do mesmo,
*/



function calcularTabuada(numero){
 

  for (let index = 0; index <= 10; index++) {

    let resultado = numero * index;

    console.log(`${numero} x ${index} = ${resultado}`);
    
  }
}

calcularTabuada(9);


