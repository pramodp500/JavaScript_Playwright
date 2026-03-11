let responses = [200, 201, 404, 500, 404, 200, 503];

let allSuccess = responses.every(code => code >= 200 && code <= 299);

let firstError = responses.find(code => code < 200 || code > 299);

let uniqueErrors = [...new Set(responses.filter(code => code < 200 || code > 299))];

console.log("All Success:", allSuccess);
console.log("First Error:", firstError);
console.log("Unique Errors:", uniqueErrors);