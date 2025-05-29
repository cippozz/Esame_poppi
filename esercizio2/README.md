#  Cronometro

##  Descrizione

Questa applicazione web consente di avviare, mettere in pausa, azzerare e monitorare il tempo tramite un cronometro digitale. È utile per misurare intervalli di tempo durante attività sportive, studio o altro.

##  Modalità d'uso

1. Clicca su **Avvia** per far partire il cronometro.
2. Clicca su **Pausa** per fermarlo temporaneamente.
3. Clicca su **Reset** per azzerare il tempo.
4. (Facoltativo) Registra e visualizza intervalli/tempi parziali.

##  Tecnologie utilizzate

- HTML
- CSS
- JavaScript

##  Funzionalità principali

- Avvio e pausa cronometro
- Reset del timer
- Display digitale in formato `hh:mm:ss`
- Interfaccia semplice, chiara e responsiva
- (Facoltativo) Salvataggio dei tempi parziali

##  Documentazione tecnica

### Stato del cronometro

Variabili principali:

let startTime = 0;
let elapsedTime = 0;
let timerInterval;
let isRunning = false;
Funzioni principali
startTimer()
Avvia il cronometro se non già in esecuzione.

pauseTimer()
Interrompe temporaneamente il conteggio.

resetTimer()
Azzera tempo e stato.

updateDisplay()
Converte millisecondi in hh:mm:ss e aggiorna il DOM.

Calcolo tempo

Copia codice
const now = Date.now();
elapsedTime = now - startTime;
