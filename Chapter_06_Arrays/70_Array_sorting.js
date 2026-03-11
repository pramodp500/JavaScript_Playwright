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