let attempt = 0;
function flakyAPI() {
    attempt++;
    if (attempt < 3) {
        return Promise.reject("Attempt " + attempt + ": failed");
    }
    return Promise.resolve("Attempt" + attempt + ": Success!");
}

async function retryAttempt(maxretries) {
    for (let i = 1; i <= maxretries; i++) {
        try {
            let result = await flakyAPI();
            console.log('Pass Promise', result);
            break;
        }
        catch (error) {
            console.log('Fail Promise', error);
        }
    }
}

retryAttempt(5);