// Transforming strings

let str = "    Hello, World!    ";
console.log(str.toUpperCase());

console.log(str.toLowerCase());

console.log(str.trim());

let msg = "Test: FAIL. Retry:FAIL.";
console.log(msg.replace("FAIL", "PASS"));

console.log(msg.replaceAll(/FAIL/g, "PASS"));

//Concatenation

let message = "Hello" + " " + "World!";
let message1 = "Hello".concat("     ", "World");
console.log(message);
console.log(message1);

let url = "https://staging.iqzsystems.com/";
console.log(url.replace(/staging/g, "qa"));

// Splittingand Joining

let results = "pass,fail,skip";
console.log(results.split(","));

let he = "Hello";
console.log(he.split(""));

let cases = "Test_login_Pass";
console.log(cases.split("_").join(" "));
//console.log(cases.join(" "));

let parts = ["2024", "03", "07"];
let date = parts.join("-");
console.log(date);


