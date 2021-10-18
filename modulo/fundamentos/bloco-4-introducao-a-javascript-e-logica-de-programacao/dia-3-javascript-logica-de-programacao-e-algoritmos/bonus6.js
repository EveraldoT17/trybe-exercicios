let divisor = 1;
let nChecagem = 45;

for (let numero = 2; numero <= nChecagem; numero += 1) {
  if (nChecagem % numero === 0) divisor += 1;
}

if (divisor === 2) console.log(nChecagem + ' é primo');
else console.log(nChecagem + ' não é primo');