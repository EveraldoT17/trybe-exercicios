function indiceDoMaior(numeros) {
  let indiceMaior = 0;
  for (let i in numeros) {
    if (numeros[indiceMaior] < numeros[i]) {
      indiceMaior = i;
    }
  }
  return indiceMaior;
}

console.log(indiceDoMaior([2, 3, 6, 7, 10, 1]));