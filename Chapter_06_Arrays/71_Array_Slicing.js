let arr = [10, 20, 30, 40];

// slice

let newArr = arr.slice(1, 3);
console.log(newArr);

// splice

arr.splice(1, 2);
console.log(arr);

let a = [10, 20, 30, 40];
let b = [50, 60, 70, 80];

let c = a.concat(b);
console.log(c);

let d = [...a, ...b];
console.log(d);