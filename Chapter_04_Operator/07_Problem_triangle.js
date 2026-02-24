let a = 20;
let b = 20;
let c = 20;

if (a === b && b === c) {
    console.log("Triangle is Equilateral Triangle");
} else if (a === b || a === c || b === c) {
    console.log("Triangle is Isoceles Triangle");
} else {
    console.log("Triangle is Scalene Triangle");
}