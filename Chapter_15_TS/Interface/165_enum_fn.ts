enum severity {
    Low,
    Medium,
    High,
    Critical
}

console.log(severity.High);

function needsImmediateAttention(Severity: severity): boolean {
    return Severity >= severity.High;
}

console.log("Critical Urgent ", needsImmediateAttention(severity.Critical));
console.log("High " + severity.High);
console.log("Low " + severity.Low);
console.log("Medium " + severity.Medium);
console.log("Critical " + severity.Critical);