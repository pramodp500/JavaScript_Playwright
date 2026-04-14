enum testStatus {
    Pass = "PASS",
    Fail = "FAIL",
    Skip = "SKIP",
    Blocked = "BLOCKED"
}

function getTestStatus(status: testStatus): void {
    console.log(status);
}

getTestStatus(testStatus.Pass);
getTestStatus(testStatus.Fail);
getTestStatus(testStatus.Skip);
getTestStatus(testStatus.Blocked);