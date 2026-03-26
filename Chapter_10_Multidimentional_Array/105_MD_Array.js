let grid = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(grid[0][0]);
console.log(grid[1][1]);
console.log(grid[2][2]);
console.log("--------------------------------------------------------------------------------");
for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
        console.log(grid[i][j]);
    }
}