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
    let result1 = await apiCall("Login");
    console.log(result1);
    let result2 = await apiCall("Search");
    console.log(result2);
    let result3 = await apiCall("Logout");
    console.log(result3);
    let end = Date.now();
    console.log("Total Time : " + (end - start));
}

sequentialTest();