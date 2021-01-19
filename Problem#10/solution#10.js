// Lets write a function for the given problem using javascript


var interpret = function(command) {
  var str = command.split("")
  var ans = ""
  
  for(let i = 0; i < str.length; i++) {
      if(str[i] === "G") {
          ans += "G"
      }else if (str[i] === "(") {
          if(str[i+1] === ")") {
              ans += "o"
          }else {
              ans += "al"
          }
      }
  }
  return ans
};


// Test case 1
var command = "G()(al)"
var output = interpret(command)
console.log(output);


// Test case 2
 command = "G()()()()(al)"
 output = interpret(command)
console.log(output);


// Test case 3
 command = "(al)G(al)()()G"
 output = interpret(command)
console.log(output);