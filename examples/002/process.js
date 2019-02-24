console.log(`The process id is ${process.pid}`);
// process.on('exit', (code) =>{
//     console.log(`The process code is ${code}`);
// });
process.stdout.write('Hello, I am writing to standard output\n');
process.stdout.write(`Current working directory ${process.cwd()} \n`);
console.log(`The process uptime is ${process.uptime()} seconds`);
process.stdout.write('Type something and then hit enter: \n');
process.stdin.setEncoding('utf-8');
process.stdin.on('readable', () =>{
    const chunk = process.stdin.read();
    if(chunk!=null){
        process.stdout.write(`this is what was typed ${chunk}`);
        process.exit(0);
    }
});