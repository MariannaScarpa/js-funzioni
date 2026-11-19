//definizione di una funzione che cambia valuta da dollaro ad euro con tasso di scambio


function convertiInEuro(dollari, tasso) {
    return dollari * tasso;
}

//invocazione della funzione

const cambio = convertiInEuro(56, 0.92)

console.log(`${cambio}€`)