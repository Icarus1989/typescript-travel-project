type Disponibile = {
	status: "disponibile";
	utente: "none";
	citta: ICitta | "none";
};

type InUso = {
	status: "inUso";
	utente: Utente;
	citta: ICitta | "none";
};

type NonDisponibile = {
	status: "nonDisponibile";
	utente: "none";
	causa?: "riparazione" | "controllo" | "altro";
	citta: ICitta | "none";
};

type Fatturazione = {
	status: "attivo" | "nonAttivo";
	modalita: "Carta di Credito" | "ApplePay" | "Paypal" | "SatisPay";
	credito: number;
};

interface IMezzo {
	tipoMezzo: "bici" | "scooter" | "monopattino";
	mooveId: string;
	stato: Disponibile | InUso | NonDisponibile;
	alimentazione: string; // o parametro di default
	assegnaUtente(utente: IUtente): void;
}

interface IUtente {
	nome: string;
	cognome: string;
	email: string;
	metodoDiPagamento: Fatturazione;
	prenotaMezzo(mezzo: IMezzo): void;
}

interface ICitta {
	nome: string;
	flotta: IMezzo[];
	aggiungiMezzo(mezzo: IMezzo): void;
}

class Mezzo implements IMezzo {
	tipoMezzo: "bici" | "scooter" | "monopattino";
	mooveId: string;
	stato: Disponibile | InUso | NonDisponibile;
	alimentazione: string;
	constructor(
		tipoMezzo: "bici" | "scooter" | "monopattino",
		mooveId: string,
		stato: Disponibile | InUso | NonDisponibile
	) {
		this.tipoMezzo = tipoMezzo;
		this.mooveId = `moove${tipoMezzo.slice(0, 1).toUpperCase()}${mooveId}`;
		this.stato = stato;
	}
	// ---

	assegnaUtente(utente: IUtente): void {
		this.stato = {
			...this.stato,
			status: "inUso",
			utente: utente
		};
		console.log(
			`${this.tipoMezzo.slice(0, 1).toUpperCase()}${this.tipoMezzo.slice(
				1
			)} assegnat${this.tipoMezzo === "bici" ? "a" : "o"} all'utente: ${
				utente.nome
			} ${utente.cognome}${
				this.stato.citta instanceof Citta
					? ` nella città di ${this.stato.citta.nome}`
					: ""
			}`
		);
	}
}

class Utente implements IUtente {
	nome: string;
	cognome: string;
	email: string;
	metodoDiPagamento: Fatturazione;
	constructor(
		nome: string,
		cognome: string,
		email: string,
		metodoDiPagamento: Fatturazione
	) {
		this.nome = nome;
		this.cognome = cognome;
		this.email = email;
		this.metodoDiPagamento = metodoDiPagamento;
	}

	prenotaMezzo(mezzo: IMezzo): void {
		if (mezzo !== undefined && mezzo.stato.utente !== this) {
			if (
				mezzo.stato.status === "disponibile" &&
				this.metodoDiPagamento.status === "attivo"
			) {
				mezzo.assegnaUtente(this);
			} else if (
				mezzo.stato.status !== "disponibile" &&
				this.metodoDiPagamento.status === "attivo"
			) {
				console.log(
					`${mezzo.tipoMezzo} non disponibile. Vuoi essere contattato all'indirizzo ${this.email} quando sarà prenotabile?`
				);
			} else if (this.metodoDiPagamento.status === "nonAttivo") {
				console.log(
					"Prenotazione non disponibile, inserire metodo di pagamento idoneo."
				);
			}
		} else if (mezzo !== undefined && mezzo.stato.utente === this) {
			mezzo.stato = {
				...mezzo.stato,
				status: "disponibile",
				utente: "none"
			};
			console.log(
				`${mezzo.tipoMezzo.slice(0, 1).toUpperCase()}${mezzo.tipoMezzo.slice(
					1
				)} depositat${mezzo.tipoMezzo === "bici" ? "a" : "o"}.`
			);
		} else {
			throw new Error("Input del mezzo non presente o non corretto");
		}
	}
}

class Citta implements ICitta {
	nome: string;
	flotta: IMezzo[];

	constructor(nome: string, ...flotta: IMezzo[]) {
		this.nome = nome;
		this.flotta = flotta.map((mezzo) => {
			mezzo.stato.citta = this;
			return mezzo;
		});
	}

	aggiungiMezzo(mezzo: IMezzo): void {
		if (
			this.flotta.filter((elem) => elem.mooveId === mezzo.mooveId).length > 0
		) {
			return;
		}
		const vecchiaCitta = mezzo.stato.citta;

		if (vecchiaCitta instanceof Citta) {
			const nuovaFlotta: IMezzo[] = vecchiaCitta.flotta.filter((elem) => {
				return elem.mooveId !== mezzo.mooveId;
			});
			vecchiaCitta.flotta = [...nuovaFlotta];
		}

		mezzo.stato.citta = this;
		this.flotta.push(mezzo);
	}
}

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

const jamieAccount = new Utente("Jamie", "Doe", "jamiedoe@abc.com", {
	status: "attivo",
	modalita: "ApplePay",
	credito: 1000
});

const mooveAmsterdam = new Citta("Amsterdam", bike001, bike002);
const mooveMilan = new Citta("Milano", monopattino005);
const mooveMadrid = new Citta("Madrid");

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

mooveMadrid.aggiungiMezzo(scooter003);
mooveMadrid.aggiungiMezzo(scooter004);

johnAccount.prenotaMezzo(bike001);
johnAccount.prenotaMezzo(bike001);

janeAccount.prenotaMezzo(scooter003);
jackAccount.prenotaMezzo(scooter004);

jamieAccount.prenotaMezzo(monopattino005);

janeAccount.prenotaMezzo(scooter003);

mooveMilan.aggiungiMezzo(monopattino006);

jamieAccount.prenotaMezzo(monopattino005);

mooveAmsterdam.aggiungiMezzo(monopattino005);
mooveAmsterdam.aggiungiMezzo(monopattino005);

mooveMadrid.aggiungiMezzo(scooter003);
mooveMadrid.aggiungiMezzo(scooter004);

mooveAmsterdam.aggiungiMezzo(monopattino006);

mooveMilan.aggiungiMezzo(scooter004);

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

// NOTA: capire se i vari type dei parametri vanno come ICity o City
// dividere in moduli?
// Controllo finale
// File README.md
// Presentazione

// jamieAccount.prenotaMezzo();
