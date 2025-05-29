#  Task Manager

##  Descrizione

Questa applicazione consente di creare, modificare, eliminare e filtrare attività da svolgere. È progettata per aiutare l’utente a organizzare il proprio lavoro quotidiano tramite una semplice interfaccia web.

##  Modalità d'uso

1. Digita il nome di un’attività nella barra di input.
2. Clicca su **Aggiungi** per inserirla nella lista.
3. Usa i pulsanti accanto a ciascuna attività per:
   - Modificare il nome
   - Cambiare lo stato: `Da fare` → `In corso` → `Completato`
   - Eliminare l’attività
4. Filtra le attività per stato o cerca per nome.

##  Tecnologie utilizzate

- HTML
- CSS
- JavaScript

##  Funzionalità principali

- Aggiunta, modifica e rimozione attività
- Cambio stato con indicazione colorata
- Ricerca testuale
- Filtro per stato (Tutti, Da fare, In corso, Completato)
- Interfaccia responsiva e moderna

##  Documentazione tecnica

### Struttura `tasks`

Ogni attività è un oggetto con struttura:

```js
{
  name: "Nome attività",
  status: "Da fare" | "In corso" | "Completato"
}
Funzioni principali
addTask()
Aggiunge una nuova attività alla lista se il campo non è vuoto.

renderTasks()
Aggiorna dinamicamente il DOM in base a filtro e ricerca. Imposta colori per stato.

editTask(index)
Apre un prompt per modificare il nome dell’attività.

changeStatus(index)
Cicla tra gli stati: Da fare → In corso → Completato.

deleteTask(index)
Rimuove un’attività.

filterTasks() / searchTasks()
Filtra/rende in tempo reale le attività in base a stato o testo digitato.
