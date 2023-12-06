/*
criando progama para resolver o teorema de pitagoras

h²=ca²+co²
*/

let hipotenusa = 5;
let catetoAdjacente = 0;
let catetoOposto = 4;

if (hipotenusa === 0){
  console.log(Math.sqrt((catetoAdjacente**2)+(catetoOposto**2)))
}else if(catetoAdjacente === 0){
  console.log(Math.sqrt((hipotenusa**2)-(catetoOposto**2)))
}else if(catetoOposto === 0){
  console.log(Math.sqrt((hipotenusa**2)-(catetoAdjacente**2)))
}else{
  console.log('não tem valor inteiro.')
}