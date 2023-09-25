const argv = require('yargs')
        .option('b', {
            alias: 'base',
            type: 'number',
            demandOption: true,
            describe: 'Es la base de la tabla d multiplicar'
        })
        .option('l', {
            alias: 'listar',
            type: 'boolean',
            demandOption: true,
            default: false,
            describe:' Muestra la tabla en consola'
        })
        .option('h', {
            alias: 'hasta',
            type: 'number',
            demandOption: true,
            default: 10,
            describe:'Hasta que numero de la tabla '
        })
        .check( (argv, options) =>{
            //console.log('yargs', argv);
            if( isNaN( argv.b )){
                throw 'La base tiene que ser un numero'
            }
            return true;
        })
        .argv;

module.exports = argv;