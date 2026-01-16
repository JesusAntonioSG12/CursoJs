const hoy = new Date();
const dia = hoy.getDay();

if (dia === 0)
{
    console.log('Es domingo');
}
else if (dia === 1)
{
    console.log('Es lunes');
}
else
{
    console.log('No es ni domingo, ni lunes');
}