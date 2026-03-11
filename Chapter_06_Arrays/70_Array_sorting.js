let fruits = ["apple", "banana", "cherry", "date", "fig"];

// sort

fruits.sort();
console.log(fruits);

// reverse

fruits.reverse();
console.log(fruits);

// sort with custom comparison

fruits.sort((a, b) => a.localeCompare(b));
console.log(fruits);

let nums = [10, 20, 30, 40];

nums.sort((a, b) => a - b);
console.log(nums);

nums.sort((a, b) => b - a);
console.log(nums);