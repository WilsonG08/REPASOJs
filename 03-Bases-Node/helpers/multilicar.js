const { rejects } = require('assert');
const fs = require('fs');
const { resolve } = require('path');
const { monitorEventLoopDelay } = require("perf_hooks");


const crearArchivo = async (base = 6) => {

    try {
        console.log('==============');
        console.log('Tabla del:', base);
        console.log('==============');

        let salida = '';

        for (i = 1; i <= 10; i++) {
            salida += (`${base} x ${i} = ${base * i}\n`);
        }

        console.log(salida)

        fs.writeFileSync(`tabla-${base}.txt`, salida);

        return `tabla-${base}.txt`;
    } catch (err) {
        throw err;

    }


}


module.exports = {
    crearArchivo
}