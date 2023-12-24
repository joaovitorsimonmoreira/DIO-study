/*
1- crie uma classe para representar carros.

essa classe deve conter marca, cor, gasto medio de combustivel  por km. Crie um metedo que dado a quantidade de KM rodado e o preço do combustivel, nos de o preço da viagem
*/



class Carro{ // uma classe, sempre começa  com letra maiuscula.

  marca; //atributo, pode ser referenciado atraves da expressao "this"
  cor;
  kmPorLitro;

  constructor(marca,cor,kmPorLitro){ // serve para sinalizar atributos permanentes da classe

    this.marca= marca;
    this.cor= cor;
    this.kmPorLitro= kmPorLitro;

  }
  calcularGasto(valorCombustivel,distancia){ // uma função dentro de uma classe, se chama "método".

    return  (distancia/this.kmPorLitro)*valorCombustivel;
  }
  
}

const ferrari= new Carro('ferrari','amarela',8,);

console.log(ferrari);
console.log(ferrari.calcularGasto(5.5,70));

const palio = new Carro('fiat','amarelo',12);

console.log(palio);
console.log(palio.calcularGasto(5.5,180));


