class Credentials {
    #apikey;
    constructor(user, key) {
        this.user = user;
        this.#apikey = key;
    }
    getAuthHeader() {
        return "Bearer " + this.#apikey;
    }
}
let cred = new Credentials("Admin", "#secret_Key");
console.log(cred.getAuthHeader());
console.log(cred.user);
console.log(cred.apikey);