var smallerNumbersThanCurrent = function(nums) {
  let ans = [];
  
  for(let i = 0; i < nums.length; i++ ) {
      let count = 0;
      for (let j = 0; j < nums.length; j++ ) {
          if(i != j ) {
              if(nums[i] > nums[j]) {
                  count += 1;
              }
          }
      }
      ans.push(count)
  }
  
  return ans;
  
};


// Test Case 1
let nums = [8,1,2,2,3];
let output = smallerNumbersThanCurrent(nums);
console.log(output);


// Test Case 2
nums = [6, 5, 8, 4, 6, 1, 9];
output = smallerNumbersThanCurrent(nums);
console.log(output);