/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/
let number1 = 11;
let number2 = 11;

if (number1 > number2) {
  console.log(number1 + " è il più grande");
}
if (number1 < number2) {
  console.log(number2 + " è il più grande");
}
if ((number1 = number2)) {
  console.log(number1 + " è uguale a " + number2);
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/
let x = 4;
if (x !== 5) {
  console.log("not equal");
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/
let y = 10;
if (y % 5 === 0) {
  console.log("divisibile per 5");
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/
let numero1 = 11;
let numero2 = 3;
if (numero1 === 8 || numero2 === 8 || numero1 + numero2 === 8 || numero1 - numero2 === 8 || numero2 - numero1 === 8) {
  console.log("true");
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/
let totalShoppingCart = 35;
let shippingCost = 10;
let amountPay = totalShoppingCart;
if (totalShoppingCart < 50) {
  amountPay += shippingCost;
}
console.log("Totale da pagare", amountPay);

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/
let totalShoppingCart2 = 30;
let shippingCost2 = 10;
let blackFriday = 0.8;
let amountPay2 = totalShoppingCart2;

let amountPay2 = totalShoppingCart2;
if (totalShoppingCart2 < 50) {
  amountPay2 += shippingCost2;
}
console.log("Totale da pagare", amountPay2);

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

let variabile1 = 33;
let variabile2 = 33;
let variabile3 = 33;

if (variabile1 >= variabile2 && variabile1 >= variabile3) {
  if (variabile2 >= variabile3) {
    console.log(variabile1, variabile2, variabile3);
  } else {
    console.log(variabile1, variabile3, variabile2);
  }
} else if (variabile2 >= variabile1 && variabile2 >= variabile3) {
  if (variabile1 >= variabile3) {
    console.log(variabile2, variabile1, variabile3);
  } else {
    console.log(variabile2, variabile3, variabile1);
  }
} else if (variabile3 >= variabile1 && variabile3 >= variabile2) {
  if (variabile1 >= variabile2) {
    console.log(variabile3, variabile1, variabile2);
  } else {
    console.log(variabile3, variabile2, variabile1);
  }
}

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/
let alg1 = 6;
if (typeof alg1 === "number") {
  console.log("vero");
} else {
  console.log("falso");
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/
let alg2 = 3;
if (alg2 % 2 === 0) {
  console.log(alg2 + " è pari");
} else {
  console.log(alg2 + " è dispari");
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
    */
let val = 11;
if (val < 5) {
  console.log("Meno di 5");
} else if (val < 10) {
  console.log("Meno di 10");
} else {
  console.log("Uguale a 10 o maggiore");
}

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};

me.city = "Toronto";
console.log(me.city);

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/
delete me.lastName;
console.log(me.lastName);

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/
me.skills.pop();
console.log(me.skills);

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/
let array1 = [];
array1.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(array1);

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/
array1[array1.length - 1] = 100;
console.log(array1);
