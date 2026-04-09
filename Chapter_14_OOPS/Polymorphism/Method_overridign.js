class baseTest {
    setup() {
        console.log("Browser selection");
    }

}
class ApiTest extends baseTest {
    setup() {
        console.log("API Test");
    }
}
class MobileTest extends baseTest {
    setup() {
        console.log("Mobile Test");
    }
}
let apiTest = new ApiTest();
apiTest.setup();
let mobileTest = new MobileTest();
mobileTest.setup();