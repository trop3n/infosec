// To correctly use spawnSync to execute the ls command with -lah argument, you should separate the command and its arguments into two distinct parts:

const { spawnSync } = require('child_process');
const result = spawnSync('ls', ['-lah']);
console.log(result.stdout.toString());