let testMatrix = [
    ["login", "pass", 200],
    ["login", "wrongpass", 401],
    ["wronglogin", "pass", 401],
    ["wronglogin", "wrongpass", 401],
];

for (let i = 0; i < testMatrix.length; i++) {
    for (let j = 0; j < testMatrix[i].length; j++) {
        console.log(testMatrix[i][j] + " ");
    }
    console.log("\n");
}