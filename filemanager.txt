const fs = require("fs");

console.log("Creating file...");

fs.writeFile("test.txt", "Hello Node.js\n", (err) => {
    if (err) {
        console.log("Error creating file:", err);
        return;
    }

    console.log("File created successfully");

    console.log("Reading file...");

    fs.readFile("test.txt", "utf8", (err, data) => {
        if (err) {
            console.log("Error reading file:", err);
            return;
        }

        console.log("File contents:", data);

        console.log("Updating file...");

        fs.appendFile("test.txt", "Learning Node.js File System Module\n", (err) => {
            if (err) {
                console.log("Error updating file:", err);
                return;
            }

            console.log("File updated successfully");

            fs.readFile("test.txt", "utf8", (err, data) => {
                if (err) {
                    console.log("Error reading updated file:", err);
                    return;
                }

                console.log("Updated file contents:");
                console.log(data);

                console.log("Deleting file...");

                fs.unlink("test.txt", (err) => {
                    if (err) {
                        console.log("Error deleting file:", err);
                        return;
                    }

                    console.log("File deleted successfully");
                });
            });
        });
    });
});