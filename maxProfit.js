let prices = [7, 6, 3, 4, 1];

let l = 0;
let r = 1;
let maxProf = 0;

while(r < prices.length) {
    if(prices[l] < prices[r]) {
        let profit = prices[r] - prices[l];
        maxProf = Math.max(maxProf, profit)
        }else {
            l = r;
        }
        r++;    
    }
    

console.log(maxProf);
