async function apiCall(name) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve(name, "200 ok");
        }, 2000);
    })
}

async function sequentialTest() {
    console.log("Starting of Test");
    let start = Date.now();


    let [result1, result2, result3] = await Promise.all([apiCall("Login"), apiCalll("Search"), apiCall("Logout")]);

    console.log(result1);
    console.log(result2);
    console.log(result3);


}

sequentialTest();