let result = Array.isArray([10, 20, 30, 40]);
console.log(result);

let arr = [10, 20, 30, 40];
console.log(Array.isArray(arr));

let obj = { name: "John", age: 30, city: "New York" };
console.log(Array.isArray(obj));

let str = "Hello";
console.log(Array.isArray(str));

let num = 10;
console.log(Array.isArray(num));


// Every
[80, 90, 85, 95].every(s => s > 70);
console.log(result);

// Some
[80, 90, 85, 95].some(s => s > 70);
console.log(result);