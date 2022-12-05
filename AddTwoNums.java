class AddTwoNums {

    // int [] l1= [2, 3, 4, 5];
    // int [] l2 = [7, 0, 9];

    //output --->  5432 + 907   =   ans  ;   
    // ans = 6339 inverse this and push to array
    // output [9 , 3, 3, 6]; 
    
    static int addTwoNums (int l1[], int l2[]) {
        int ans = 0;
        int multiplier = 1; 

        for(int i = 0; i < l1.length; i++) {

            if(i==0) {
                ans += l1[i] * multiplier;
            }else {
                ans = ans + (l1[i] * multiplier);
            }

            multiplier *= 10;

        }

        return ans;

    }

    // int ans  = addTwoNums(l1, l2);



}