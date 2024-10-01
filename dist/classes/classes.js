export class Mezzo {
    constructor(tipoMezzo, mooveId, stato) {
        this.tipoMezzo = tipoMezzo;
        this.mooveId = `moove${tipoMezzo.slice(0, 1).toUpperCase()}${mooveId}`;
        this.stato = stato;
    }
    // ---
    assegnaUtente(utente) {
        this.stato = {
            ...this.stato,
            status: "inUso",
            utente: utente
        };
        console.log(`${this.tipoMezzo.slice(0, 1).toUpperCase()}${this.tipoMezzo.slice(1)} assegnat${this.tipoMezzo === "bici" ? "a" : "o"} all'utente: ${utente.nome} ${utente.cognome}${this.stato.citta instanceof Citta
            ? ` nella città di ${this.stato.citta.nome}`
            : ""}`);
    }
}
export class Utente {
    constructor(nome, cognome, email, metodoDiPagamento) {
        this.nome = nome;
        this.cognome = cognome;
        this.email = email;
        this.metodoDiPagamento = metodoDiPagamento;
    }
    prenotaMezzo(mezzo) {
        if (mezzo !== undefined && mezzo.stato.utente !== this) {
            if (mezzo.stato.status === "disponibile" &&
                this.metodoDiPagamento.status === "attivo") {
                mezzo.assegnaUtente(this);
            }
            else if (mezzo.stato.status !== "disponibile" &&
                this.metodoDiPagamento.status === "attivo") {
                console.log(`${mezzo.tipoMezzo} non disponibile. Vuoi essere contattato all'indirizzo ${this.email} quando sarà prenotabile?`);
            }
            else if (this.metodoDiPagamento.status === "nonAttivo") {
                console.log("Prenotazione non disponibile, inserire metodo di pagamento idoneo.");
            }
        }
        else if (mezzo !== undefined && mezzo.stato.utente === this) {
            mezzo.stato = {
                ...mezzo.stato,
                status: "disponibile",
                utente: "none"
            };
            console.log(`${mezzo.tipoMezzo.slice(0, 1).toUpperCase()}${mezzo.tipoMezzo.slice(1)} depositat${mezzo.tipoMezzo === "bici" ? "a" : "o"}.`);
        }
        else {
            throw new Error("Input del mezzo non presente o non corretto");
        }
    }
}
export class Citta {
    constructor(nome, ...flotta) {
        this.nome = nome;
        this.flotta = flotta.map((mezzo) => {
            mezzo.stato.citta = this;
            return mezzo;
        });
    }
    aggiungiMezzo(mezzo) {
        if (this.flotta.filter((elem) => elem.mooveId === mezzo.mooveId).length > 0) {
            return;
        }
        const vecchiaCitta = mezzo.stato.citta;
        if (vecchiaCitta instanceof Citta) {
            const nuovaFlotta = vecchiaCitta.flotta.filter((elem) => {
                return elem.mooveId !== mezzo.mooveId;
            });
            vecchiaCitta.flotta = [...nuovaFlotta];
        }
        mezzo.stato.citta = this;
        this.flotta.push(mezzo);
    }
}
