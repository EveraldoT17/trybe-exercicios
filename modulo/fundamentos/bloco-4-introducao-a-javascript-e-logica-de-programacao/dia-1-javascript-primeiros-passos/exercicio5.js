let a = -75;
let b = 45;
let c = 45;

let soma = a + b + c;

let refAngulo = a > 0 && b > 0 && c > 0;

if(refAngulo){
  if(soma === 180) {
  console.log(true);
} 
  else {
  console.log(false);
};
} else {
  console.log('Erro: ângulo invalido');
};