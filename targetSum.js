// Easy


// array = [3, 5, -4, 8, 11, 1, -1, 6]
// targetSum = 10

// Output = [-1, 11]

let arr = [3, 5, -4, 8, 11, 1, -1, 6];

let targetSum = 10;

let ans = [];

let ind = 0;


for(let i = 0; i < arr.length; i++) {
    let a = targetSum - arr[i]
    for(j = i + 1; j<arr.length; j++) {
        if(arr[j] == a) {
            ans.push(arr[i])
            ans.push(arr[j])
        }
    }
}


// console.log(ans);



// let ht = {}

// for(let i = 0; i < arr.length; i++) {
//     let check = targetSum - arr[i];

//     if(check in ht) {
//         console.log(ht);
//     } else {
//         ht[check] = true
//     }
//     // console.log(ht[check], i);
// }


const nums = {}
let result = []

for(const num of arr) {
    const pote = targetSum - num
    if(pote in nums) {
        result.push(pote)
        result.push(num)
    }else {
        nums[num] = true
    }
}

console.log(result);
console.log(nums);

