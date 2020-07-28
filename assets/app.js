/* Closures */
function colorPrinter(color) {
 let colorMessage = `The color ${color};`

 return function() {
     console.log(colorMessage);
 }
}
let blueColor = colorPrinter(`blue`);
console.log(blueColor());



function futbolist(jugador) {
    let jugadas = `Gambetas ${jugador}`

    return function() {
    console.log(jugadas);
    }
}
let juventus = futbolist("De Christiano");
console.log(juventus());