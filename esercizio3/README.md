#  Meteo App

##  Descrizione

Questa applicazione mostra in tempo reale i dati meteo di una località utilizzando le coordinate geografiche. È progettata per offrire una panoramica rapida sul clima attuale.

##  Modalità d'uso

1. L’app utilizza **latitudine** e **longitudine** per recuperare i dati meteo tramite API.
2. Visualizza temperatura, umidità, vento, precipitazioni, nuvolosità e codice meteo.
3. (Opzionale) Può usare le API di geolocalizzazione per ottenere la posizione dell’utente.
4. (Avanzato) Mostra un’**icona meteo** in base al `weather_code`.

##  Tecnologie utilizzate

- HTML
- CSS
- JavaScript
- API: [Open-Meteo](https://open-meteo.com/en/docs)

##  Funzionalità principali

- Chiamata API con latitudine e longitudine
- Visualizzazione dati meteo in tempo reale
- Interfaccia chiara con layout responsive
- Supporto per icone meteo personalizzate
- (Facoltativo) Rilevamento automatico posizione utente

##  Documentazione tecnica

### URL base API

Funzioni principali
getMeteoData(latitude, longitude)
Recupera i dati meteo da Open-Meteo.

renderMeteo(data)
Mostra nel DOM le informazioni meteo formattate.

getIconFromWeatherCode(code)
Ritorna l’icona corrispondente in base al codice meteo.

(Opzionale) navigator.geolocation.getCurrentPosition(...)
Ottiene le coordinate della posizione attuale.
