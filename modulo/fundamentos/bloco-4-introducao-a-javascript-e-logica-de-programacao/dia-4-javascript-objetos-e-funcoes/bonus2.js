let vector = [[1, 2], [3, 4, 5, 6], [7, 8, 9, 10]];

function arrayOfNumbers(vector) {
  let result = [];
  for (let i = 0; i < vector.length; i += 1) {
    let numbers = vector[i];
    for (let i2 = 0; i2 < numbers.length; i2 += 1) {
      const current = numbers[i2];
      if ((current % 2) === 0) {
        result.push(current);
      } 
    }
  }
  return result;
}

console.log(arrayOfNumbers(vector));