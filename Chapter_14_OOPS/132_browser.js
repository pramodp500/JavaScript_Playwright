class Testcase {
    constructor(name, status, priority) {
        this.name = name;
        this.status = status;
        this.priority = priority;

    }
    display() {
        console.log("Testcase Name: " + this.name);
        console.log("Testcase Status: " + this.status);
        console.log("Testcase Priority: " + this.priority);
    }
}

let testcase1 = new Testcase("Testcase 1", "Pass", "High");
let testcase2 = new Testcase("Testcase 2", "Fail", "Medium");
let testcase3 = new Testcase("Testcase 3", "Pass", "Low");

testcase1.display();
testcase2.display();
testcase3.display();