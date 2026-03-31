let testRun = new Promise(function (resolve, reject) {
    reject("Assertion Failed");
});

testRun
    .then(function (data) {
        console.log(data);
    }).catch(function (error) {
        console.log(error);
    }).finally(function () {
        console.log("Test Completed");
    });