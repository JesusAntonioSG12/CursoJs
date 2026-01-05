// Declaraion de un objeto

let personaje = {
    nombre : 'Tony Stark',
    codeName : 'Ironman',
    trajes : ['mark 1', 'mark 5', 'hulk buster']
};

// formas de aceder a sus valores

console.log(personaje.nombre, personaje.codeName) // Forma 1
console.log(personaje['codeName'], personaje['codeName']) // Forma 2

console.log('cantidad de trajes: ', personaje.trajes.length)
console.log('Ultimo traje: ', personaje.trajes[personaje.trajes.length - 1])