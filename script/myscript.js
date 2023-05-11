console.log("Benvenuto");
console.log("Esercizio, scrivere in nome, cognome e colore preferito dell'utente");

let nome;
let cognome;
let colore;

nome = prompt ('Inserisci il tuo nome: ');
document.getElementById('my_name').innerHTML = "Il tuo nome è: " + nome;

cognome = prompt ('Inserisci il tuo Cognome: ');
document.getElementById('my_surname').innerHTML = "Il tuo cognome è: " + cognome;

colore = prompt ('Inserisci il tuo colore preferito: ');
document.getElementById('my_color').innerHTML = "Il tuo colore preferito è: " + colore;

document.getElementById('my_result').innerHTML = nome+cognome+colore+"21";

document.getElementById('my_Result').innerHTML = "nomecognomecolorepreferito21";