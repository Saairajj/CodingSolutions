let array1 = [5, 1, 22, 25, 6, -1, 8, 10];
let array2 =[5, 1, 22, 25];

// "array": ,
// "sequence": 

let i = 0
let j = 0

while(i < array1.length && j < array2.length) {
    if(array1[i] === array2[j]) {
        j++
    }
    i++
}

console.log(j === array2.length);