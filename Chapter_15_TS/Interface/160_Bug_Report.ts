interface bugReport {
    id: number;
    title: string;
    description: string;
    status: string;
    priority: string;
    assignedTo: string;
    createdAt: Date;
    updatedAt: Date;
    stepsTOReproduce: string[];
}
function logBugReport(bug: bugReport): void {
    console.log("Bug " + bug.id + " " + bug.title + " " + bug.description + " " + bug.status + " " + bug.priority + " " + bug.assignedTo + " " + bug.createdAt + " " + bug.updatedAt + " ");
    for (let i = 0; i < bug.stepsTOReproduce.length; i++) {
        console.log("Step " + (i + 1) + ": " + bug.stepsTOReproduce[i]);
    }
}

let bug1: bugReport = {
    id: 1,
    title: "Bug Report 1",
    description: "Bug Report 1 Description",
    status: "Open",
    priority: "High",
    assignedTo: "John Doe",
    createdAt: new Date(),
    updatedAt: new Date(),
    stepsTOReproduce: ["Step 1 : To Verify", "Step 2 : To Validate", "Step 3 : To Verify"]
}

logBugReport({
    id: 2,
    title: "Bug Report 2",
    description: "Bug Report 2 Description",
    status: "Open",
    priority: "High",
    assignedTo: "John Doe",
    createdAt: new Date(),
    updatedAt: new Date(),
    stepsTOReproduce: ["Step 1 : To Verify", "Step 2 : To Validate", "Step 3 : To Verify"]
})

console.log(bug1);
console.log(logBugReport)