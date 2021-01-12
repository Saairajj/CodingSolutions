# Lets write a function for the given problem using Python



def is_pythogorean_triplet(nums): # function accepts 1 parameter
  hypotenuse = 0    # create a hypotenuse variable
  sum_of_two_sides = 0  # create a variable to store sum of other two sides

  for i in nums:  # looping through the list to look for the longest side 
    if i > hypotenuse:
      hypotenuse = i # the longest side is the only possible side which can be hypotenuse
  for j in nums:
    if j != hypotenuse: # if its not the hypotenuse we'll add its square to the variable
      sum_of_two_sides += (j * j) 
  if sum_of_two_sides == hypotenuse * hypotenuse: # if the sum of two sides is equal to square of hypotenuse then its a pythagorean triplet
    print("Yes, it is a Pythogorean triplet.") 
  else:
    print("NO it is not a Pythagorean triplet.")


arr = [3, 4, 5]
is_pythogorean_triplet(arr)