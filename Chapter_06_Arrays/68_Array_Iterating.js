let tests = ["login", " checkout", "search"];

for (let i = 0; i < tests.length; i++) {
    console.log(tests[i]);
    if (tests[i] === "checkout")
        console.log("Checkout found at index " + i);
}


for (let test of tests) {
    console.log(test);
    if (test === "checkout")
        console.log("Checkout found at index " + i);
}

tests.forEach((test, index) => {
    console.log('${index} : ${test}');
});

let students = ["John", "Doe", "Smith", "Brown"];

for (let student in students) {
    console.log(student);
}