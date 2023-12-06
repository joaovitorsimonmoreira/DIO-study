/*
faça um algoritimo, que mostre a media das 3 notas do aluno durante o semestre e demonstre seu resultado

media= (nota 1+nota 2+ nota 3)/3

media de menor que 5= reprovação

media entre 5 e 7, recuperação

media acima de 7, aprovado
 */

//notas

function mediaNota(notaPrimeiroBi,notaSegundoBi,notaTerceiroBi){

   return (notaPrimeiroBi+notaSegundoBi+notaTerceiroBi)/3;
}
function avaliarMedia(){
  if(resultadoMedia>7){
    return (`sua media de notas foi ${resultadoMedia} aprovado`)
  }else if(resultadoMedia >= 5 && resultadoMedia <= 7){
    return (`sua media de notas foi ${resultadoMedia} recuperação`)
  }else if(resultadoMedia < 5){
    return (`sua media de notas foi ${resultadoMedia} reprovado`)
  }

}

let resultadoMedia= mediaNota(12,8,5);




console.log(avaliarMedia());


