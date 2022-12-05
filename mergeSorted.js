let arr1 = [7, 19, 3, 1];

let arr2 = [8, 0, 35, 5];

//output [0, 3, 4, 4, 6, 30, 31]

for(let i = 0; i<arr2.length; i++) {
    arr1.push(arr2[i]);
}

console.log(arr1);

for(let i = 0; i< arr1.length; i++) {
    for(let j = i+1; j<arr1.length; j++) {
        let first = arr1[i];
        let second = arr1[j];
        if(first > second) {
            arr1[i] = second;
            arr1[j] = first;
        }
    }
}

console.log(arr1);

//o(n2)