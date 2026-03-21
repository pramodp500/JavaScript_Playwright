let log = "[ERROR] 2024-03-07 TestCase: login - Status: 500";

let statusq = log.match(/Status: (\d+)/)[1];

console.log(statusq);

//---------------------

let env = "staging";
let module = "auth";
let count = 7;
let testId = `${env}_${module}_${String(count).padStart(3, "0")}`; // staging_auth_007

console.log(testId);

// ---------------------------------------------------------------------------------------------------------------

let actual = " PASS ";
let expected = "pass";
console.log(actual.trim().toLowerCase() === expected);

// -------------------------------

let testUrl = "https://app.com/search?query=login&page=2&sort=asc";
let params = Object.fromEntries(testUrl.split("?")[1].split("&").map(p => p.split("="))); // ["https://app.com/search" , ""]

console.log(params);

//------------------------------------------------------

let token = "Bearer eyJhbGciOiJIUzI1NiJ9.secret";
let masked = token.replace(/(?<=Bearer ).+/, "***REDACTED***");

console.log(masked);

//-------------------------------------------------

console.log(greet("Alice"));
function greet(name) {
    return `Hello, ${name}!`;
}
//greet();



// console.log(getStatus(200));
// const getStatus = (code) => code >= 200 ? "ok" : "error";

console.log("----------------------------------------------------------------------------");

function analyze(scores = []) {
    return scores.filter(s => s >= 70).length;
}
analyze();

console.log("----------------------------------------------------------------------------");



function makeCounter() {
    let count = 0;
    return () => ++count;
}
let counter = makeCounter();
counter();
counter();
console.log(counter());

console.log("----------------------------------------------------------------------------");

// const obj = {
//     env: "staging",
//     getEnv: () => {
//         return this.env;
//     }
// };
// console.log(obj.getEnv());

console.log("----------------------------------------------------------------------------");

function run(fn) {
    return fn("Login");
}
console.log(run(name => `Running: ${name}`));

console.log("----------------------------------------------------------------------------");

function outer() {
    let x = 10;
    function inner() {
        let x = 20;
        return x;
    }
    return x + inner();
}
console.log(outer());