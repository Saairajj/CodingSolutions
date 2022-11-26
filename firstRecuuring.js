// Given array = [2,5,1,2,3,5,1,2,4]
// It should return 2


// Given array = [2,1,1,2,3,5,1,2,4]
// It should return 1


// Given array = [2,3,4,5]
// It should return undefined

let a1 = [2, 5, 5, 2, 3, 5, 4]

let map = {}

for(let i = 0; i < a1.length; i++) {
    // console.log(map[a1[i]] , "map", a1[i] , "arrray" , " map is ",  map);
    // console.log(map[a1[i]]);
    if (map[a1[i]] !== undefined) {
        console.log(a1[i]);
        break
    }else {
        map[a1[i]] = i
    }
    console.log(map);

}

// console.log(map[1]);
