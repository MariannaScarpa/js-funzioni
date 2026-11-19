//definizione funzione calcola eta, anno corrente - anno di nascita
//variabile con il risultato da stampare in console


function calcolaEta(annoDiNascita) {
    return 2026 - annoDiNascita;
}

//invocazione funzione
const miaEta = calcolaEta(2005);

console.log(`Io ho ${miaEta} anni`);

const etaMomi = calcolaEta(1993);

console.log(`La mia Momi ha ${etaMomi} anni`)