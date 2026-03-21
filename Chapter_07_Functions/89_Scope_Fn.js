// Closures

//A closure us when Function remembers outer variable after the function has finished executing

function outer() {
    let message = "Hello";
    console.log("Outer Called");

    function inner() {
        console.log(message);
    }
    return inner;
}
outer();
let fn_inner = outer();
fn_inner();