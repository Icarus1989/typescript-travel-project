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

<div id="begin"></div>

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
        <li><a href="#build-with">Built With</a></li>
        <li><a href="#install">Install</a></li>
        <li><a href="#codepen">Codepen</a></li>
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
    <li><a href="#resources">Resources</a></li>
    <li><a href="#demo">Demo</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contacts">Contacts</a></li>

  </ol>
</details>

<hr>
<hr>

## About the project

### Build with:

- _TypeScript_
- _JavaScript_

<hr>
<hr>

### Install

1. Clonare la repository:

```sh
git clone https://github.com/Icarus1989/typescript-travel-project
```

2. Directory del progetto:

```sh
cd typescript-travel-project
```

3. Installazione dependencies:

```sh
npm install
```

4. Compilare il codice:

```sh
npx tsc
```

5. Oppure installare Live Server in Visual Studio Code ed utilizzare la funzione watch:

```sh
tsc --watch
```

<br>

### Codepen

In alternativa si può utilizzare il progetto senza necessità di clonarlo tramite pen del sito codepen.io:

[TypeScript Start2Impact Project](https://codepen.io/Icarus1989/pen/rNXOBQE)

> [!IMPORTANT]
> Utilizzare TypeScript nelle impostazioni di codepen.io per compilare correttamente il progetto. Questo non sarà diviso in moduli per l'impossibilità di caricare asset con il piano gratuito di codepen.

<br>

### Description

#### Moove Project

Questo progetto é stato creato per consolidare le conoscenze acquisite durante il Corso **TypeScript** di Start2Impact, parte del mio percorso come Front-End Developer. Questo é molto meno articolato e sviluppato dei precedenti, ma dimostra comunque egregiamente l'utilità di TypeScript, rendendo necessaria la comprensione della tipizzazione delle entità presenti per poterlo realizzare.

<hr>
<hr>

## Usage

Di utilizzo molto basilare, basta creare delle istanze delle varie classi e utilizzarne i metodi per vedere i log nella console.

Si creino delle istanze per i mezzi (bici, scooter o monopattino), per le città e per gli utenti.

Per esempio:

```typescript
const bike001 = new Mezzo("bici", "001", {
	status: "disponibile",
	utente: "none",
	citta: "none"
});

const johnAccount = new Utente("John", "Doe", "johndoe@abc.com", {
	status: "attivo",
	modalita: "ApplePay",
	credito: 1000
});

const mooveAmsterdam = new Citta("Amsterdam", bike001, bike002);
```

<br>

Si potranno associare i mezzi alle città al momento della creazione dell'istanza della città oppure tramite il metodo aggiungiMezzo(mezzo) in seguito.
Si potranno prenotare dei mezzi tramite il metodo prenotaMezzo(mezzo) di qualsiasi istanza Utente. Se, una volta prenotato il mezzo, si richiamerà lo stesso metodo con lo stesso parametro, il mezzo verrà depositato e tornerà disponibile.

<hr>
<hr>

## Trace Summary

Questo progetto mira a sviluppare un sistema in TypeScript che modella la struttura organizzativa di Moove, un servizio innovativo di micromobilità condivisa, focalizzandosi sulle interazioni tra utenti, mezzi di trasporto e le città servite.

Attraverso la definizione di interfacce e classi che rappresentano i vari componenti del sistema (IMezzo, IUtente, ICitta), il progetto mostra come la tecnologia possa supportare l'efficienza operativa e l'espansione del servizio di micromobilità, offrendo una piattaforma scalabile per l'innovazione nel settore del trasporto urbano.

Il progetto richiede solo la scrittura del codice in TypeScript.

<hr>

L'azienda che vedi è ipotetica e per realizzare il progetto potrai immaginare di essere un membro del suo team.

**_Nome_**

Moove

**_Da dove nasce l'idea_**

La fondatrice nasce in una grande città dove per spostarsi senza macchina si alternano diversi mezzi differenti: tram, metro, bus. Ha sempre sognato di poter far materializzare la sua bici in giro per la città nei tratti a piedi o quando non voleva aspettare il tram. Con questa idea, ha creato Moove.

**_Vision_**

Integrare nella vita quotidiana una mobilità sostenibile, condivisa e alla portata di tutti.

**_Mission_**

Fornire soluzioni di micromobilità che siano flessibili, convenienti e rispettose dell'ambiente.

**_Chi siamo_**

Moove è un’azienda leader nella micro mobilità condivisa. I loro mezzi sono disponibili in 20 città europee. I mezzi messi a disposizione sono bici, scooter e monopattini, tutti elettrici.

**_Come funziona?_**

I mezzi sono liberamente parcheggiati in città e sono a disposizione di cittadini e turisti. Per utilizzare un mezzo è necessario scaricare l’app, attivare la geolocalizzazione e prenotare il mezzo desiderato più vicino. Si può scegliere tra tariffa oraria, giornaliera o abbonamento mensile.

<hr>

Definisci un'interfaccia IMezzo per rappresentare i mezzi di trasporto (bici, scooter, monopattini elettrici) messi a disposizione da Moove.

**_Segui queste indicazioni_**:

- **Proprietà**: tipo (bici, scooter, monopattino), ID univoco, stato (disponibile, in uso).
- **Metodo**: “assegnaUtente(utente: IUtente): void” per assegnare un mezzo a un utente specifico.

<hr>

Definisci un'interfaccia IUtente per rappresentare gli utenti del servizio.

**_Segui queste indicazioni_**:

- Proprietà: nome, cognome, email, e metodo di pagamento preferito.
- Metodo: “prenotaMezzo(mezzo: IMezzo): void” per prenotare un mezzo.

<hr>

Definisci un’interfaccia ICitta per rappresentare le città in cui Moove opera.

**_Segui queste indicazioni_**:

- Proprietà: nome della città, elenco dei mezzi disponibili (IMezzo[]).
- Metodo: “aggiungiMezzo(mezzo: IMezzo): void” per aggiungere un mezzo all'elenco dei mezzi disponibili nella città.

<hr>

Implementa le classi Mezzo, Utente e Citta, che rispettivamente implementano le interfacce IMezzo, IUtente, e ICitta.

**_Segui queste indicazioni_**:

Classe Mezzo: gestisce le informazioni di ciascun mezzo e l'assegnazione agli utenti.
Classe Utente: gestisce le informazioni degli utenti e la loro capacità di prenotare mezzi.
Classe Citta: rappresenta una città specifica in cui Moove opera, gestisce i mezzi disponibili e l'aggiunta di nuovi mezzi.
Logica di collegamento

Nella classe Mezzo, il metodo “assegnaUtente” assocerà il mezzo a un utente specifico, modificando lo stato del mezzo a "in uso".
Nella classe Utente, il metodo “prenotaMezzo” permetterà all'utente di prenotare un mezzo disponibile.
Nella classe Citta, il metodo “aggiungiMezzo” permetterà di aggiungere nuovi mezzi all'elenco dei mezzi disponibili nella città.

<hr>

**_Segui questi passaggi_**:

- Istanzia alcuni oggetti Mezzo per rappresentare bici, scooter e monopattini elettrici.
- Istanzia oggetti Utente per rappresentare gli utenti del servizio.
- Crea un'istanza della classe Citta per una o più città in cui Moove opera, aggiungendo i mezzi istanziati all'elenco dei mezzi disponibili.
- Testa la logica di prenotazione dei mezzi da parte degli utenti e l'aggiunta di nuovi mezzi alle città.

<hr>
<hr>

## Additional Features

Come in altri progetti di questo Master, ho voluto aggiungere qualche estensione alle funzionalità richieste per il progetto, comunque contestualizzate correttamente e limitate:

- **interface IMezzo**

La proprietà **stato** accetterà, invece che delle value string, dei types creati appositamente: **Disponibile** (pronto per l'uso), **InUso** (mezzo assegnato ad un Utente) e **NonDisponibile** (nel caso il mezzo sia in riparazione o altro).
Questi rappresenteranno gli stati nei quali potrà trovarsi un mezzo ed indicherà anche l'utente al quale il mezzo é stato assegnato come richiesto e in aggiunta la città dove il mezzo é disponibile. La proprietà aggiunta utente, in base al type utilizzato, potrà accetterà il type IUtente o "none", mentre la proprietà aggiunta **citta** accetterà un type ICitta o "none" al momento della creazione:

<br>

```typescript
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
```

<br>

Questa modifica é funzionale al fatto che quando si andrà ad aggiungere un mezzo ad una nuova città tramite il metodo **aggiungiMezzo()** della class Citta occorrerà toglierlo dalla precedente per non avere duplicati e problemi successivamente, per esempio rappresentando in React.js tali liste di mezzi e ottenendo un errore per i duplicati non filtrati.
Una reference alla città precedente rende possibile e rapido questo processo.

<hr>

- **_interface_ IUtente**

La property **metodoDiPagamento** accetterà value di type **Fatturazione**. Questo type indicherà se l'account é attivo o non attivo, quale metodo di pagamento sia stato selezionato al momento della crezione dell'istanza ed una semplificazione per il credito disponibile.

<br>

```typescript
type Fatturazione = {
	status: "attivo" | "nonAttivo";
	modalita: "Carta di Credito" | "ApplePay" | "Paypal" | "SatisPay";
	credito: number;
};
```

<br>

Questo chiaramente condizionerà la capacità o meno di prenotare un mezzo da parte dell'utente.

<hr>

- **_class_ Utente**

Il metodo **prenotaMezzo(mezzo: IMezzo)** gestisce vari scenari possibili.
I primi due rappresentano la continuità: un utente può prenotare un mezzo e richiamando lo stesso metodo con lo stesso mezzo indicato, questo verrà depositato e ritornerà disponibile. Se l'utente non ha ancora assegnato alcun mezzo verrà controllato lo status del mezzo, se é disponibile o meno, e lo status del metodo di pagamento, se é attivo o meno, fornendo alternative come indicazioni testuali nei log nelle eventualità di mezzo non disponibile, prenotazione non disponibile a causa del metodo di pagamento non attivo o un errore in caso di input in entrata non corretto:

<br>

```typescript
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
```

<br>

<hr>

- **_class_ Città**

Nella class Citta vi sarà una modifica fin dal constructor:

```typescript
  constructor(nome: string, ...flotta: IMezzo[]) {
		this.nome = nome;
		this.flotta = flotta.map((mezzo) => {
			mezzo.stato.citta = this;
			return mezzo;
		});
	}
```

<br>

I mezzi della flotta di una determinata città potranno essere aggiunti al momento della creazione dell'istanza. Il parametro flotta è un rest parameter perciò un qualsiasi numero di mezzi verrà gestito. Questi verranno modificati singolarmente per avere un'indicazione della flotta di appartenza.

Il metodo aggiungiMezzo(mezzo: IMezzo) é stato leggermente ampliato rispetto alla richiesta per evitare duplicati dei mezzi nella stessa flotta o in più flotte delle città.
Questo controllerà prima se il mezzo é già presente nella flotta, poi, nel caso il mezzo provenga da un'altra città, toglierà dalla lista di tale città il mezzo e solo in seguito lo aggiungerà alla flotta della nuova.

<br>

```typescript
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
```

<br>

<hr>

- **_modules_**

Per capire le differenze negli import e negli export dei moduli in TypeScript, ho optato per dividere in moduli il progetto, tra types, interfaces, classes e principale app, anche se non effettivamente indispensabile in un progetto di queste dimensioni.

<br>

<hr>
<hr>

## Resources

- [Documentazione](https://www.typescriptlang.org/)
- [typescripttutorial.net](https://www.typescripttutorial.net/typescript-tutorial/typescript-type-guards/#)

<hr>
<hr>

## Demo

Il progetto può essere provato senza alcuna installazione al link:

[TypeScript Start2Impact Project](https://codepen.io/Icarus1989/pen/rNXOBQE)

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
