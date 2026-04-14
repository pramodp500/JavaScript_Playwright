interface APIResponse {
    readonly statusCode: number;
    body: string;
    header?: object;
    responseTime?: number;
}

let response: APIResponse = {
    statusCode: 200,
    body: "Success",
    header: {
        "Content-Type": "application/json"
    },
    responseTime: 100
}

console.log(response);