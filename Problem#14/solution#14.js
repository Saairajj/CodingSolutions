var decompressRLElist = function(nums) {
  var freq = 0;
  var val = 0;
  var ans = [];
  
  for(let i = 0; i < nums.length; i = i + 2) {
      freq = nums[i];
      val = nums[i + 1];
      
      while (freq != 0 ) {
          ans.push(val);
          freq -= 1;
      } 
  }
  
  return ans;
};


// Test Case 1

var nums = [1,2,3,4];

console.log(decompressRLElist(nums));


// Test Case 2

nums = [1,1,2,3];

console.log(decompressRLElist(nums));