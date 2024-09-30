<hr>
<hr>

<div align="center">
<h1><i>TypeScript Moove Project</i></h1>
</div>

**Questa é un progetto creato per il completamento del Corso _TypeScript_ di _Start2Impact_**.

## Progetto:

<div align="center">
  <h2>TypeScript / Travel</h2>
	<br>
	<a title="™/®Microsoft, Public domain, via Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File:Typescript_logo_2020.svg"><img width="128" alt="Typescript logo 2020" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/256px-Typescript_logo_2020.svg.png?20221110153201"></a>
</div>

<hr>
<hr>

<p align="center">
<img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/Icarus1989/typescript-travel-project?style=flat-square">
<img alt="GitHub commit activity" src="https://img.shields.io/github/commit-activity/m/Icarus1989/typescript-travel-project"> 
<img alt="GitHub code size in bytes" src="https://img.shields.io/github/languages/code-size/Icarus1989/typescript-travel-project">
<img alt="GitHub language count" src="https://img.shields.io/github/languages/count/Icarus1989/typescript-travel-project">
<img alt="GitHub top language" src="https://img.shields.io/github/languages/top/Icarus1989/typescript-travel-project">
</p>

<hr>
<hr>

<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
        <li><a href="#description">Description</a>
          <ul>
          <li><a href="#moove-project">Moove Project</a></li>
          </ul>
        </li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#trace-summary">Trace Summary</a>
    <li><a href="#additional-features">Additional Features</a></li>
    <li><a href="#resources">Demo</a></li>
    <li><a href="#demo">Demo</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contacts">Contacts</a></li>

  </ol>
</details>

## About the project

### Build with:

Progetto sviluppato utilizzando le conoscenze in questi linguaggi:

- [TypeScript]()
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript?retiredLocale=it)

<hr>
<hr>

### Description

#### Moove Project

Questo progetto é stato creato per consolidare le conoscenze acquisite durante il Corso **TypeScript** di Start2Impact, parte finale del mio percorso come Front-End Developer. Questo é molto meno articolato e sviluppato dei precedenti, ma dimostra comunque egregiamente l'utilità di TypeScript, rendendo necessaria la comprensione della tipizzazione delle entità presenti per poterlo realizzare.

## Usage

Di utilizzo molto basilare, basta creare delle istanze delle varie classi e utilizzarne i metodi per vedere i log nella console.

## Trace Summary

Questo progetto mira a sviluppare un sistema in TypeScript che modella la struttura organizzativa di Moove, un servizio innovativo di micromobilità condivisa, focalizzandosi sulle interazioni tra utenti, mezzi di trasporto e le città servite.

Attraverso la definizione di interfacce e classi che rappresentano i vari componenti del sistema (IMezzo, IUtente, ICitta), il progetto mostra come la tecnologia possa supportare l'efficienza operativa e l'espansione del servizio di micromobilità, offrendo una piattaforma scalabile per l'innovazione nel settore del trasporto urbano.

Il progetto richiede solo la scrittura del codice in TypeScript.

<hr>

L'azienda che vedi è ipotetica e per realizzare il progetto potrai immaginare di essere un membro del suo team.

**Nome**

Moove

**Da dove nasce l'idea**

La fondatrice nasce in una grande città dove per spostarsi senza macchina si alternano diversi mezzi differenti: tram, metro, bus. Ha sempre sognato di poter far materializzare la sua bici in giro per la città nei tratti a piedi o quando non voleva aspettare il tram. Con questa idea, ha creato Moove.

**Vision**

Integrare nella vita quotidiana una mobilità sostenibile, condivisa e alla portata di tutti.

**Mission**

Fornire soluzioni di micromobilità che siano flessibili, convenienti e rispettose dell'ambiente.

**Chi siamo**

Moove è un’azienda leader nella micro mobilità condivisa. I loro mezzi sono disponibili in 20 città europee. I mezzi messi a disposizione sono bici, scooter e monopattini, tutti elettrici.

