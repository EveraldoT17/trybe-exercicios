let n = 7;
let meio = (n + 1) / 2;
let ladoEsquerdo = meio;
let ladoDireito = meio;
let simbolo = '*';
for (let linha = 1; linha <= meio; linha += 1) {
  let saidaLinha = '';
  for (let col = 1; col <= n; col += 1) {
    if (col == ladoEsquerdo || col == ladoDireito || linha == meio) {
      saidaLinha += simbolo;
    } else {
      saidaLinha += ' ';
    }
  }
  ladoEsquerdo -= 1;
  ladoDireito += 1;
  console.log(saidaLinha);
}
