#  Lets write a function for the given problem using python

def runningSum(nums):
  ans = []
  check = 0
  for i in nums:
    check += i
    ans.append(check)
  
  return ans


nums = [1, 2, 3, 4, 6, 8, 9, 18]
ans = runningSum(nums)
print(ans)