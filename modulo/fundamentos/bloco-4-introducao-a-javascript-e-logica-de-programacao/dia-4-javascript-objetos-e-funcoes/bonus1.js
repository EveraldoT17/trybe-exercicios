let numbersRoman = {
  i: 1,
  v: 5,
  x: 10,
  l: 50,
  c: 100,
  d: 500,
  m: 1000,
};

function romanForNumbers(numbers) {
  numbers = numbers.toLowerCase();
  const len = numbers.length;
  let sum = numbersRoman[numbers[len - 1]];
  let current = numbersRoman[numbers[len - 1]];
  for (let i = 2; i <= len; i += 1) {
    const next = numbersRoman[numbers[len - i]];
    if (current <= next) {
      sum += next;
    } else {
      sum -= next;
    }
    current = next;
  }
  return sum;
}

console.log(romanForNumbers('MMXVIII'));
console.log(romanForNumbers('VI'));
console.log(romanForNumbers('IV'));