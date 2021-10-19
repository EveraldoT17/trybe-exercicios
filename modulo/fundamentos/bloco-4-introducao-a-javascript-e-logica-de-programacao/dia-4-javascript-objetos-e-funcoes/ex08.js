function indiceDoMenor(numeros) {
  let indiceMenor = 0;
  for (let i in numeros) {
    if (numeros[indiceMenor] > numeros[i]) {
      indiceMenor = i;
    }
  }
  return indiceMenor;
}

console.log(indiceDoMenor([2, 4, 6, 7, 10, 0, -3]));