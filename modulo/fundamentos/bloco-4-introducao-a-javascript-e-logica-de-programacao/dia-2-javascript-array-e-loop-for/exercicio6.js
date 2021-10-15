let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let numerosImpar = 0;

for (i = 0; i < numbers.length; i += 1) {
  if (numbers[i] % 2 !== 0) {
    numerosImpar += 1;
  }
}

if (numerosImpar === 0) {
  console.log("nenhum numero ímpar encontrado");
} else {
  console.log(numerosImpar);
};  
