var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var Mezzo = /** @class */ (function () {
    function Mezzo(tipoMezzo, mooveId, stato) {
        this.tipoMezzo = tipoMezzo;
        this.mooveId = "moove".concat(tipoMezzo.slice(0, 1).toUpperCase()).concat(mooveId);
        this.stato = stato;
    }
    // ---
    Mezzo.prototype.assegnaUtente = function (utente) {
        this.stato = __assign(__assign({}, this.stato), { status: "inUso", utente: utente });
        console.log("".concat(this.tipoMezzo.slice(0, 1).toUpperCase()).concat(this.tipoMezzo.slice(1), " assegnat").concat(this.tipoMezzo === "bici" ? "a" : "o", " all'utente: ").concat(utente.nome, " ").concat(utente.cognome).concat(this.stato.citta instanceof Citta
            ? " nella citt\u00E0 di ".concat(this.stato.citta.nome)
            : ""));
    };
    return Mezzo;
}());
var Utente = /** @class */ (function () {
    function Utente(nome, cognome, email, metodoDiPagamento) {
        this.nome = nome;
        this.cognome = cognome;
        this.email = email;
        this.metodoDiPagamento = metodoDiPagamento;
    }
    Utente.prototype.prenotaMezzo = function (mezzo) {
        if (mezzo !== undefined && mezzo.stato.utente !== this) {
            if (mezzo.stato.status === "disponibile" &&
                this.metodoDiPagamento.status === "attivo") {
                mezzo.assegnaUtente(this);
            }
            else if (mezzo.stato.status !== "disponibile" &&
                this.metodoDiPagamento.status === "attivo") {
                console.log("".concat(mezzo.tipoMezzo, " non disponibile. Vuoi essere contattato all'indirizzo ").concat(this.email, " quando sar\u00E0 prenotabile?"));
            }
            else if (this.metodoDiPagamento.status === "nonAttivo") {
                console.log("Prenotazione non disponibile, inserire metodo di pagamento idoneo.");
            }
        }
        else if (mezzo !== undefined && mezzo.stato.utente === this) {
            mezzo.stato = __assign(__assign({}, mezzo.stato), { status: "disponibile", utente: "none" });
            console.log("".concat(mezzo.tipoMezzo.slice(0, 1).toUpperCase()).concat(mezzo.tipoMezzo.slice(1), " depositat").concat(mezzo.tipoMezzo === "bici" ? "a" : "o", "."));
        }
        else {
            throw new Error("Input del mezzo non presente o non corretto");
        }
    };
    return Utente;
}());
var Citta = /** @class */ (function () {
    function Citta(nome) {
        var flotta = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            flotta[_i - 1] = arguments[_i];
        }
        var _this = this;
        this.nome = nome;
        this.flotta = flotta.map(function (mezzo) {
            mezzo.stato.citta = _this;
            return mezzo;
        });
    }
    Citta.prototype.aggiungiMezzo = function (mezzo) {
        if (this.flotta.filter(function (elem) { return elem.mooveId === mezzo.mooveId; }).length > 0) {
            return;
        }
        var vecchiaCitta = mezzo.stato.citta;
        if (vecchiaCitta instanceof Citta) {
            var nuovaFlotta = vecchiaCitta.flotta.filter(function (elem) {
                return elem.mooveId !== mezzo.mooveId;
            });
            vecchiaCitta.flotta = __spreadArray([], nuovaFlotta, true);
        }
        mezzo.stato.citta = this;
        this.flotta.push(mezzo);
    };
    return Citta;
}());
var bike001 = new Mezzo("bici", "001", {
    status: "disponibile",
    utente: "none",
    citta: "none"
});
var bike002 = new Mezzo("bici", "002", {
    status: "disponibile",
    utente: "none",
    citta: "none"
});
var scooter003 = new Mezzo("scooter", "003", {
    status: "disponibile",
    utente: "none",
    citta: "none"
});
var scooter004 = new Mezzo("scooter", "004", {
    status: "disponibile",
    utente: "none",
    citta: "none"
});
var monopattino005 = new Mezzo("monopattino", "005", {
    status: "disponibile",
    utente: "none",
    citta: "none"
});
var monopattino006 = new Mezzo("monopattino", "006", {
    status: "disponibile",
    utente: "none",
    citta: "none"
});
var johnAccount = new Utente("John", "Doe", "johndoe@abc.com", {
    status: "attivo",
    modalita: "ApplePay",
    credito: 1000
});
var janeAccount = new Utente("Jane", "Doe", "janemarydoe@abc.com", {
    status: "attivo",
    modalita: "Paypal",
    credito: 100
});
var jackAccount = new Utente("Jack", "Doe", "jackdoe@abc.com", {
    status: "nonAttivo",
    modalita: "SatisPay",
    credito: 0
});
var jamieAccount = new Utente("Jamie", "Doe", "jamiedoe@abc.com", {
    status: "attivo",
    modalita: "ApplePay",
    credito: 1000
});
var mooveAmsterdam = new Citta("Amsterdam", bike001, bike002);
var mooveMilan = new Citta("Milano", monopattino005);
var mooveMadrid = new Citta("Madrid");
console.log("Amsterdam --> flotta di ".concat(mooveAmsterdam.flotta.length, " mezz").concat(mooveAmsterdam.flotta.length === 1 ? "o" : "i"));
console.log("Milano --> flotta di ".concat(mooveMilan.flotta.length, " mezz").concat(mooveMilan.flotta.length === 1 ? "o" : "i"));
console.log("Madrid --> flotta di ".concat(mooveMadrid.flotta.length, " mezz").concat(mooveMadrid.flotta.length === 1 ? "o" : "i"));
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
console.log("Amsterdam --> flotta di ".concat(mooveAmsterdam.flotta.length, " mezz").concat(mooveAmsterdam.flotta.length === 1 ? "o" : "i"));
console.log("Milano --> flotta di ".concat(mooveMilan.flotta.length, " mezz").concat(mooveMilan.flotta.length === 1 ? "o" : "i"));
console.log("Madrid --> flotta di ".concat(mooveMadrid.flotta.length, " mezz").concat(mooveMadrid.flotta.length === 1 ? "o" : "i"));
// NOTA: capire se i vari type dei parametri vanno come ICity o City
// dividere in moduli?
// Controllo finale
// File README.md
// Presentazione
// jamieAccount.prenotaMezzo();
