let scores = [10, 82, 92, 88];

// map

let grades = scores.map(s => s > 70 ? "Pass" : "Fail");
console.log(grades);

// filter

let passScores = scores.filter(s => s > 70);
console.log(passScores);

// reduce

let total = scores.reduce((acc, s) => acc + s, 0);
console.log(total);