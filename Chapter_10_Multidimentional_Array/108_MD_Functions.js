let suiteResults = [
    ["search-pass", "filter-fail", "sort-pass"],
    ["checkout-fail", "payment-pass", "logout-pass"]
];
for (let i = 0; i < suiteResults.length; i++) {
    for (let j = 0; j < suiteResults[i].length; j++) {
        if (suiteResults[i][j].includes("fail")) {
            console.log(suiteResults[i][j]);
        }
    }
}

