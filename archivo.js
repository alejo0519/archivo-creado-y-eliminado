const fs = require('fs');
const path = require('path');

const carpeta = path.join(__dirname, 'carpeta');
const archivo = path.join(carpeta, '12.txt');
const contenido = 'Hola';

if (fs.existsSync(archivo)) {
    fs.unlinkSync(archivo); 
    fs.rmdirSync(carpeta);  
    console.log('El archivo y la carpeta fueron eliminados.');
} else {
    if (!fs.existsSync(carpeta)) {
        fs.mkdirSync(carpeta);
    }

    fs.writeFileSync(archivo, contenido); 
    console.log('El archivo fue creado.');
}
