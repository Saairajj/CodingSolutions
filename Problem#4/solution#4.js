// Lets write a function for the given problem using javascript

function is_pythagorean_triplet(nums) {  //  function accepts 1 parameter
  let hypotenuse = 0  // create a hypotenuse variable
  let sum_of_two_sides = 0  // create a variable to store sum of other two sides

  for(let i=0; i<nums.length; i++) {  // looping through the list to look for the longest side 
    if (nums[i] > hypotenuse) {
      hypotenuse = nums[i]  // the longest side is the only possible side which can be hypotenuse
    }
  }
  for(let j=0; j<nums.length; j++) {
    if (nums[j] !==hypotenuse) {
      sum_of_two_sides += (nums[j] * nums[j]) //  if its not the hypotenuse we'll add its square to the variable
    } 
  }

  if(sum_of_two_sides === (hypotenuse * hypotenuse)) { // if the sum of two sides is equal to square of hypotenuse then its a pythagorean triplet
    console.log("Yes, it is a pythagorean triplet")
  }else{
    console.log("No, it is not a Pythagorean triplet");
  }

}

let arr = [3, 4, 5]
is_pythagorean_triplet(arr)