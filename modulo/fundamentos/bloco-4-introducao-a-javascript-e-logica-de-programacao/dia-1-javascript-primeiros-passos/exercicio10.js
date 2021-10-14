const custoProduto = 5;
const valorVenda = 10;

if (custoProduto >= 0 && valorVenda >= 0) {
  const custoTotalProduto = custoProduto * 1.2;
  const lucro = (valorVenda - custoTotalProduto) * 1000;
  console.log(lucro);
} else {
  console.log("Error, os valores não podem ser negativos");
};
