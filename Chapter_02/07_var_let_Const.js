// var, let , const

// var - Function scoped
var a = 10; // Global scope

console.log(a);

// Defn of Fumction
function test() {
    var b = 20; // local scope
    console.log(b);
    console.log(a);
}
//Calling of func
test();

let c = 10;
c = 20;
console.log("The Value is ", c);
function testing() {
    let b = 20;
    console.log(b);
    console.log("The Value is ", c);
    if (true) {
        let c = 50;
        console.log("The Value is ", c);
    }
    console.log("The Value is ", c);
}
testing();

const d = 10;
console.log("The Value is ", d);
function testing2() {
    console.log(d);
    console.log("The Value is ", d);
    if (true) {
        const d = 50;
        console.log("The Value is ", d);
    }
    console.log("The Value is ", d);
}
testing2();

