/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/
// primitivi //
let numero = 34; // numero = contiene un numero che può essere: intero, float (decimale a 7 cifre), double (decimale a 10 cifre), binary (010101);
let nome = "Simone"; // stringa = contiene un numero oppure una parola all'interno o dei singoli o dei doppi apici
let isOnline = true; // boolean = true or false

// complessi //
let collezione = ["Simone", "Marco"]; // array = insieme di stringhe o numeri
//oggetto = una rappresentazione programmatica di ciò che esiste nella realtà
let persona = {
  nome: "Simone",
  cognome: "Attanasio",
  codiceFiscale: "4519519851562",
  cittaNascita: "Napoli",
  eta: 28,
  coloriPreferiti: ["viola", "verde", "nero"],
};
let elemento = `${2 + 6}`; // funzione

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/
let myName = "Simone";

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/
let risultato = 12 + 20;

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/
let x = 12;

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/
let myName = "Attanasio";
const myName = "Simone";
const myName = "Attanasio";
console.log(myName);

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/
let risultato2 = 4 - x;

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/
let name1 = "john";
let name2 = "John";
console.log(name1 == name2);

console.log(name2.toLowerCase() == name1);
