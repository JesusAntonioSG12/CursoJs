// Declaracion de funcion
function saludar(nombre){
    console.log('Hola ', arguments);
}

saludar('jesus');

// Declaracion de funcion anonima
const saludar2 = function(nombre){
    console.log('Hola', nombre);
}

saludar2('juan');

// Declaracion de funcion de flecha
const saludarFlecha = (nombre) => console.log('Hola', nombre);

saludarFlecha('Mundo');