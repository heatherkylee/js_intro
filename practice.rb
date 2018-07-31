# // # Write a method that prints out every number from 1 to 100. 

# x = 1
# 100.times do 
#   p x
#   x += 1
# end

# ****************

# // # Write a method that prints out every other number from 1 to 100. (That is, 1, 3, 5, 7 … 99).

# x = 1
# 50.times do
#   p x
#   x += 2  
# end

# ****************

# // # Write a method that accepts an array of numbers as a parameter, and counts how many 55’s there are in the array.

# def counter(input)
#   i = 0
#   count = 0

#   input.each do
#     if input[i] == 55
#       count += 1
#     end  
#     i += 1
#   end
#   return count
# end

# p counter([5, 5, 0])

# ****************

# Write a method that accepts an array of strings and returns a new array that has the string "awesomesauce" inserted between every string. 
# For example, if the initial array is ["a", "b", "c", "d", "e"], then the returned array should be ["a", "awesomesauce", "b", "awesomesauce", "c", "awesomesauce", "d", "awesomesauce", "e"].

# def awesomesauce(input)
#   output = []
#   i = 0

#   input.each do
#     output << input[i]
#     output << "awesomesauce"
#     i += 1
#   end
#   output.pop
#   return output
# end

# p awesomesauce(["a", "b", "c", "d", "e"])

# ****************

# Start with the hash: item_amounts = {chair: 5, table: 2}
# Someone just bought two chairs. Change the hash such that the chair amount is 3.
# The final result should be: {chair: 3, table: 2}

# item_amounts = {chair: 5, table: 2}
# item_amounts[:chair] = 3
# p item_amounts

# ****************

# Start with the hash: item_amounts = {chair: 5, table: 2}
# You received 7 desks to sell. Change the hash to include desks.
# The final result should be: {chair: 5, table: 2, desk: 7}

# item_amounts = {chair: 5, table: 2}
# item_amounts[:desks] = 7
# p item_amounts


# ****************

# Write a method that accepts a number and returns its factorial.
# For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.

def factorial(input)
  i = input
  product = 1

  input.times do
    product *= i
    i -= 1
  end
  return product
end

p factorial(5)

# ****************