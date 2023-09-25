console.log("Inicio del programa"); // 1

setTimeout( () => {
    console.log('Primer Timeout') // 5
}, 3000);

setTimeout( () => {
    console.log('Segundo Timeout') // 5
}, 0);

setTimeout( () => {
    console.log('Tercer Timeout') // 2
}, 0);

console.log('Fin del programa'); // 4 :: 2