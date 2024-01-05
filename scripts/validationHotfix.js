import { execSync } from "child_process"

function getCurrentBranch() {
    return execSync("git rev-parse --abbrev-ref HEAD").toString().trim();
}

const currentBranch = getCurrentBranch();
const invalidPatterns = [/dev/, /develop/]; // 필터링할 패턴 목록

if (currentBranch.startsWith('hotfix/') && invalidPatterns.some(pattern => pattern.test(currentBranch))) {
    console.error('Error: Hotfix branch name should not contain "dev" or "develop".');
    process.exit(1);
}
