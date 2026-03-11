let results = ["pass", "fail", "pass"];
let counts = results.reduce((acc, r) => {
    acc[r] = (acc[r] || 0) + 1;
    return acc;
}, {});
console.log(counts.pass);