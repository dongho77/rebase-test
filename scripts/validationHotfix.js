import { execSync } from "child_process"

function getCurrentBranch() {
    return execSync("git rev-parse --abbrev-ref HEAD").toString().trim();
}

console.log("Current branch: " + getCurrentBranch());
