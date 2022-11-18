let nums = [-1,-1,0,0,-1,-1]

let fInd = -1;

for (let i = 0; i < nums.length; i++) {
    let j = i
    let l = 0
    let r = 0
    while (j > 0) {
    
        l += nums[j-1]
        j--;
    }
    
    j = i+1

    while (j < nums.length) {
        // console.log(j);
        r += nums[j]
        j++;
    }

    // console.log(i ,l, r );

    if (l == r ) {
        fInd = i
        break;
    }
    
}

console.log(fInd);


