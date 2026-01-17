let deck = [];

const tipos = ['C', 'D', 'H', 'S'];
const especiales = ['A', 'J', 'Q', 'K'];

const btnPedirCarta = document.querySelector('#btn-pedir-carta');
const btnDetener = document.querySelector('#btn-detener');
const btnNuevoJuego = document.querySelector('#btn-nuevo-juego');

const contadorJugador = document.querySelector('#contador-jugador');
const contadorComputadora = document.querySelector('#contador-computadora');

const divCartasJugador = document.querySelector('#jugador-cartas');
const divCartasComputadora = document.querySelector('#computadora-cartas');

let puntosJugador = 0;
let puntosComputadora = 0;

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

const actualisarContadores = () => {
    contadorJugador.innerText = puntosJugador;
    contadorComputadora.innerText = puntosComputadora;
}

const agregarCartaHTML = (div, carta) => {
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${carta}.png`;
    imgCarta.classList.add('carta');

    div.append(imgCarta);
}

const turnoBase = (div) => {
    const carta = pedirCarta();
    agregarCartaHTML(div, carta);
    return obtenerValorCarta(carta);
}

const turnoJugador = () =>{
    puntosJugador += turnoBase(divCartasJugador)
}

const turnoComputadora = () => {
    do{
        puntosComputadora += turnoBase(divCartasComputadora)
        actualisarContadores();
    }while(puntosComputadora <= puntosJugador && puntosComputadora <= 21)
}

crearDeck(); // Inicializar la baraja
barajarDeck(); // revolver baraja

// Eventos
btnPedirCarta.addEventListener('click', () => {
        turnoJugador()
        actualisarContadores();

        if (puntosJugador >= 21){
            btnPedirCarta.disabled = true
            btnDetener.disabled = true
            alert('perdiste');
        }
    }
);

btnDetener.addEventListener('click', () => {
        btnPedirCarta.disabled = true
        turnoComputadora()
        btnDetener.disabled = true

        if (puntosComputadora > 21){
            alert('ganaste');
            return
        }
        if (puntosComputadora > puntosJugador){
            alert('perdiste');
            return
        }


    }
);

btnNuevoJuego.addEventListener('click', () =>{
        puntosJugador = 0;
        puntosComputadora = 0;   
        actualisarContadores()
    }
);

console.log(deck);