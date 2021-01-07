// Lets write a function for the given problem using javascript

function checkI (list){  // we create a function which takes list as a parameter
	let flag = false  // first we assign a boolean value for a flag variable
	for (let i =0; i<list.length; i++) {   // then we iterate over the argument i.e the list
		if (i == list[i]) {  // here we check if the value of index i.e 'i' is equal to the element in that particular index i.e 'list[i]'
			 flag = i; // if the value is same we re-assign the value of the index to the flag
		}
	}

	if (flag === false) { // after execution of the for loop we check the final value of the flag, if it is still the same that means it should return false
		return false
	}else{
		return flag // else it will return the value of the index which has same value as the element
	}

}

// test case 1
let list_1 = [-6, 0, 2, 40] // create a list  
let ans1 = checkI(list_1) //pass it as an argument to the function
console.log(ans1) // log the value

// test case 2
let list_2 = [1, 5, 7, 8] // create a list
let ans2 = checkI(list_2) //pass it as an argument to the function
console.log(ans2); // log the value