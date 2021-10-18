let n = 5;
let simbolo = '*';
let espaçoVazio = '';
let inversao = n;

for (let j = 0; j < n; j += 1) {
  for (let coluna = 0; coluna <= n; coluna += 1) {
    if (coluna < inversao) {
      espaçoVazio = espaçoVazio + ' ';
    } else {
      espaçoVazio = espaçoVazio + simbolo;
    }
  }
  console.log(espaçoVazio);
espaçoVazio = '';
  inversao -= 1;
};