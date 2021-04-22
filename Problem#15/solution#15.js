var createTargetArray = function(nums, index) {
  var ans = [];
  
  for(let i = 0; i<nums.length; i++) {
      for(let j=0; j<index.length; j++) {
          if(i == j) {
              ans.splice(index[j], 0, nums[i]);
          }
      }
  }
  
  return ans
};


// Test Case 1

var nums = [0,1,2,3,4];
var index = [0,1,2,2,1];

console.log(createTargetArray(nums, index));



// Test Case 2

nums = [1,2,3,4,0];
index = [0,1,2,3,0];

console.log(createTargetArray(nums, index));


