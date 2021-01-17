// Lets write a function for the given problem using javascript

function runningSum( nums) {
  let ans = []
  let check = 0 
  for(let i=0; i<nums.length; i++) {
      check += nums[i]
      ans.push(check)
  }
  return ans 
}


let nums = [1, 2, 3, 4, 6, 8, 9, 18]
let ans = runningSum(nums)
console.log(ans)