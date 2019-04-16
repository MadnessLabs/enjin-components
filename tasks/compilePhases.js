const fg = require('fast-glob');
var exec = require('child_process').exec;

const entries = fg.sync(['src/**/*.phases.ts']);
const command = `tsc ${entries} --out ./www/phases.js --module amd`;

exec(command, function(error, stdout, stderr) {
    if (error !== null) {
        console.log('exec error: ' + error);
    }
    console.log('Completed rendering phases...')
});