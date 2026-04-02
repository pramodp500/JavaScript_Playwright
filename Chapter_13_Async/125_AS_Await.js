async function getResults() {
    try {
        let result = await Promise.reject("503 Not Available");
    }
    catch (error) {
        console.log(error);
    }
    finally {
        console.log("Test Completed");
    }
}
getResults();

