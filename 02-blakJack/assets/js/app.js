let deck = [];

let puntosJugador = 0;
let puntosComputadora = 0;

const tipos = ['C', 'D', 'H', 'S'];
const especiales = ['A', 'J', 'Q', 'K'];

const btnPedirCarta = document.querySelector('#btn-pedir-carta');
const btnDetener = document.querySelector('#btn-detener');
const btnNuevoJuego = document.querySelector('#btn-nuevo-juego');

const contadorJugador = document.querySelector('#contador-jugador');
const contadorComputadora = document.querySelector('#contador-computadora');

const divCartasJugador = document.querySelector('#jugador-cartas');
const divCartasComputadora = document.querySelector('#computadora-cartas');

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

const turnoJugador = () => {
    puntosJugador += turnoBase(divCartasJugador)
    actualisarContadores();
}

const turnoComputadora = () => {
    do{
        puntosComputadora += turnoBase(divCartasComputadora)
    }while(puntosComputadora <= puntosJugador && puntosComputadora <= 21)
    actualisarContadores();
}

crearDeck(); // Inicializar la baraja
barajarDeck(); // revolver baraja

// Eventos
btnPedirCarta.addEventListener('click', () => {
    turnoJugador() 

    // forsar una espera en lo que se carga la imagen de las cartas
    setTimeout(() => {
        if (puntosJugador > 21){
            btnPedirCarta.disabled = true
            btnDetener.disabled = true
            alert('perdiste');
        }
    }, 100);
});

btnDetener.addEventListener('click', () => {
    btnPedirCarta.disabled = true
    btnDetener.disabled = true
    
    turnoComputadora()

    // forsar una espera en lo que se carga la imagen de las cartas
    setTimeout(() => {
        alert(puntosComputadora > 21 ? 'ganaste' : 'perdiste')
    }, 100);
});

btnNuevoJuego.addEventListener('click', () => {
    crearDeck();
    barajarDeck();

    btnPedirCarta.disabled = false
    btnDetener.disabled = false
    
    puntosJugador = 0;
    puntosComputadora = 0;   
    
    actualisarContadores()

    divCartasJugador.innerHTML = '';
    divCartasComputadora.innerHTML = '';
});