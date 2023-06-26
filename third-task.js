const fs = require("fs");

// Part 1: Create a file named "welcome.txt" containing one line "Hello Node"

fs.writeFile("welcome.txt", "Hello Node", (err) => {
  if (err) {
    console.error("Error writing file:", err);
  } else {
    console.log("File created successfully.");

    // Part 2: Read and console.log data from the file hello.txt
    fs.readFile("hello.txt", (err, data) => {
      if (err) {
        console.error("Error reading file:", err);
      } else {
        console.log("File content:", data);
      }
    });
  }
});
