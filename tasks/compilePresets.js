const fg = require('fast-glob');
var exec = require('child_process').exec;

const entries = fg.sync(['src/**/*.presets.ts']); 
const command = `tsc ${entries.join(" ")} --out www/presets.js --module amd ${process.argv[2] === 'watch' ? '--watch' : ""}`;

exec(command, function(error, stdout, stderr) {
    if (error !== null) {
        console.log('exec error: ' + error, stderr);
    }
    console.log('Completed rendering presets...')
});