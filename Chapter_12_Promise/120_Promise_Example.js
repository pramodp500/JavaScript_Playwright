function openBrowser() {
    return new Promise(function (resolve) {
        resolve("Browser Opened");
    });
}
function goToLogin() {
    return new Promise(function (resolve) {
        resolve("Clicked to Login");
    });
}
function enterCredentials() {
    return new Promise(function (resolve) {
        resolve("Credentials Entered");
    });
} function clickLogin() {
    return new Promise(function (resolve) {
        resolve("Login Clicked");
    });
} function closeBrowser() {
    return new Promise(function (resolve) {
        resolve("Browser Closed");
    });
}

openBrowser()
    .then(function (msg) {
        console.log("Step 1", msg);
        return goToLogin();

    }).then(function (msg) {
        console.log("Step 2 ", msg);
        return enterCredentials();
    }).then(function (msg) {
        console.log("Step 3 ", msg);
        return clickLogin();
    }).then(function (msg) {
        console.log("Step 4 ", msg);
        return closeBrowser();
    }).then(function (msg) {
        console.log("Step 5 ", msg);
    }).catch(function (error) {
        console.log("Error : " + error);
    }).finally(function () {
        console.log("Test Completed");
    });