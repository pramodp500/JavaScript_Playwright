interface TestHooks {
    (testName: string): void;

}

let beforeHooks: TestHooks = function (testName: string): void {
    console.log("Before Hooks" + testName);
}

let afterHooks: TestHooks = function (testName: string): void {
    console.log("After Hooks" + testName);
}

let testCase1 = {
    beforeHooks: beforeHooks,
    afterHooks: afterHooks,
    testName: "Test Case 1"
}

console.log(testCase1);
beforeHooks(testCase1.testName);
afterHooks(testCase1.testName);
