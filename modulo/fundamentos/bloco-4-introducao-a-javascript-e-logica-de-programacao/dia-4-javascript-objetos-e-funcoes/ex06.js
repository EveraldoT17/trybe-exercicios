function verificaPalindrome(word){
  for(i in word){
    if(word[i] != word[(word.length - 1) - i]){
      return false;
    }
  }
  return true;
}


console.log(verificaPalindrome('arara'));
