// Solve the following problems first in Ruby, then convert the solution to JavaScript.
// 1. Write a function that reverses a string. Don’t use the “reverse” method! (Note: you can use the .split(“”) method to convert a string into an array of characters).

function reverseAString(input) {
  var inputSplit = input.split("");
  var reverse = [];
  for (var i = input.length -1; i >= 0; i--) {
    reverse.push(inputSplit[i]);
  }
  reverse = reverse.join("");
  return reverse;
}

// console.log(reverseAString("excel"));

// 2. Write a function that accepts a string and returns the number of times that the letter “a” occurs in it.

function countA(input) {
  var inputSplit = input.split("");
  var counter = 0;
  for (var i = 0; i < input.length; i++) {
    if (inputSplit[i] === "a") {
      counter++;
    }
  }
  return counter;
}

// console.log(countA("aaaaaa"));

// 3. Write a function that accepts two arguments. The first argument is an array of numbers that are in ascending order. The second argument is a number to search for within in the array. The function should do a linear search and return the index at which this value is found, or it should return nil if the value is not found. See if there’s a way in which you can optimize this method to keep its number of steps to a minimum! Note: Do not use the “index” method!

// input1 = array of numbers in ascending
// input2 = number to search within input1

function findIndex(input1, input2) {
  var indexPosition = null;
  for (var i = 0; i < input1.length; i++) {
    if (input1[i] === input2) {
      indexPosition = i;
      return indexPosition;
    }
  }
  return indexPosition;
}

// console.log(findIndex([1, 2, 3, 4], 5));

// 4. Write a function that accepts two arguments. The first argument is an array of numbers that are in ascending order. The second argument is a new number that is not yet in the array. The function should return a new array with the new number inserted in the proper place. Do not use the “sort” method!

// input1 = array in ascending order
// input2 = value not in input1

// output = new array that puts input2 into input 1 in the correct place

// write a loop that comparates input 2 vs each value of input 1
// if input2 > input1[at that index], in push input1 value into the output array, otherwise, push input2 into the output


function insertNewValue(input1, input2) {
  var output = [];
  var inserted = false;
  for (var i = 0; i < input1.length; i++ ) {
    if  ( input2 < input1[i] && !inserted) {
      output.push(input2);
      inserted = true;
    }
    output.push(input1[i]);
  }
  return output;
}

// console.log(insertNewValue([1, 3, 5], 0));

// 5. Write a function that accepts two arguments. The first argument is an array of numbers that are in ascending order. The second argument is a number that is contained within the array. The function should return the string “lower” if the value is found in the lower half of the array, and it should return “higher” if the value is found within the greater half of the array. Try to optimize this algorithm so that it takes a minimum number of steps!

function lowerOrHigher(input1, input2) {
  var middleIndex = Math.floor(input1.length /2);
  if ( input2 <= middleIndex) {
    console.log("lower"); 
    } else {
    console.log("higher");
    }
}

lowerOrHigher([2,3,4,5], 10);