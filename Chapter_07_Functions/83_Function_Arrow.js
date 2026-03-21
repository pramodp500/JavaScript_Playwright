// Arrow Function

const greet = () => {
    console.log("Hello!");
}
greet();

const greet1 = (name1) => `Hello, ${name1}!`;
console.log(greet1("Pramod"));

// multiline
const getResults = (score) => {
    if (score >= 35) {
        return "Pass";
    } else {
        return "Fail";
    }
}
console.log(getResults(40));