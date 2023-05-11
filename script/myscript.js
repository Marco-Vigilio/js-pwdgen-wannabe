console.log("Benvenuto");
console.log("Esercizio, scrivere in nome, cognome e colore preferito dell'utente");

let nome;
let cognome;
let colore;

nome = prompt ('Inserisci il tuo nome: ');
document.getElementById('name').innerHTML = nome;

cognome = prompt ('Inserisci il tuo Cognome: ');
document.getElementById('surname').innerHTML = cognome;

colore = prompt ('Inserisci il tuo colore preferito: ');
document.getElementById('color').innerHTML = colore;

document.getElementById('result').innerHTML = nome+cognome+colore+"21";
