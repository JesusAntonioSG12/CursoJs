const dia = 1;
const hora = 11;
const esFinDeSemana = [0, 6].includes(dia);
const horaApertura = esFinDeSemana ? 9 : 11;
const abierto = hora >= horaApertura;

if (abierto) {
    console.log('Está abierto');
}
else {
    console.log(`Está cerrado, la hora de apertura es a ${horaApertura === 1 ? 'la' : 'las'} ${horaApertura}`);
}