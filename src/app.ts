import { Mezzo, Utente, Citta } from "./classes/classes.js";

// Mezzi

const bike001 = new Mezzo("bici", "001", {
	status: "disponibile",
	utente: "none",
	citta: "none"
});

const bike002 = new Mezzo("bici", "002", {
	status: "disponibile",
	utente: "none",
	citta: "none"
});

const scooter003 = new Mezzo("scooter", "003", {
	status: "disponibile",
	utente: "none",
	citta: "none"
});

const scooter004 = new Mezzo("scooter", "004", {
	status: "disponibile",
	utente: "none",
	citta: "none"
});

const monopattino005 = new Mezzo("monopattino", "005", {
	status: "disponibile",
	utente: "none",
	citta: "none"
});

const monopattino006 = new Mezzo("monopattino", "006", {
	status: "disponibile",
	utente: "none",
	citta: "none"
});

// Utenti

const johnAccount = new Utente("John", "Doe", "johndoe@abc.com", {
	status: "attivo",
	modalita: "ApplePay",
	credito: 1000
});

const janeAccount = new Utente("Jane", "Doe", "janemarydoe@abc.com", {
	status: "attivo",
	modalita: "Paypal",
	credito: 100
});

const jackAccount = new Utente("Jack", "Doe", "jackdoe@abc.com", {
	status: "nonAttivo",
	modalita: "SatisPay",
	credito: 0
});

// Città

const mooveAmsterdam = new Citta("Amsterdam", bike001, bike002);
const mooveMilan = new Citta("Milano", monopattino005);
const mooveMadrid = new Citta("Madrid");

mooveMadrid.aggiungiMezzo(scooter003);
mooveMadrid.aggiungiMezzo(scooter004);

console.log(
	`Amsterdam --> flotta di ${mooveAmsterdam.flotta.length} mezz${
		mooveAmsterdam.flotta.length === 1 ? "o" : "i"
	}`
);
console.log(
	`Milano --> flotta di ${mooveMilan.flotta.length} mezz${
		mooveMilan.flotta.length === 1 ? "o" : "i"
	}`
);
console.log(
	`Madrid --> flotta di ${mooveMadrid.flotta.length} mezz${
		mooveMadrid.flotta.length === 1 ? "o" : "i"
	}`
);

// prenotazione mezzo --->
johnAccount.prenotaMezzo(bike001);
// deposito mezzo --->
johnAccount.prenotaMezzo(bike001);

janeAccount.prenotaMezzo(scooter003);
// metodo di pagamento non idoneo --->
jackAccount.prenotaMezzo(scooter004);

janeAccount.prenotaMezzo(scooter003);

// monopattino aggiunto a Milano --->
mooveMilan.aggiungiMezzo(monopattino006);
// monopattino tolto da Milano e aggiunto ad Amsterdam --->
mooveAmsterdam.aggiungiMezzo(monopattino006);

// monopattino aggiunto ad Amsterdam --->
mooveAmsterdam.aggiungiMezzo(monopattino005);
// monopattino NON aggiunto nuovamente ad Amsterdam --->
mooveAmsterdam.aggiungiMezzo(monopattino005);

mooveMadrid.aggiungiMezzo(scooter003);

console.log(
	`Amsterdam --> flotta di ${mooveAmsterdam.flotta.length} mezz${
		mooveAmsterdam.flotta.length === 1 ? "o" : "i"
	}`
);
console.log(
	`Milano --> flotta di ${mooveMilan.flotta.length} mezz${
		mooveMilan.flotta.length === 1 ? "o" : "i"
	}`
);
console.log(
	`Madrid --> flotta di ${mooveMadrid.flotta.length} mezz${
		mooveMadrid.flotta.length === 1 ? "o" : "i"
	}`
);

// [x] File README.md

// [ ] Presentazione

// [ ] Controllo finale
