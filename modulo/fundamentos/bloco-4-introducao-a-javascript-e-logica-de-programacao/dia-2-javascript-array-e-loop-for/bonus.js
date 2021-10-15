//let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//for (let i = 1; i < numbers.length; i += 1) {
//  for (let secondI = 0; secondI < i; secondI += 1) {
//    if (numbers[i] < numbers[secondI]) {
//      let position = numbers[i];
//      numbers[i] = numbers[secondI];
//      numbers[secondI] = position;
//   }
//  }
//}

//console.log(numbers);

//for (let i = 1; i < numbers.length; i += 1) {
//  for (let secondI = 0; secondI < i; secondI += 1) {
//    if (numbers[i] > numbers[secondI]) {
//      let position = numbers[i];
//      numbers[i] = numbers[secondI];
//      numbers[secondI] = position;
//    }
//  }
//}

//console.log(numbers);

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let novoArray = [];

for (let i = 0; i < numbers.length; i += 1) {
  if (i + 1 < numbers.length) {
    novoArray.push(numbers[i] * numbers[i + 1]);
  } else {
    novoArray.push(numbers[i] * 2);
  }
}

console.log(novoArray);