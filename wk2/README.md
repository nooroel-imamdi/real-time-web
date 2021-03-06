# (Unique) Real Time App - Minor Webdevelopment
Nooroel Imamdi - 500706701 - Hogeschool van Amsterdam

## Stand van zaken na week 2
In week 2 ben ik vooral bezig geweest met een zoektocht naar informatie over de werking van Real-time app die gebruik maakt van een API met socket connection. Veel tijd is opgegaan aan het lezen van artikelen en het bekijken van tutorials. Om de opbouw zelf te ervaren ben ik aan de slag gegaan met een tutorial van de Twitter API (zie *referenties* voor URL). Daar heb ik ook een begin aan gemaakt, zoals te zien is in mijn repo. Het hele zoektocht-traject heeft echter veel tijd in beslag genomen, waardoor de deadline niet haalbaar bleek te zijn om alles af te krijgen. Het werk tot dusver staat op de repo (work in progress).

## Algemeen
In een tijdsbestek van drie weken leer ik in het vak *Real Time Web* hoe je een Realtime/live data op een overzichtelijke manier toegankelijk kan maken. Dit vak kent in de loop van deze drie weken een samenhang met het vak *Web of Things*. Hierbij wordt data gehaald uit *slimme* devices en worden deze aangestuurd. Bij het vak *Real Time Web* wordt deze data overzichtelijk en toegankelijk gemaakt voor de eindgebruikers.

## Installatie

### Clone deze repo
```
git clone https://github.com/nooroel-imamdi/real-time-web/tree/master/wk2
```
### Node_modules

#### dependencies
```
"dotenv": "^4.0.0",
"ejs": "^2.5.6",
"express": "^4.15.2",
"fs": "0.0.1-security",
"install": "^0.8.8",
"request": "^2.81.0",
"socket.io": "^1.7.3"
```
#### devDependencies
```
"debug-http": "^1.1.0"
```

### Installeer *dependencies*
```
npm install
```

### .env-file
In deze repo is gebruik gemaakt van een .env-bestand. Hiermee kunnen gevoelige gegevens, zoals een geheime API-key, bij synchronisatie naar de repo veilig afgescheiden worden. Om deze app werkend te krijgen is noodzakelijk om dit bestand in bezit te hebben. Indien daar behoefte aan is kun je per e-mail contact opnemen.

## Start de server
Bij het uitvoeren van de onderstaande command, wordt de app opgestart.
```
npm start
```

## Twitter API
An asynchronous client library for the Twitter REST and Streaming API's.

## Referenties
- [Tutorial nishantmendiratta ](https://github.com/nishantmendiratta/Node-JS/wiki/Combining-realtime-twitter-data-with-socket.io-and-streaming-data-at-browser)
- [npm Twit API ](https://github.com/nishantmendiratta/twit)
