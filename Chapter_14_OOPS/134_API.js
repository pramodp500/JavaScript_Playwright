class APIClient {
    constructor(baseURL) {
        this.baseURL = baseURL;
    }
    get(path) {
        return this.baseURL + path;

    }
}
let statging = new APIClient("https://staging.com");
let production = new APIClient("https://production.com");

console.log(statging.get("/users"));
console.log(production.get("/users"));