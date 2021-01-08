// Lets write a function for the given problem using javascript

function sumCheck(k, nums) { // function takes 2 parameters i.e k and the list of nums
  let ans = false // assign a boolean to a flag variable
  for(let i=0; i<nums.length; i++) { // iterate through the nums
    for(let j=i+1; j<nums.length; j++) { // iterate for the second time
      let res = nums[i] + nums[j] // assign the sum of combination to a res variable
      if (res === k) { // check if any of the combination is equal to k
        ans = true // if found a match re-assign ans to true
      }
    }
  }
  return ans // return answer
}


// test case 1

k = 17
list1 = [10, 15, 3, 7]
let output = sumCheck(k, list1)
console.log(output);



//  test case 2

k = 25
list_1 = [8, 19, -8, 1]
let output2 = sumCheck(k, list_1)
console.log(output2);