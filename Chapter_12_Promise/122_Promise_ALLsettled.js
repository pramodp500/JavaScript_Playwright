Promise.allSettled([
    Promise.resolve("Test A is Passed"),
    Promise.reject("Test B Failed"),
    Promise.resolve("Test C is Passed")
])
    .then(function (msg) {
        console.log(msg);
    }).catch(function (error) {
        console.log(error);
    }).finally(function () {
        console.log("Test Completed");
    });