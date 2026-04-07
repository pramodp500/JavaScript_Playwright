class testRunner {
    static totalTests = 0;
    static passCount = 0;

    constructor(name, passed) {
        this.name = name;
        testRunner.totalTests++;
        if (passed) {
            testRunner.passCount++;
        }
    }
    static summary() {
        return testRunner.passCount + "/" + testRunner.totalTests + " passed";
    }
}
new testRunner("Login", true);
new testRunner("Logout", false);
new testRunner("Dashboard", true);
new testRunner("Profile", true);
new testRunner("Settings", false);
console.log(testRunner.summary());