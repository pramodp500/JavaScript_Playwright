interface basePage {
    url: string;
    title: string;

}
interface loginPage extends basePage {
    username: string;
    password: string;

}

let loginPage: loginPage = {
    url: "https://www.google.com",
    title: "Login Page",
    username: "admin",
    password: "password"
}

console.log("URL : ", loginPage.url);
console.log("Title : ", loginPage.title);
console.log("Username : ", loginPage.username);
console.log("Password : ", loginPage.password);