// Lets write a function for the given problem using javascript

var shuffle = function(nums, n) {
  var p1 = []
  var p2 = []
  var ans = []
  var ind = 0
  
  for(let i = 0; i< nums.length - n; i++) {
      p1.push(nums[i])
  }
    
  for(let j = n; j < nums.length; j++) {
      p2.push(nums[j])
  }  
    
  while (ind < p1.length) {
      ans.push(p1[ind])
      ans.push(p2[ind])
      ind += 1
  }
    
  return ans
};


// Test Case 1 
var nums = [2,5,1,3,4,7]
var n = 3
var output = shuffle(nums, n)
console.log(output)

// Test Case 2
nums = [1,2,3,4,4,3,2,1]
n = 4
ans = shuffle(nums, n)
console.log(ans);
