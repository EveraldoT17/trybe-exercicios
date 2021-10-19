//Duas formas de resolver o exercício
function verificaFimPalavra(word, ending) {
  word = word.split('');
  ending = ending.split('');
  control = true;
  for (let i = 0; i < ending.length; i += 1) {
    if (word[word.length - ending.length + i] != ending[i]) {
      control = false;
    }
  }
  return control;
}
console.log(verificaFimPalavra('trybe', 'be'));
console.log(verificaFimPalavra('joaofernando', 'fernan'));
