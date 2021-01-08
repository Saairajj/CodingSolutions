# Lets write a function for the given problem using Python

def sum_check(k, nums): # function takes 2 parameters i.e k and the list of nums
  ans = False # assign a boolean to a flag variable
  for i in nums: # iterate through the nums
    for j in nums: # iterate for the second time
      if i + j == k: # check if any of the combination is equal to k
        ans = True # if found a match re-assign ans to true
  return ans  # return answer


# test case 1
k = 17
list_1 = [10, 15, 3, 7]
output = sum_check(k, list_1)
print(output)


# test case 2
k = 25
list_1 = [8, 19, -8, 1]
output = sum_check(k, list_1)
print(output)