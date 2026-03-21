function add(a, b, c) {
    return a + b + c;
}
let sum = [1, 5, 8];
let total = add(...sum);
console.log(total);