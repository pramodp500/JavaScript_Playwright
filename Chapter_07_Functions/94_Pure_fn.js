// Pure function will return same output for same input

function calculatePassPercentage(total, passed) {
    return ((passed / total) * 100).toFixed(2);
}
console.log(calculatePassPercentage(10, 7));