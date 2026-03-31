let checkAuth = Promise.resolve("Auth Ok");
let checkDB = Promise.resolve("DB Ok");
let checkAPI = Promise.resolve("API Ok");

Promise.all([checkAuth, checkDB, checkAPI]).then(function (msg) {
    console.log(msg);
}).catch(function (error) {
    console.log(error);
}).finally(function () {
    console.log("Test Completed");
});

Promise.all([
    Promise.resolve("Ok"),
    Promise.reject("DB Down"),
    Promise.resolve("OK")
])
    .then(function (msg) {
        console.log(msg);
    }).catch(function (error) {
        console.log(error);
    }).finally(function () {
        console.log("Test Completed");
    });