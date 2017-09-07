const { spawn } = require('child_process');
const node = spawn('node', [
  '--inspect-brk',
  './node_modules/.bin/eslint',
  'script.js',
  '--fix' ,
])

node.stdout.on('data', data => {
  console.log(data, data.toString(), typeof data)
  if (/chrome-devtools/.test(data.toString()))
  console.log(`stdout: ${data}`);
});
node.stderr.on('data', (data) => {
  if (/chrome-devtools/.test(data.toString()))
  console.log(`stderr: ${data}`);
});

process.on('exit', () => node.kill())
