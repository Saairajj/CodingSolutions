let nums = [3, 1, 2, 10, 1];

let res = nums[0];


for ( let i = 1; i < nums.length; i++) {
    res += nums[i];
    nums[i] = res;
}

console.log(nums);