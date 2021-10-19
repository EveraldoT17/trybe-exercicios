function somaTodosNumeros(n) {
  let total = 0;
  for (let i = 1; i <= n; i += 1) {
    total = total + i;
  }
  return total;
}
console.log(somaTodosNumeros(5));