nums = [1, 1, 2, 2, 3];

let i = 0; //1

for(let j = i + 1; j < nums.length; j++) {
    let check = nums[i]; 

    if(nums[i] < nums[j]) { 
        nums[j-1] = nums[j]
        nums[i] = nums[j-1]; 
        i++; 
    }

}

console.log(nums);