**Come funziona?**

I mezzi sono liberamente parcheggiati in città e sono a disposizione di cittadini e turisti. Per utilizzare un mezzo è necessario scaricare l’app, attivare la geolocalizzazione e prenotare il mezzo desiderato più vicino. Si può scegliere tra tariffa oraria, giornaliera o abbonamento mensile.

<hr>

Definisci un'interfaccia IMezzo per rappresentare i mezzi di trasporto (bici, scooter, monopattini elettrici) messi a disposizione da Moove.

Segui queste indicazioni:

- Proprietà: tipo (bici, scooter, monopattino), ID univoco, stato (disponibile, in uso).
- Metodo: “assegnaUtente(utente: IUtente): void” per assegnare un mezzo a un utente specifico.

<hr>

Definisci un'interfaccia IUtente per rappresentare gli utenti del servizio.

Segui queste indicazioni:

- Proprietà: nome, cognome, email, e metodo di pagamento preferito.
- Metodo: “prenotaMezzo(mezzo: IMezzo): void” per prenotare un mezzo.

<hr>

Definisci un’interfaccia ICitta per rappresentare le città in cui Moove opera.

Segui queste indicazioni:

- Proprietà: nome della città, elenco dei mezzi disponibili (IMezzo[]).
- Metodo: “aggiungiMezzo(mezzo: IMezzo): void” per aggiungere un mezzo all'elenco dei mezzi disponibili nella città.

<hr>

Implementa le classi Mezzo, Utente e Citta, che rispettivamente implementano le interfacce IMezzo, IUtente, e ICitta.

Segui queste indicazioni:

Classe Mezzo: gestisce le informazioni di ciascun mezzo e l'assegnazione agli utenti.
Classe Utente: gestisce le informazioni degli utenti e la loro capacità di prenotare mezzi.
Classe Citta: rappresenta una città specifica in cui Moove opera, gestisce i mezzi disponibili e l'aggiunta di nuovi mezzi.
Logica di collegamento

Nella classe Mezzo, il metodo “assegnaUtente” assocerà il mezzo a un utente specifico, modificando lo stato del mezzo a "in uso".
Nella classe Utente, il metodo “prenotaMezzo” permetterà all'utente di prenotare un mezzo disponibile.
Nella classe Citta, il metodo “aggiungiMezzo” permetterà di aggiungere nuovi mezzi all'elenco dei mezzi disponibili nella città.

<hr>

Segui questi passaggi:

- Istanzia alcuni oggetti Mezzo per rappresentare bici, scooter e monopattini elettrici.
- Istanzia oggetti Utente per rappresentare gli utenti del servizio.
- Crea un'istanza della classe Citta per una o più città in cui Moove opera, aggiungendo i mezzi istanziati all'elenco dei mezzi disponibili.
- Testa la logica di prenotazione dei mezzi da parte degli utenti e l'aggiunta di nuovi mezzi alle città.

<hr>
<hr>

## Additional Features

Con l'obiettivo di mettere in pratica qualcosa in più di quanto appreso nella teoria e ripassare quanto imparato negli altri corsi, ho voluto aggiungere qualche estensione alle funzionalità necessarie per il progetto, comunque contestualizzate correttamente e limitate:

- **interface IMezzo**

