
var checkIfPangram = function(sentence) {
  var unique = [...new Set(sentence)];
  if(unique.length == 26 ) {
      return true;
  } else {
      return false;
  }
};


// Test Case 1

var sentence = "thequickbrownfoxjumpsoverthelazydog";

console.log(checkIfPangram(sentence));


// Test Case 2

sentence = "highwaytohell";

console.log(checkIfPangram(sentence));