//Coding challenge #1: Print numbers from 1 to 10
console.log("Numbers from 1 to 10:");
for (var i = 1; i <= 10; i++) {
    console.log(i);
}

//Coding challenge #2: Print the odd numbers less than 100
console.log('The odd numbers less than 100:');
for (var i = 1; i <= 100; i += 2) {
    console.log(i);
}

// Coding challenge #3: Print the multiplication table with 7
console.log('The multiplication table with 7:');
for (var i = 1; i <= 10; i++) {
    var row = "7 * " + i + " = " + 7 * i;
    console.log(row);
}

// Coding challenge #4: Print all the multiplication tables with numbers from 1 to 10
console.log('All the multiplication tables with numbers from 1 to 10:');
for(var a = 1; a<=10; a++){
    for(var b = 1; b<=10; b++){
        console.log(a + "*" + b + " = " + a*b)
    }
}

// Coding challenge #5: Calculate the sum of numbers from 1 to 100
var sum = 0;

for (var i = 1; i <= 100; i++) {
    sum += i;
}

console.log('Calculate the sum of numbers from 1 to 100 = ' + sum);

// Coding challenge #5: Calculate the multiplication of numbers from 1 to 10
var mul = 1;

for (var i = 1; i <= 10; i++) {
    mul *= i;
}

console.log('Calculate the multiplication of numbers from 1 to 10 = ' + mul);

// Coding challenge #7: Calculate the sum of odd numbers greater than 10 and less than 30
var sum = 0;

for (var i = 11; i <= 30; i += 2) {
    sum += i;
}

console.log('Calculate the sum of odd numbers greater than 10 and less than 30 = ' + sum);

// Coding challenge #8: Create a function that will convert from Celsius to Fahrenheit
function celsiusToFahrenheit(n) {
    return n * 1.8 + 32;
}

var result = celsiusToFahrenheit(20);
console.log('Celsius to Fahrenheit result is : ' + result);

// Coding challenge #9: Create a function that will convert from Fahrenheit to Celsius
function fahrenheitToCelsius(n) {
    return (n - 32) / 1.8;
}

var result = fahrenheitToCelsius(68);
console.log('Fahrenheit to Celsius result is : ' + result);

// Coding challenge #10: Calculate the sum of numbers in an array of numbers
var ar = [2, 3, -1, 5, 7, 9, 10, 15, 95];

function sumArray(ar) {
    var sum = 0;

    for (var i = 0; i < ar.length; i++) {
        sum += ar[i];
    }

    return sum;
}
var sum = sumArray(ar);
console.log('Sum from array is : ' + sum);

// Coding challenge #11: Calculate the average of the numbers in an array of numbers
var ar = [1, 3, 9, 15, 90];
function averageArray(ar) {
    var sum = 0;

    for (var i = 0; i < ar.length; i++) {
        sum += ar[i];
    }

    return sum / ar.length;
}

var avg = averageArray(ar);
console.log('Average from array is : ' , avg);

// Coding challenge #12: Create a function that receives an array of numbers and returns an array containing only the positive numbers
var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
  
function getPositives(ar) {
    var ar2 = [];

    for (var i = 0; i < ar.length; i++) {
        var el = ar[i];

        if (el >= 0) {
            ar2.push(el);
        }
    }

    return ar2;
}
var ar2 = getPositives(ar);

console.log('positive numbers : ', ar2);

// Coding challenge #12: Create a function that receives an array of numbers and returns an array containing only the positive numbers
var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];

function getPositives(ar) {
    var ar2 = [];

    for (var el of ar) {
        if (el >= 0) {
            ar2.push(el);
        }
    }

    return ar2;
}

var ar2 = getPositives(ar);

console.log('positive numbers using for of loop : ', ar2);

// Coding challenge #12: Create a function that receives an array of numbers and returns an array containing only the positive numbers
var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
function getPositives(ar) {
    return ar.filter(el => el >= 0);
}

var ar2 = getPositives(ar);
console.log('positive numbers using filter method : ', ar2);

// Coding challenge #13: Find the maximum number in an array of numbers
var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
function findMax(ar) {
    var max = ar[0];

    for (var i = 0; i < ar.length; i++) {
        if (ar[i] > max) {
            max = ar[i];
        }
    }

    return max;
}

var max = findMax(ar);
console.log("Max: ", max);

// Coding challenge #14: Print the first 10 Fibonacci numbers without recursion
var f0 = 0;
console.log(f0);

var f1 = 1;
console.log(f1);

for (var i = 2; i <= 10; i++) {
    var fi = f1 + f0;
    console.log(fi);

    f0 = f1;
    f1 = fi;
}

// Coding challenge #15: Create a function that will find the nth Fibonacci number using recursion
function findFibonacci(n) {
    if (n == 0)
        return 0;

    if (n == 1)
        return 1;

    return findFibonacci(n - 1) + findFibonacci(n - 2);
}

