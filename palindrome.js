let x = 100;  
var palindrome;


if (x < 0) {
    palindrome = false
}else if (x < 10) {
    palindrome = true
}else{
    
    var myArr = String(x).split("").map((x)=>{
        return Number(x)
      })
    var j = myArr.length - 1 ;
    
    console.log(myArr);
    
         for (let i = 0; i < myArr.length/2; i++) {
            console.log(myArr[i], 'i'); 
            console.log(myArr[j], 'j');
            if(myArr[i] == myArr[j]) {
                // console.log(myArr[i], myArr[j]);
                j--;  
                palindrome = true;  
            }else {
                palindrome = false
                break; 
            }
         }
    
    
}


console.log(palindrome);