class baseTest {
    setup() {
        console.log("Test Started");
    }
    tearDown() {
        console.log("Test Ends")
    }
}
class ApiTest extends baseTest {
    setup() {
        super.setup();
        console.log("API Test");
    }
    tearDown() {

        console.log("API Test Ends");
        super.tearDown();
    }
}
let apiTest = new ApiTest();
apiTest.setup();
apiTest.tearDown();