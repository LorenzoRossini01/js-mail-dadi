# Esercizio - JS Mail & Dadi

nome repo: js-mail-dadi <br>

## Mail

- Chiedi all'utente la sua email,
- controlla che sia nella lista di chi può accedere,
- stampa un messaggio appropriato sull'esito del controllo.

## Gioco dei dadi

- Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
- Stabilire il vincitore, in base a chi fa il punteggio più alto.

- Prima di partire a scrivere codice poniamoci qualche domanda:
  - Che ci sia un array da qualche parte?
  - Se dobbiamo confrontare qualcosa che "cosa" ci serve?

Consigli del giorno:

1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
2. javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
3. si ma noi cosa vogliamo fare?
4. torniamo a scrivere in italiano
5. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"

### Svolgimento Mail

1. creo un Array con all'interno varie mail
2. creo un input in cui all'interno l'utente inserirà la sua email
3. creo un bottone che invierà la mail per il controllo
4. confronto la mail dell'utente FINCHE' non sarà uguale a una contenuta nell'Array
   - SE la mail dell'utente è contenuta nell'Array
     - invio output all'utente indicando che il login ha avuto successo
   - ALTRIMENTI
     - invio output all'utente indicando che il login non ha avuto successo
