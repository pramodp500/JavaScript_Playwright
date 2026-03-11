let browser = ["chrome", "opera", "edge", "safari", "firefox"];
console.log(browser);
console.log(browser.length);

browser.pop();
console.log(browser);

console.log("-------------------------------------------------------TTA-----------------");

let removed = browser.shift();
console.log(browser);
console.log(removed);

console.log("-------------------------------------------------------TTA-----------------");

for (let i = 0; i < browser.length; i++) {
    console.log(browser[i]);
    if (browser[i] === "opera")
        console.log("Opera remved from selenium");
}