/*

funzione di partenza da cui estrarne 2 più piccole

function valutaStudente(voto1, voto2, voto3) {
    const media = (voto1 + voto2 + voto3) / 3;
    if (media >= 6) {
        return 'Promosso con media ' + media;
    } else {
        return 'Bocciato con media ' + media;
    }
}
*/



// definizione funzione che calcola la media dei voti

function calcoloMedia(voto1, voto2, voto3) {
    return (voto1 + voto2 + voto3) / 3;
}

const mediaDeiVoti = calcoloMedia(8, 10, 3);

console.log(`La media dei tuoi voti è ${mediaDeiVoti}`);



//defimizione funzione per verificare la sufficienza

function sufficienza(mediaDeiVoti) {
    return mediaDeiVoti >= 6;
}

const sufficiente = sufficienza(mediaDeiVoti);

if (sufficiente == true) {

    console.log(`Sei stato ammesso con la media del ${mediaDeiVoti}`);
} else {
    console.log(`Non sei stato ammesso perchè la tue media è del ${mediaDeiVoti}`);
}