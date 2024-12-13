// 1) calculateDifference
function calculateDifference(a, b) {
    return a - b;
}
console.log("Difference: " + calculateDifference(10, 5)); // Output: 5

// 2) isOdd
function isOdd(num) {
    return num % 2 !== 0;
}
console.log("Is 7 odd? " + isOdd(7)); // Output: true
console.log("Is 4 odd? " + isOdd(4)); // Output: false

// 3) findMin
function findMin(arr) {
    return Math.min(...arr);
}
console.log("Minimum value: " + findMin([1, 2, 3, 4, 0])); // Output: 0

// 4) filterEvenNumbers
function filterEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
}
console.log("Even numbers: " + filterEvenNumbers([1, 2, 3, 4, 5, 6])); // Output: [2, 4, 6]

// 5) sortArrayDescending
function sortArrayDescending(arr) {
    return arr.slice().sort((a, b) => b - a);
}
console.log("Sorted in descending order: " + sortArrayDescending([1, 4, 2, 9, 5])); // Output: [9, 5, 4, 2, 1]

// 6) lowercaseFirstLetter
function lowercaseFirstLetter(str) {
    return str.charAt(0).toLowerCase() + str.slice(1);
}
console.log("Lowercased first letter: " + lowercaseFirstLetter("Hello World")); // Output: "hello World"

// 7) findAverage
function findAverage(arr) {
    const sum = arr.reduce((acc, curr) => acc + curr, 0);
    return sum / arr.length;
}
console.log("Average value: " + findAverage([1, 2, 3, 4, 5])); // Output: 3

// 8) isLeapYear
function isLeapYear(year) {
    return (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0));
}
console.log("Is 2024 a leap year? " + isLeapYear(2024)); // Output: true
console.log("Is 2023 a leap year? " + isLeapYear(2023)); // Output: false
