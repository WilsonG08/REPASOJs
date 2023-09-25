
const { crearArchivo } = require('./helpers/multilicar')

console.clear();

console.log(process.argv)

const [ , , arg3 = 'base = 5'] = process.argv;
const [ , base = 5 ] = arg3.split('=');
console.log(base);


//const base = 10;

crearArchivo( base )
    .then((nombreArchivo) => console.log(nombreArchivo, 'creado'))
    .catch((err) => console.log(err));

