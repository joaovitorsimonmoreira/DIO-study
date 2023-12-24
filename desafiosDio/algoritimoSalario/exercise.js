/*
Crie um algoritimo que ao receber o valor do salario bruto, calcule e imprima o valor do salario + beneficios.

calculo:(valor bruto do salario - percentual de impostos + beneficios)

percentual de imposto:

de R$ 0 a 1100,00 = 5%;
de R$ 1100,01 a 2500,00 = 10%;
maior que 2500 = 15%;

*/



function calcularSalario(salario,beneficios){
  if(salario <= 1100){
    //alicota de 5%
    let alicota = salario * 0.05
    let resultado = (salario - alicota) + beneficios;
    

    return `o seu salario total sera R$${resultado}, teve uma alicota de 5% equivalente a R$${alicota}`;

  }else if(salario > 1100 && salario <= 2500){
    //alicota de 10%
    let alicota = salario * 0.1
    let resultado = (salario - alicota) + beneficios;
    

    return `o seu salario total sera R$${resultado}, teve uma alicota de 10% equivalente a R$${alicota}`;

  }else if(salario > 2500){
    //alicota de 15%
    let alicota = salario * 0.15
    let resultado = (salario - alicota) + beneficios;
    

    return `o seu salario total sera R$${resultado}, teve uma alicota de 15% equivalente a R$${alicota}`;
  }else{
    return `[ERRO] verifique os dados`
  }


}

console.log(calcularSalario(2501,200));