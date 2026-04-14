interface executable {
    name: string;
    run(): void;
    getStatus(): string;
}

class testcase implements executable {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    run(): void {
        console.log("Running TestNG");
    }
    getStatus(): string {
        return "Pass";
    }
}

class Junit implements executable {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    run(): void {
        console.log("Running Junit");
    }
    getStatus(): string {
        return "Pass";
    }
}

let testNG = new testcase("TestNG");
let junit = new Junit("Junit");

testNG.run();
junit.run();

console.log(testNG.getStatus());
console.log(junit.getStatus());
