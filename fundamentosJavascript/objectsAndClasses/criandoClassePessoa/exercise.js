/* 
Crie uma classe para representar pessoas. Essa classe deve conter:
1-nome;
2- peso;
3-altura;

essa classe deve ser capaz de calcular o IMC da pessoa(peso/altura²).

instancie uma pessoa chamada josé, que tenha 70kg, 1,75 de altura.
*/

/*
IMC para adultos:
- abaixo de 18.5, abaixo do peso
- entre 18.5 e 25, peso normal
- entre 25 e 30, acima do peso
- entre 30 e 40, obeso
- acima de 40, obesidade grave
*/

class Pessoa{
  nome;
  peso;
  altura;

  constructor(nome,peso,altura){
    this.nome = nome;
    this.peso = peso;
    this.altura = altura;
  }

  calcularImc(){

    return this.peso/(this.altura* this.altura);
  }

  classificarImc(){
    if(this.calcularImc() < 18.5){
      return `seu imc é ${this.calcularImc()}, você está abaixo do peso 
      ideal`

    }else if(this.calcularImc() >= 18.5 && this.calcularImc()<=25){
      return  `seu imc é ${this.calcularImc()}, você está no peso ideal`

    }else if(this.calcularImc() >= 25 && this.calcularImc() <= 30){
      `seu imc é ${this.calcularImc()}, você está acima do peso ideal`

    }else if(this.calcularImc() >= 30 && this.calcularImc() <= 40){
      `seu imc é ${this.calcularImc()}, você está obeso`

    }else if(this.calcularImc() > 40){
      `seu imc é ${this.calcularImc()}, você está com obesidade grave`
    }

  }
  

}

const jose= new Pessoa('josé', 70, 1.75);

console.log(jose);

console.log(jose.classificarImc());

const joao = new Pessoa('joão',93,1.79);

console.log(joao);
console.log(joao.calcularImc());
console.log(joao.classificarImc());
