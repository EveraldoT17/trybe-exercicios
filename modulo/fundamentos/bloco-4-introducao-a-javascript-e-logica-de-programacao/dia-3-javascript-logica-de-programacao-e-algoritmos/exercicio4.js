let n = 5;
let simbolo = '*';
let espaçoVazio = '';

let meioPiramide = (n + 1) / 2;
let controleLE = meioPiramide;
let controleLD = meioPiramide;

for (let j = 0; j <= meioPiramide; j += 1) {
  for (let coluna = 0; coluna <= n; coluna += 1) {
    if (coluna > controleLE && coluna < controleLD) {
      espaçoVazio = espaçoVazio + simbolo;
    } else {
      espaçoVazio = espaçoVazio + ' ';
    }
  }
  console.log(espaçoVazio);
  espaçoVazio = '';
  controleLD += 1;
  controleLE -= 1
};