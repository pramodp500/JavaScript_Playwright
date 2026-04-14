enum browsers {
    Chrome,
    Firefox,
    Edge,
    Safari
}

function launchBrowser(browser: browsers): void {
    switch (browser) {
        case browsers.Chrome:
            console.log("Launching Chrome");
            break;
        case browsers.Firefox:
            console.log("Launching Firefox");
            break;
        case browsers.Edge:
            console.log("Launching Edge");
            break;
        case browsers.Safari:
            console.log("Launching Safari");
            break;
    }
}

launchBrowser(browsers.Chrome);
launchBrowser(browsers.Firefox);
launchBrowser(browsers.Edge);
launchBrowser(browsers.Safari);