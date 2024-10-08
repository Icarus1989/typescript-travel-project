import { ICitta, IUtente } from "../interfaces/interfaces.js";

type Disponibile = {
	status: "disponibile";
	utente: "none";
	citta: ICitta | "none";
};

type InUso = {
	status: "inUso";
	utente: IUtente;
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

export type { Disponibile, InUso, NonDisponibile, Fatturazione };
