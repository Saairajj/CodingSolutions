let l1 = [2, 3, 4,5];
let l2 = [7,0,9 ];

//output --->  5432 + 907   =   ans  ;   
// ans = 6339 inverse this and push to array
// output [9 , 3, 3, 6]; 


let ans = 0;
let multiplier = 1;
for(let i = 0; i <l1.length; i++) {
    

    if(i == 0) {
        ans += l1[i] * multiplier;
    }else {
        ans = ans + (l1[i] * multiplier);
    }    

    multiplier *= 10; 
}

let res = 0
let res2 = 0
let j = 0; 
for(let i = 0; i<l1.length; i++) {
    if(j <l2.length) {
        let c = (Math.pow(10, j)) * l2[j];
        res2 = res2 + c
    }
    j++; 

    let b = (Math.pow(10, i)) * l1[i];
    res = res + b; 
    
} 

let final = res + res2;

let str = final.toString();

// console.log(final);

let finalArray = []

for (let i = str.length-1 ; i >=0; i--) {
    let something = parseInt(str[i]);
    finalArray.push(something);
    
}

console.log(finalArray);



// let n = new NodeList();

// console.log(a);

// for (let a = 0; a < n.length; a++) {
//     n[i] = finalArray[i];
// }

// console.log(n);

