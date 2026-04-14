interface testConfig {
    browser: string;
    headless: boolean;
    timeOuts?: number;
    retry?: number;
    baseURL: string;
}

let CiConfig: testConfig = {
    browser: "chrome",
    headless: true,
    baseURL: "https://www.google.com"
}
let localCongfig: testConfig = {
    browser: "firefox",
    headless: false,
    timeOuts: 200,
    retry: 3,
    baseURL: "https://www.google.com"
}

console.log(CiConfig);
console.log(localCongfig);