La property stato accetterà, invece che delle value string, dei types creati appositamente: Disponibile (pronto per l'uso), InUso (mezzo assegnato ad un Utente) e NonDisponibile (nel caso il mezzo sia in riparazione o altro).
Questi rappresenteranno gli stati nei quali potrà trovarsi un mezzo ed indicherà anche l'utente al quale il mezzo é stato assegnato come richiesto e in aggiunta la città dove il mezzo é disponibile. La property accetterà un type ICitta o "none" al momento della creazione:

<code>
  type Disponibile = {
    status: "disponibile";
    utente: "none";
    citta: ICitta | "none";
  };
</code>
<br>

Questa modifica é funzionale al fatto che quando si andrà ad aggiungere un mezzo ad una nuova città tramite il metodo **aggiungiMezzo()** della class Citta occorrerà toglierlo dalla precedente per non avere duplicati e problemi successivamente, per esempio rappresentando in React.js tali liste di mezzi e ottenendo un errore per i duplicati non filtrati.
Una reference alla città precedente rende possibile e rapido questo processo.

<hr>

- **interface IUtente**

La property **metodoDiPagamento** accetterà value di type **Fatturazione**. Questo type indicherà se l'account é attivo o non attivo, quale metodo di pagamento sia stato selezionato al momento della crezione dell'istanza ed il credito disponibile.

<code>
  type Fatturazione = {
    status: "attivo" | "nonAttivo";
    modalita: "Carta di Credito" | "ApplePay" | "Paypal" | "SatisPay";
    credito: number;
  };
</code>
<br>

Questo chiaramente condizionerà la capacità o meno di prenotazione di un mezzo da parte dell'utente.

<hr>

- **class Utente**

Il metodo **prenotaMezzo(mezzo: IMezzo)** gestisce vari scenari possibili.
I primi due rappresentano la continuità: un utente può prenotare un mezzo e richiamando lo stesso metodo con lo stesso mezzo questo verrà depositato e ritornerà disponibile. Se l'utente non ha ancora assegnato alcun mezzo verrà controllato lo status del mezzo, se é disponibile o meno, e lo status del metodo di pagamento, se é attivo o meno, fornendo alternative come indicazioni testuali nei log nelle eventualità di mezzo non disponibile, prenotazione non disponibile a causa del metodo di pagamento non attivo o un errore in caso di input in entrata non corretto:

<code>
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
			throw new Error("Input del mezzo non corretto");
		}
	}
</code>
<br>

<hr>

- **class Città**

Nella class Citta vi sarà una modifica fin dal constructor:

<code>
  constructor(nome: string, ...flotta: IMezzo[]) {
		this.nome = nome;
		this.flotta = flotta.map((mezzo) => {
			mezzo.stato.citta = this;
			return mezzo;
		});
	}
</code>
<br>

I mezzi della flotta di una determinata città potranno essere aggiunti al momento dell'instanziazione della class. Il parametro flotta è un rest parameter perciò un qualsisi numero di mezzi verrà gestito. Questi verranno modificati singolarmente per avere un'indicazione della flotta di appartenza.

Il metodo aggiungiMezzo(mezzo: IMezzo) é creato per evitare duplicati dei mezzi nella stessa flotta o in più flotte delle città.
Questo controllerà prima se il mezzo é già presente nella flotta, in modo da evitare duplicati nella stessa lista. Poi, nel caso il mezzo provenga da un'altra città, leverà dalla lista di tale città il mezzo e solo in seguito lo aggiungerà alla flotta della nuova.

<code>
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
</code>
<br>

<hr>
<hr>

## Resources

- [Documentazione](https://www.typescriptlang.org/)
- [typescripttutorial.net](https://www.typescripttutorial.net/typescript-tutorial/typescript-type-guards/#)

<hr>
<hr>

## Demo

Il progetto può essere provato senza alcuna installazione al link codepen:

[TypeScript Start2Impact Project](https://codepen.io/Icarus1989/pen/rNXOBQE?editors=1111)

<br>
<p><a href="#begin">&#9650; Back to summary</a></p>

<hr>
<hr>

## License

Distributed under MIT License.

<br>
<p><a href="#begin">&#9650; Back to summary</a></p>

<hr>
<hr>

## Contacts

Alex<br>
[GitHub](http://https://github.com/Icarus1989)<br>
[Linkedin](https://www.linkedin.com/in/alex-valente-018586156/)<br>
[Instagram](http://https://www.instagram.com/alex._.1989/)<br>

<br>
<p><a href="#begin">&#9650; Back to summary</a></p>

<hr>
<hr>
