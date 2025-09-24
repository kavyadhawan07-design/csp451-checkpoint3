import fs from "fs";

fs.mkdirSync("build", { recursive: true });
fs.writeFileSync("build/index.html", "<h1>Hello CI/CD</h1>");
console.log("Building application...");
