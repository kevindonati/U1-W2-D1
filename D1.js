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

/* Stringa, numero, boolean, undefined e null.
-Stringa è un dato dentro degli apici (sia doppi "" che singoli '') esempio: "ciao" '80' "true"
-Numero è un dato numerico, quindi qualsiasi numero (non all'interno di apici, altrimenti sarebbe una stringa) esempio: 80 
-Boolean è un dato che ritorna true o false, serve per testare la vericidità di qualcosa attravero gli operatori di comparazione (<, >, <=, >=, ===, !==, !). esempio: let esempio = 4 < 8; console.log(esempio) stamperà true, perchè 4 è minore di 8.
-Undefined è un dato che viene assegnato ad un elemento che non ha un valore definito. esempio: let x (x non ha un valore definito)
-Null è un dato che viene assegnato ad un elemnto e specifica che non ha un valore. esempio: let x = null
*/

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

let myName = "Kevin"
console.log("Esercizio 2", myName)

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

let a = 12
let b = 20
console.log("Esercizio 3", a + b)

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x
x = 12
console.log("Esercizio 4", x)

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

myName = "Donati"
console.log("Esercizio 5", myName)

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

let y = 4 - x
console.log("Esercizio 6", y)

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

let name1
let name2

name1 = "john"
name2 = "John"

console.log("Esercizio 7", name1 !== name2)
console.log("Esercizio 7 extra", name1 === name2.toLowerCase())
