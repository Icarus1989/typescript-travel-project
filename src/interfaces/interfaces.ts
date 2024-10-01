import {
	Disponibile,
	InUso,
	NonDisponibile,
	Fatturazione
} from "../types/types.js";

export interface IMezzo {
	tipoMezzo: "bici" | "scooter" | "monopattino";
	mooveId: string;
	stato: Disponibile | InUso | NonDisponibile;
	assegnaUtente(utente: IUtente): void;
}

export interface IUtente {
	nome: string;
	cognome: string;
	email: string;
	metodoDiPagamento: Fatturazione;
	prenotaMezzo(mezzo: IMezzo): void;
}

export interface ICitta {
	nome: string;
	flotta: IMezzo[];
	aggiungiMezzo(mezzo: IMezzo): void;
}
