// letterCount(word)

// Write a function that takes a string that finds out how many times a character occurs. For example, the string "apple" would print the following:

// a - 1
// p - 2
// l - 1
// e - 1
// Hint: Loop through each letter, and increment the value to a key in an object. The key should be that object.

// BONUS: Make sure that lower case letters and upper case letters count for the same character. Also, ignore spaces and punctuation.

var letterCount = function(word){
 var letters = {};
 for(var i = 0; i < word.length; i++){
   if(!letters[word[i]]){
     letters[word[i]] = 1;
   }else{
     letters[word[i]]++;
   }
 }
 console.log(letters);
}
letterCount("apple");

// isPrime(num)

// Create a function to return true or false if a number passed in a prime number


var isPrime = function(num) {
    for(var i = 2; i < num; i++) {
     // for loop starts at 2 and ends at num because
     // a number divided by 1 or itself will return 0
        if(num % i === 0) {
            return false;
        }

    }
 return true;
}
isPrime(7);

// primes(max)

// Using your isPrime() function, create a function primes that will return an array of all prime numbers up to a certain amount.


var primes = function(max) {
 var container = [];
 for(var i = 2; i < max; i++){
   if(isPrime(i)){
     console.log(i);
     container.push(i);
   }
 }
 return container;
}
primes(12);

// sillySum(arr)

// Write a function that takes an array of numbers, and returns the sum of each number multiplied by its index.

// count += (number * index)

var sillySum = function(arr){
 // var count = arr[0];
 var count = 0;
 for(var i = 1; i <= arr.length - 1; i++){
   console.log("array index value = " + arr[i] + " index value = " + i + "\n");
   count += (arr[i] * i);

 }
 return count;
}
sillySum([2,3,4,5]);
// 26


// numSquare(max)

// Create a function called numSquare that will return an array of all perfect square numbers up to, but not exceeding a max number.

var numSquare = function(max){
 var collector = [];
 for(var i = 1; Math.pow(i,2) <= max; i++) {
     collector.push(Math.pow(i,2));
   }
 return collector;
}
numSquare(50);



