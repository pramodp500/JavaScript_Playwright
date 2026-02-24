let a = 10;
let b = 20;
let c = 30;

if (a > b) {
    console.log("a is greater than b");
} else {
    console.log("b is greater than a");
}

if (a > b && a > c) {
    console.log("a is greater than b and c");
} else if (b > a && b > c) {
    console.log("b is greater than a and c");
} else {
    console.log("c is greater than a and b");
}

switch (a) {
    case 10:
        console.log("a is 10");
        break;
    case 20:
        console.log("a is 20");
        break;
    default:
        console.log("a is neither 10 nor 20");
}

for (let i = 0; i < 10; i++) {
    console.log(i);
}

while (a > 0) {
    console.log(a);
    a--;
}

do {
    console.log(a);
    a--;
} while (a > 0);