var n = findFibonacci(10);
console.log('Fibonacci number using recursion ', n);

// Coding challenge #16: Create a function that will return a Boolean specifying if a number is prime
function isPrime(num) {
    if (num < 2) {
      return false;
    }
    if (num === 2) {
      return true;
    }
    if (num % 2 === 0) {
      return false;
    }
    // Check if number is divisible by any odd number up to the square root of the number
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
      if (num % i === 0) {
        return false;
      }
    }
    // If none of the above conditions are met, the number is prime
    return true;
}
  
console.log(2, " is prime? ", isPrime(2));
console.log(3, " is prime? ", isPrime(3));
console.log(4, " is prime? ", isPrime(4));
console.log(5, " is prime? ", isPrime(5));
console.log(9, " is prime? ", isPrime(9));

// Coding challenge #17: Calculate the sum of digits of a positive integer number
function sumDigits(n) {
    var s = n.toString();
    var sum = 0;

    for (var char of s) {
        var digit = parseInt(char);
        sum += digit;
    }

    return sum;
}

var sum = sumDigits(12345);
console.log("Sum of positive Integer numbers: ", sum);

// Coding challenge #18: Print the first 100 prime numbers
function printPrimes(nPrimes) {
    var n = 1;
    var i = 2;

    while (n <= nPrimes) {
        if (isPrime(i)) {
            console.log(n, " --> ", i);
            n++;
        }

        i++;
    }
}
function isPrime(n) {
    if (n < 2) {
      return false;
    }
    if (n === 2) {
      return true;
    }
    if (n % 2 === 0) {
      return false;
    }
    // Check if number is divisible by any odd number up to the square root of the number
    for (let i = 3; i <= Math.sqrt(n); i += 2) {
      if (n % i === 0) {
        return false;
      }
    }
    // If none of the above conditions are met, the number is prime
    return true;
} 
printPrimes(100);

// Coding challenge #19: Create a function that will return in an array the first "nPrimes" prime numbers greater than a particular number "startAt"
function getPrimes(nPrimes, startAt) {
    var ar = [];

    var i = startAt;

    while (ar.length < nPrimes) {
        if (isPrime(i)) {
            ar.push(i);
        }

        i++;
    }

    return ar;
}
function isPrime(n) {
    if (n < 2) {
      return false;
    }
    if (n === 2) {
      return true;
    }
    if (n % 2 === 0) {
      return false;
    }
    // Check if number is divisible by any odd number up to the square root of the number
    for (let i = 3; i <= Math.sqrt(n); i += 2) {
      if (n % i === 0) {
        return false;
      }
    }
    // If none of the above conditions are met, the number is prime
    return true;
}
console.log(getPrimes(10, 100));

// Coding challenge #20: Rotate an array to the left 1 position
var ar = [1, 2, 3];
rotateLeft(ar);
console.log(ar);

function rotateLeft(ar) {
    var first = ar.shift();
    ar.push(first);
}


// Coding challenge #21: Rotate an array to the right 1 position
var ar = [1, 2, 3];
rotateRight(ar);
console.log(ar);

function rotateRight(ar) {
    var last = ar.pop();
    ar.unshift(last);
}

// Coding challenge #22: Reverse an array
var ar = [1, 2, 3];
var ar2 = reverseArray(ar);
console.log(ar2);

function reverseArray(ar) {
    var ar2 = [];

    for (var i = ar.length - 1; i >= 0; i--) {
        ar2.push(ar[i]);
    }

    return ar2;
}

// Coding challenge #23: Reverse a string
let str = "hello world";
let reversedStr = str.split("").reverse().join("");
console.log(reversedStr); 

// Coding challenge #25: Create a function that will receive two arrays of numbers as arguments and return an array composed of all the numbers that are either in the first array or second array but not in both
var ar1 = [1, 2, 3, 10, 5, 3, 14];
var ar2 = [1, 4, 5, 6, 14];

var ar = mergeExclusive(ar1, ar2);
console.log(ar);

function mergeExclusive(ar1, ar2) {
    var ar = [];

    for (let el of ar1) {
        if (!ar2.includes(el)) {
            ar.push(el);
        }
    }

    for (let el of ar2) {
        if (!ar1.includes(el)) {
            ar.push(el);
        }
    }

    return ar;
}

// Coding challenge #26: Create a function that will receive two arrays and will return an array with elements that are in the first array but not in the second
var ar1 = [1, 2, 3, 10, 5, 3, 14];
var ar2 = [-1, 4, 5, 6, 14];

var ar = mergeLeft(ar1, ar2);
console.log(ar);

function mergeLeft(ar1, ar2) {
    var ar = [];

    for (let el of ar1) {
        if (!ar2.includes(el)) {
            ar.push(el);
        }
    }

    return ar;
}

// knjhoigfhcfn