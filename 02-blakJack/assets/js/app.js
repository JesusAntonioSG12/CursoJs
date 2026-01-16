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

function pedirCarta() {
    if (deck.length === 0) {
        throw 'No hay cartas en el deck';
    } 

    return deck.pop();
}

crearDeck(); // Inicializar la baraja
deck = _.shuffle(deck); // revolver baraja

console.log(deck);
console.log(pedirCarta());
console.log(deck);