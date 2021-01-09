# Lets write a function for the given problem using Python


def returnProduct(nums): # function takes the list as a parameter
  ans_1 = [] # initialize an empty list as an ans list
  for i in nums: # loop through the given  list
    res = int(1) # assign 1 value to a variable which we will use to calculate the product
    for j in nums: # loop through the list one more time
        res *= int(j) # multiply all the element of list
    res = int(res / i) # at the end of iteration divide the initial element which is currently in iteration for the first loop
    ans_1.append(res) # append the empty list with this element
  return ans_1


# test case 1

list_1 = [1, 2, 3, 4, 5]
output = returnProduct(list_1)
print(output)


# test case 2 

list_2 = [3, 2, 1]
output = returnProduct(list_2)
print(output)
