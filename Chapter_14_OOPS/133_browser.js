class Browser {
    constructor(name) {
        this.name = name;
        this.isOpen = true;
        console.log(name + " launched ");
    }
    startBrowser(name) {
        console.log(this.name + " started ");
    }
    closeBrowser(name) {
        console.log(this.name + " closed ");
    }
}
let chrome = new Browser("Chrome");
let firefox = new Browser("Firefox");
let edge = new Browser("Edge");

console.log(chrome.isOpen);
console.log(firefox.isOpen);
console.log(edge.isOpen);