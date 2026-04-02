getToken().then(function (token) {
    console.log(token);
}).catch(function (error) {
    console.log(error);
}).finally(function () {
    console.log("Test Completed");
});


async function getToken() {
    let token = "dsfhjdskfdsjfkhsdfdsfsdfdsfdsfsdfds";
    let user = "tester01";
    let password = "[PASSWORD]";
    return token;
}