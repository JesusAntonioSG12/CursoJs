(() => {
    // Variables
    let deck = [],
    jugadores = [],
    computadora = null;
    
    // tipos de cartas
    const tipos = ['C', 'D', 'H', 'S'],
    especiales = ['A', 'J', 'Q', 'K'];

    // Referencias HTML
    const divJugadores = document.querySelector('#jugadores');
    
    const btnPedirCarta = document.querySelector('#btn-pedir-carta'),
    btnDetener = document.querySelector('#btn-detener'),
    btnNuevoJuego = document.querySelector('#btn-nuevo-juego');

        
    const crearDeck = () => {
        for (const tipo of tipos){            
            for (let i = 2; i <= 10; i++) {               
                deck.push(`${i}${tipo}`);
            }
            for (const especial of especiales){
                deck.push(`${especial}${tipo}`)
            }
        }
        
    }

    const barajarDeck = () => deck = _.shuffle(deck);

    const inicializarJuego = (jugadoresCantidad = 1) => {
        deck = [];
        jugadores = [];

        for (let i = 1; i <= jugadoresCantidad; i++) {
            jugadores.push(new Jugador(i));
        }

        computadora = new Computadora();
        
        crearDeck(); // Inicializar la baraja
        barajarDeck(); // revolver baraja
        
        btnPedirCarta.disabled = false
        btnDetener.disabled = false
    }
    
    const pedirCarta = () => {
        if (deck.length === 0) {
            throw 'No hay cartas en el deck';
        } 
        
        return deck.pop();
    }

    const obtenerValorCarta = (carta) => {
        for (tipo of tipos){
            for (let i = 2; i <= 10; i++){
                if (carta === `${i}${tipo}`){
                    return i
                }
            }
            
            if (carta === `A${tipo}`) {
            return 11;
        }
            if (carta === `J${tipo}` || carta === `Q${tipo}` || carta === `K${tipo}`) {
                return 10;
            }
        }   
        
        throw `La carta no es valida. carta : ${carta}`; 
    }
    
    const maxPuntos = () => {
        let max = 0;
        for (jugador of jugadores) {
            if (jugador.puntos > max) {
                max = jugador.puntos;
            }
        }
        return max;
    }

    
    class Jugador {
        constructor(id = 1) {
            this.puntos = 0;
            this.id = id;

            this.crearBaseHtml();
            this.actualizarContador();
        }

        crearBaseHtml() {
            this.divJugador = document.createElement('div');
            this.divJugador.classList.add('row');
            this.divJugador.classList.add('container');
            this.divJugador.setAttribute('id', `jugador-${this.id}`);

            this.contador = document.createElement('h1');
            this.contador.classList.add('text-white');
            
            this.actualizarContador();

            this.divCartas = document.createElement('div');
            this.divCartas.setAttribute('id', 'cartas');


            this.divJugador.append(this.contador);
            this.divJugador.append(this.divCartas);
            divJugadores.append(this.divJugador);
        }

        actualizarContador() {
            this.contador.innerText = `Jugador ${this.id}: ${this.puntos}`;
        }

        agregarCarta(carta) {
            const imgCarta = document.createElement('img');
            imgCarta.src = `assets/cartas/${carta}.png`;
            imgCarta.classList.add('carta');
            this.divCartas.append(imgCarta);
        }

        turno() {
            const carta = pedirCarta();
            this.agregarCarta(carta);
            this.puntos += obtenerValorCarta(carta);
            this.actualizarContador();
        }
    }

    class Computadora extends Jugador {
        constructor() {
            super('Computadora');
        }

        turno(minimoPuntos) {
            do {
                let carta = pedirCarta();
                this.agregarCarta(carta);
                this.puntos += obtenerValorCarta(carta);
                this.actualizarContador();
            } while (this.puntos <= minimoPuntos && this.puntos < 21);
            console.log(minimoPuntos);
        }
    }
    
    inicializarJuego(2);

    // Eventos
    btnPedirCarta.addEventListener('click', () => {
        for (jugador of jugadores) {

                jugador.turno(pedirCarta());

                setTimeout(() => {
                    if (jugador.puntos > 21) {
                        alert('Perdiste');
                        btnPedirCarta.disabled = true;
                        btnDetener.disabled = true;              
                    }
                }, 100);
            }
        }
    );

    btnDetener.addEventListener('click', () => {
            btnPedirCarta.disabled = true
            btnDetener.disabled = true

            computadora.turno(maxPuntos());

            setTimeout(() => {
                    if (computadora.puntos > maxPuntos() && computadora.puntos <= 21) {
                        alert('Ganó la computadora');
                    }
                    else{
                        alert('Ganaste');
                    }
                }, 100);
        }
    );

    btnNuevoJuego.addEventListener('click', () =>{
            divJugadores.innerHTML = '';
            inicializarJuego();
        }
    );
    
})();