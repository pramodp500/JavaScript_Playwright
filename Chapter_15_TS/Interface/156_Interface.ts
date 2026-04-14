interface user {
    name: string;
    age: number;
    email: string;

}

interface testCase {
    id: number;
    title: string;
    description: string;
    status: string;
    priority: string;
    assignedTo: user;
    createdAt: Date;
    updatedAt: Date;
}

let testCase1: testCase = {
    id: 1,
    title: "Test Case 1",
    description: "Test Case 1 Description",
    status: "Pass",
    priority: "High",
    assignedTo: {
        name: "John Doe",
        age: 30,
        email: "[EMAIL_ADDRESS]"
    },
    createdAt: new Date(),
    updatedAt: new Date()
}
let testCase2 = {
    id: 2,
    title: "Test Case 2",
    description: "Test Case 2 Description",
    status: "Fail",
    priority: "Low",
    assignedTo: {
        name: "Jane Doe",
        age: 25,
        email: "[EMAIL_ADDRESS]"
    },
    createdAt: new Date(),
    updatedAt: new Date()
}

console.log(testCase1);
console.log(testCase2);
