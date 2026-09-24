const operation = process.argv[2];
const n1 = Number(process.argv[3]);
const n2 = Number(process.argv[4]);

let result;

if (operation === "add") {
    result = n1 + n2;
}
else if (operation === "subtract") {
    result = n1 - n2;
}
else if (operation === "multiply") {
    result = n1 * n2;
}
else if (operation === "divide") {
    if (n2 === 0) {
        console.log("Error: Cannot divide by zero");
        process.exit();
    }
    result = n1 / n2;
}
else {
    console.log("Invalid operation");
    process.exit();
}

console.log("Result:", result);