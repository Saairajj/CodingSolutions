// Lets write a function for the given problem using javascript


function returnProduct(nums) { // function takes the array as a parameter
  let ans_1 = [] // initialize an empty array as an ans 
  for (let i = 0; i< nums.length; i++) { // oop through the given array
    let res = 1; // assign 1 value to a variable which we will use to calculate the product
    for(let j=0; j<nums.length; j++) { // loop through the array one more time
    res *= nums[j]  // multiply all the element of array
    }
    res = res / nums[i]  // at the end of iteration divide the initial element which is currently in iteration for the first loop
    ans_1.push(res) // append the empty array with this element
  }
  return ans_1
}


// test case 1

list_1 = [1, 2, 3, 4, 5]
let output = returnProduct(list_1)
console.log(output)


//  test case 2 

list_2 = [3, 2, 1]
output = returnProduct(list_2)
console.log(output)
