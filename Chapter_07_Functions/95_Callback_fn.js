// callback is passed as argument ot another function after sometime

function runTests(testName, callback) {
    let result = "Pass";
    // code of 100 lines
    callback(testName, result);
}
function onComplete(name, result) {
    console.log(`${name} finished with: ${result}`);
}
runTests("LoginTest", onComplete);
console.log(runTests)