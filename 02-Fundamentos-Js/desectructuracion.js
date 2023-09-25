const deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneracion',
    getNombre() {
        return `${this.nombre} ${this.apellido} ${this.poder}`
    }
}

console.log(deadpool.getNombre())

// const nombre = 'Wade';
// const apellido = 'Winston';
// const poder = 'Regeneracion';

function imprimeHeroe( { nombre, apellido, poder, edad = 50 } ){
    //const { nombre, apellido, poder, edad = 50 } = deadpool;
    nombre = 'Giss'
    console.log(nombre, apellido, poder, edad)
}

imprimeHeroe(deadpool)