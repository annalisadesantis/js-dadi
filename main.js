// Generare un numero casuale tra 1 e 6 per simulare il lancio di un dado (giocata 1).

var numero_casuale1 = Math.floor(Math.random() * 6) + 1;
console.log(numero_casuale1);

// Generare un secondo numero casuale tra 1 e 6, che sarà la seconda giocata.

var numero_casuale2 = Math.floor(Math.random() * 6) + 1;
console.log(numero_casuale2);

// Comunicare quali dei due utenti (tra giocatore 1 e giocatore 2) ha vinto.

if (numero_casuale1 > numero_casuale2){
    console.log("Ha vinto il giocatore 1");
}else if (numero_casuale1 == numero_casuale2){
    console.log("Pareggio");
} else {
    console.log("Ha vinto il giocatore 2");
}
