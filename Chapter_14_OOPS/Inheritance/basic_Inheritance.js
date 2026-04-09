class basePage {
    constructor(pageName) {
        this.pageName = pageName;
    }
    open() {
        console.log("Opening the page " + this.pageName);
    }
    close() {
        console.log("closing the page " + this.pageName);
    }
}
class loginPage extends basePage {
    // constructor() {
    //     console.log("Login Page  ");
    // }
}
let page = new loginPage();
page.open();
page.close();