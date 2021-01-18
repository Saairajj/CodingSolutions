// Lets write a function for the given problem using javascript

var maximumWealth = function(accounts) {
  var acc_sum = 0
  var i = 0
  while (i < accounts.length) {
      var sum = 0
      for(let j = 0; j < accounts[i].length; j++) {
          sum += accounts[i][j]
      }
      if (sum > acc_sum) {
          acc_sum = sum
      }
      i += 1
  }
  return acc_sum
};


// Test case 1

let accounts = [[1,5],[7,3],[3,5]]
let output = maximumWealth(accounts)
console.log(output)


// Test Case 2
accounts = [[2,8,7],[7,1,3],[1,9,5]]
output = maximumWealth(accounts)
console.log(output)