const args = process.argv.slice(2);
const [name] = args;
if (name === undefined){
    console.error('No arguments passed');
    process.exit(0);
}
console.log(`Good day, ${name}`);