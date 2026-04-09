class baseTest {
    execute() {
        console.log("E2E Test started");
    }
}
class ApiTest extends baseTest {
    execute() {
        super.execute();
        console.log("API Test started");
    }
}
class MobileTest extends baseTest {
    execute() {
        console.log("Mobile Test started");
        super.execute();
    }
}
let Tests = [new ApiTest(), new MobileTest()];

Tests.forEach(function (test) {
    test.execute();
});
