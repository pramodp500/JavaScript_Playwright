interface claculator {
    add(a: number, b: number): number;
    sub(a: number, b: number): number;
    mul(a: number, b: number): number;
    div(a: number, b: number): number;
}

let calculator: claculator = {
    add: (a, b) => a + b,
    sub: (a, b) => a - b,
    mul: (a, b) => a * b,
    div: (a, b) => a / b
}

console.log(calculator.add(1, 2));
console.log(calculator.sub(1, 2));
console.log(calculator.mul(1, 2));
console.log(calculator.div(1, 2));