
const os = require('os');


console.log("=== INFORMACIÓN DEL SISTEMA ===");
console.log("Sistema operativo: " + os.platform());
console.log("Versión del sistema: " + os.release());
console.log("Arquitectura: " + os.arch());
console.log("Memoria total (MB): " + (os.totalmem() / 1024 / 1024).toFixed(2));
console.log("Memoria libre (MB): " + (os.freemem() / 1024 / 1024).toFixed(2));
console.log("Tiempo encendido (segundos): " + os.uptime());

function convertirTiempo(segundos) {
    let dias = Math.floor(segundos / 86400);
    segundos %= 86400;

    let horas = Math.floor(segundos / 3600);
    segundos %= 3600;

    let minutos = Math.floor(segundos / 60);
    segundos = Math.floor(segundos % 60);

    console.log("\n=== TIEMPO DE ACTIVIDAD ===");
    console.log("Días: " + dias);
    console.log("Horas: " + horas);
    console.log("Minutos: " + minutos);
    console.log("Segundos: " + segundos);
}


const uptime = os.uptime();
convertirTiempo(uptime);
