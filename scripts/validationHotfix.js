import { execSync } from "child_process"

function getCurrentBranch() {
    return execSync("git rev-parse --abbrev-ref HEAD").toString().trim();
}

const currentBranch = getCurrentBranch();
const invalidPatterns = [/dev/, /develop/]; // 필터링할 패턴 목록

if (currentBranch.startsWith('hotfix/') && invalidPatterns.some(pattern => pattern.test(currentBranch))) {
    console.log('hotfix 브랜치는 master 브랜치에서 분기해야 합니다!!');
    process.exit(1);
}
