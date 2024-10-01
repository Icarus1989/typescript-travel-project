import { ICitta, IUtente } from "../interfaces/interfaces.js";

export type Disponibile = {
	status: "disponibile";
	utente: "none";
	citta: ICitta | "none";
};

export type InUso = {
	status: "inUso";
	utente: IUtente;
	citta: ICitta | "none";
};

export type NonDisponibile = {
	status: "nonDisponibile";
	utente: "none";
	causa?: "riparazione" | "controllo" | "altro";
	citta: ICitta | "none";
};

export type Fatturazione = {
	status: "attivo" | "nonAttivo";
	modalita: "Carta di Credito" | "ApplePay" | "Paypal" | "SatisPay";
	credito: number;
};
