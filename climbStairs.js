let n = 9;

// output = 3

let arr=[];
arr[1]=1;
arr[2]=2;
for(let i=3;i<=n;i++){
    arr[i]=arr[i-1]+arr[i-2];
    
}
console.log(arr);
console.log(arr[n]);