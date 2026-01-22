/// Mala practica
fer = {
    nombre: 'fernado',
    edad: 25
}

maria = {
    nombre: 'maria',
    edad: 30
}

// Esta es una practica muy bieja de simular la creacion de una clase
function Persona(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
}
const juan = new Persona('juan', 28);
const ana = new Persona('ana', 22);
