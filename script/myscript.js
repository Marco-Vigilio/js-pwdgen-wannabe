console.log("Benvenuto");
console.log("Esercizio, scrivere in nome, cognome e colore preferito dell'utente");

let nome;
let cognome;
let colore;

nome = prompt ('Inserisci il tuo nome: ');
document.getElementById('name').innerHTML = "Il tuo nome è: " + nome;

cognome = prompt ('Inserisci il tuo Cognome: ');
document.getElementById('surname').innerHTML = "Il tuo cognome è: " + cognome;

colore = prompt ('Inserisci il tuo colore preferito: ');
document.getElementById('color').innerHTML = "Il tuo colore preferito è: " + colore;

document.getElementById('result').innerHTML = nome+cognome+colore+"21";

document.getElementById('Result').innerHTML = "nomecognomecolorepreferito21";