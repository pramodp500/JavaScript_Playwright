let fastServer = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve("Fast Server Response");
    }, 1000);
});

let slowServer = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve("Slow Server Response");
    }, 2000);
});

Promise.race([fastServer, slowServer])
    .then(function (msg) {
        console.log(msg);
    }).catch(function (error) {
        console.log(error);
    }).finally(function () {
        console.log("Test Completed");
    });