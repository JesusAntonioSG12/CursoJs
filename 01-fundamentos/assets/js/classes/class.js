class Pesona {

    static _conteo = 0;

    static get conteo() {
        return Pesona._conteo + ' instancias';
    }

    static mensaje() {
        console.log('Hola a todos, soy un método estático');
    }

    nombre;
    edad;
    comida;

    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
        Pesona._conteo++;
    }

    quienSoy() {
        console.log(`Soy ${this.nombre} y tengo ${this.edad} años`);
    }

    set setComidaFavorita(comida) {
        this.comida = comida;
    }

    get getComidaFavorita() {
        return this.comida;
    }
}

spiderMan = new Pesona("Peter Parker", 18);
spiderMan.quienSoy();
spiderMan.setComidaFavorita = "Pizza";
console.log(spiderMan.getComidaFavorita);