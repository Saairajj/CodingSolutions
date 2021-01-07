#  Lets write a function for the given problem using javascript


def checki(nums): # we create a function which takes list as a parameter
  flag = False # first we assign a boolean value for a flag variable
  for i in nums: # then we iterate over the argument i.e the nums list
    if i == nums.index(i): # here we check if the value of index i.e 'nums.index(i)' is equal to the element in that particular index i.e 'i'
      flag = i # if the value is same we re-assign the value of the index to the flag
  
  if flag == False: # after execution of the for loop we check the final value of the flag, if it is still the same that means it should return false
    return False
  else:
    return flag # else it will return the value of the index which has same value as the element


# test case 1
list_1 = [-6, 0, 2, 40]
ans_1 = checki(list_1)
print(ans_1)


# test case 2
list_2 = [1, 5, 7 ,8]
ans_2 = checki(list_2)
print(ans_2)


