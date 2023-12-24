/*
faça um algoritimo, que mostre a media das 3 notas do aluno durante o semestre e demonstre seu resultado

media= (nota 1+nota 2+ nota 3)/3

media de menor que 5= reprovação

media entre 5 e 7, recuperação

media acima de 7, aprovado
 */

//notas

let primeiroBimestre= 10;
let segundoBimestre= 8;
let terceiroBimestre= 5;

let mediaNota= (primeiroBimestre+segundoBimestre+terceiroBimestre)/3;


if(mediaNota>7){
  console.log(`sua media de notas foi ${mediaNota} aprovado`)
}else if(mediaNota >= 5 && mediaNota <= 7){
  console.log(`sua media de notas foi ${mediaNota} recuperação`)
}else if(mediaNota < 5){
  console.log(`sua media de notas foi ${mediaNota} reprovado`)
}