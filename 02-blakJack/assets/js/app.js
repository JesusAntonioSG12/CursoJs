let = deck = [];

function crearDeck() {
    const tipos = ['C', 'D', 'H', 'S'];
    const especiales = ['A', 'J', 'Q', 'K'];

    // Generar las cartas numericas
    for (let i = 2; i < 10; i++) {            
        for (const tipo of tipos) {               
            deck.push(`${i}${tipo}`);
        }
    }
    
    // Generar las cartas especiales
    for (const tipo of tipos) {
        for (const especial of especiales) {
            deck.push(`${especial}${tipo}`);
        }
    }  
}

const barajarDeck = () => deck = _.shuffle(deck);

function pedirCarta() {
    if (deck.length === 0) {
        throw 'No hay cartas en el deck';
    } 

    return deck.pop();
}

function obtenerValorCarta(carta) {
    for (let i = 2; i < 10; i++) {
        if (carta[0] == i) {
            return i;
        }
    }
    
    if (carta[0] == 'A') {
        return 11;
    }
    else if (carta[0] == 'J' || carta[0] == 'Q' || carta[0] == 'K') {
        return 10;
    }
    else {
        throw 'La carta no es valida';
    }


}

crearDeck(); // Inicializar la baraja
barajarDeck(); // revolver baraja

console.log(deck[0], obtenerValorCarta(deck[0]));