//Uma comerciante comprou alguns produtos e quer revender com lucro de 45% se o valor da compra foi menor que 20 reais. Caso contrário, o lucro será de 30%. O valor deve ser passado para o programa que deverá retornar o valor da venda.

//Exemplo: 
//produto: R$ 18,00 -> 18 * 45% -> O seu produto deve ser vendido por R$ 26,10
//produto: R$ 21,00 -> 21 * 30% -> O seu produto deve ser vendido por R$ 27,30

let produto=21;

if(produto<20){
  console.log("O produto custou menos de R$ 20,00, com o acréscimo de 45% o valor total é de R$ " + (produto * 0.45 + produto));
}
else{
  console.log("O produto custou R$ 20,00 ou mais, com o acréscimo de 30% o valor total é de R$ " + (produto * 0.30 + produto));
}