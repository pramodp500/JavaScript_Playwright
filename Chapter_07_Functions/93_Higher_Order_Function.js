// A function thta takes function as arguement

function runWithLogging(testfn, testName) {
    console.log(`Starting: ${testName}`);
    let result = testfn();
    console.log(`Finished: ${testName}  -> ${result}`);
    return result;
}
function loginTest() {
    return "Pass";
}
function loginFailed() {
    return "Fail";
}

console.log(runWithLogging(loginTest, "Login Test"));
console.log(runWithLogging(loginFailed, "Login Test"));
