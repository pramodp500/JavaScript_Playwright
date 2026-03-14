function vallidateStatusCode(status) {
    if (status >= 200 && status <= 300) {
        console.log("Request is fine");
    }
}
vallidateStatusCode(200);



const vallidateStatusCode_Exp = function (status) {
    if (status >= 200 && status <= 300) {
        console.log("Request is fine!!");
    }
}
vallidateStatusCode_Exp(200);


const vallidateStatusCode_Arr = (status) => {
    if (status >= 200 && status <= 300) {
        console.log("Request is fine!!");
    }
}
vallidateStatusCode_Arr(200);