function maisRepetido(numeros) {
  let contRepetido = 0;
  let contNumero = 0;
  let indexNumeroRepetido = 0;
  for (let i in numeros) {
    let verificaNumero = numeros[i];
    for (let i2 in numeros) {
      if (verificaNumero === numeros[i2]) {
        contNumero += 1;
      }
    }
    if (contNumero > contRepetido) {
      contRepetido = contNumero;
      indexNumeroRepetido = i;
    }
    contRepetido = 0;
  }
  return numeros[contRepetido];
}

console.log(maisRepetido([2, 3, 2, 5, 8, 2, 3]));
