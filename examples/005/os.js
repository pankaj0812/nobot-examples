const os = require('os');
const cpuCores = os.cpus();
const coreCount=cpuCores.length;
const coreModel=cpuCores[0].model;
console.log(`I can see your ${coreModel} has ${coreCount} cores.`);