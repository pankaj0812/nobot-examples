console.log(`The process id is ${process.pid}`);
process.on('exit', (code) =>{
    console.log(`The process code is ${code}`);
});
process.stdout.write('Hello, I am writing to standard output\n');
process.stdout.write(`Current working directory ${process.cwd()}`);
console.log(`The process uptime is ${process.uptime()} seconds`);