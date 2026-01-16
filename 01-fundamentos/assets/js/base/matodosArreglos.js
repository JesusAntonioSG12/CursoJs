let juegos = ['zelda', 'mario', 'metroid'];
console.log(juegos.length); // Largo de lista

let primerJuego = juegos[0];

let ultimoJuego = juegos[juegos.length - 1];

juegos.forEach( (juegos, indice, arr) => {
    console.log(juegos, indice, arr);
});

juegos.push('F-Zero'); // agrega el argumento a la lista y retorna la nueva longitud
console.log(juegos, juegos.length);

juegos.unshift('Sonic'); // agrega el argumento a la lista en la primera posicion y retorna la nueva longitud
console.log(juegos, juegos.length);

juegoEliminado = juegos.pop(); // Elimina el ultimo elemento de la lista y lo retorna
console.log(juegoEliminado, juegos);

console.log(juegos.splice(1, 1)); // eliminara la cantidad de elementos del segundo argumento que esten del primer argumento y retorna una lista de los elementos removido
console.log(juegos);

console.log(juegos.indexOf('mario')); // Busca el indice de un valor en la lista, si no lo encuentra entonces retornara -1