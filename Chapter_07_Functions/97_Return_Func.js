function getStatus(code) {
    if (code >= 200 && code < 300) return "Success";
    if (code >= 400 && code < 500) return "Client Error";
    if (code >= 500) return "Server Error";
}

console.log(getStatus(201));
console.log(getStatus(404));
console.log(getStatus(500));
