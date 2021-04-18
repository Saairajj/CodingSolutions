
var restoreString = function(s, indices) {
  var newArray = [];
  var j = 0;
  
  for(var i = 0; i < indices.length; i++) {
      newArray[indices[i]] = s[j];
      j++;
  }
  
  var ans = newArray.join("");
  return ans;
};


// Test Case 1

var s = "codeleet";
var indices = [4,5,6,7,0,2,1,3];

console.log(restoreString(s, indices));


// Test Case 2

s = "aiohn"; 
indices = [3,1,4,2,0];

console.log(restoreString(s, indices));