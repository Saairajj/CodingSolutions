// let nums = [1, 2, 3, -1, 2, 3, 4, -1, 9, 9, 2];
// //return [2, 3]

// let  i = 0
// let maxProduct = nums[i];


// if(nums.length == 1) {
//     maxProduct = nums[0];
// }else if (nums.length == 2) {
//     if (nums[0] > maxProduct) {
//         maxProduct = nums[0];
//     }else {
//         maxProduct = nums[1];
//     }
// }


// for(let j = i + 1; j < nums.length; j++) {
//     let currentProduct = nums[i] * nums[j]; 
//     // console.log(maxProduct, i, j);
//     // console.log(currentProduct);
//     if(currentProduct < maxProduct) {
//         i++;
//     }else {
//         maxProduct = currentProduct; 
//         continue;
//     }

// }

// // for(let j = i + 1; j<nums.length; j++) {
// //     if((nums[i] * nums[j]) > maxProduct) {
// //         maxProduct = nums[i] * nums[j];   
// //     }
    
//     // console.log(i , j)
// // }

// // console.log(maxProduct);








// console.log(res);






// Final attempt

let min = max = maxx = nums[0] || 0;
for (let i = 1; i < nums.length; i++) {
  const xmax = max;
  max = Math.max(Math.max(min * nums[i], xmax * nums[i]), nums[i]);
  min = Math.min(Math.min(min * nums[i], xmax * nums[i]), nums[i]);
  maxx = Math.max(maxx, max);
}
return maxx;