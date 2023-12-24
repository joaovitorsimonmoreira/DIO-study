/*
criei um programa para monstrar apenas numeros pares de um lista.
*/

const lista = [1,2,5,6,8,9,10,12]

function numeroPar(){

  

  for (let index = 0; index < lista.length; index++) {
    
    if(lista[index]% 2== 0){
      console.log(`${lista[index]} é par`);
    }
    
  }
}

numeroPar();
