var words = process.argv.slice(2);
function pigLatin (words){
  for (var i = 0; i < words.length; i++){
    var newWord = words[i].substring(1)+ "ay";
    console.log(newWord);
  }
}
pigLatin(words)