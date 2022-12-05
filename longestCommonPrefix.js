let strs = ["flower","flow","flight"];

// output --> fl

let fStr = "";

let checkStr = "";
let j = 0;
let flag = false
for(let i = 0 ; i < strs.length; i++) {
    
    if(i == 0) {
        checkStr += strs[i][j]
    }

    if(strs[i][j] == checkStr) {
        flag = true;
    }else {
        flag = false;
        break;
    }

    j++;
}

console.log(checkStr);
console.log(flag);