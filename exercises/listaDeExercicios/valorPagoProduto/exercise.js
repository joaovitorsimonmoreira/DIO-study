/*
elabore um algoritmo para calcular quanto deve ser pago por um produto. Considerando o preço normal de etiqueta e a forma de pagamento.

utilize a tabela a seguir:

- a vista no debito, 10% de desconto;
- a vista no dinheiro ou pix, 15% de desconto;
- em duas vezes, preço normal;
- acima de duas vezes, 10% de juros;
*/

var formaDePagamento='parcelamentoEmDuasVezes';
let valorProduto= 45;

let debitoAvista= valorProduto*0.9;
let dinheiro= valorProduto*0.85;
let pix= valorProduto*0.85;
let parcelamentoDuasVezes= valorProduto;
let parcelamentoAcimaDuasVezes= valorProduto*1.10;

if(formaDePagamento==='dinheiro'){
  console.log(`Você esta pagando em ${formaDePagamento}, portanto o valor ira de $${valorProduto} para $${dinheiro}`);

}else if(formaDePagamento==='debito'){
  console.log(`Você esta pagando em ${formaDePagamento}, portanto o valor ira de $${valorProduto} para $${debitoAvista}`);

}else if(formaDePagamento==='pix'){
  console.log(`Você esta pagando em ${formaDePagamento}, portanto o valor ira de $${valorProduto} para $${pix}`);

}else if(formaDePagamento==='parcelamentoEmDuasVezes'){
  console.log(`Você esta pagando em ${formaDePagamento}, portanto o valor $${valorProduto} não terá mudanças`);

}else if(formaDePagamento==='parcelementoEmMaisDeDuas'){
  console.log(`Você esta pagando em ${formaDePagamento}, portanto o valor ira de $${valorProduto} para $${parcelamentoAcimaDuasVezes}`);
}else{
  console.log('[ERRO] verifique os dados!');
}