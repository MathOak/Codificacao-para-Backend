const os = require('os');

console.log("Plataforma:", os.platform());
console.log("Memória total:", os.totalmem());
console.log("CPUs:", os.cpus().length);


/* 
Plataforma: win32
Memória total: 34054356992
CPUs: 24
*/