const os = require('os');


console.log("=== INFORMACIÓN DEL SISTEMA ===");
console.log("Sistema operativo: " + os.platform());
console.log("Versión del sistema: " + os.release());
console.log("Arquitectura: " + os.arch());
console.log("Memoria total (MB): " + (os.totalmem() / 1024 / 1024).toFixed(2));
console.log("Memoria libre (MB): " + (os.freemem() / 1024 / 1024).toFixed(2));
console.log("Tiempo encendido (segundos): " + os.uptime());

function convertirTiempo(segundos) {
let { dias, horas, minutos } = newFunction();

console.log("\n=== TIEMPO DE ACTIVIDAD ===");
console.log("Días: " + dias);
console.log("Horas: " + horas);
console.log("Minutos: " + minutos);
console.log("Segundos: " + segundos);

console.log(dias+":"+horas+":"+minutos+":"+segundos)
console.log(`:${dias}:${horas}:`)

function newFunction() {
    let dias = Math.floor(segundos / 86400);
    let resto = segundos % 86400;

    let horas = Math.floor(resto / 3600);
    resto = resto % 3600;

    let minutos = Math.floor(resto / 60);
    let segundosRestantes = Math.floor(resto % 60);

    return { dias, horas, minutos, segundos: segundosRestantes };
}

let { dias: dias2, horas: horas2, minutos: minutos2, segundos: segundosFinal } = newFunction();
console.log(`Días: ${dias2}, Horas: ${horas2}, Minutos: ${minutos2}, Segundos: ${segundosFinal}`);
    console.log(`Días: ${dias}, Horas: ${horas}, Minutos: ${minutos}, Segundos: ${segundosFinal}`);
}


const uptime = os.uptime();
convertirTiempo(uptime);