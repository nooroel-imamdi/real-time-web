# Real-time Web - Minor Web Development
Nooroel Imamdi | 500706701

## Algemeen
Deze repository bevat de eindopdracht voor het vak *Real-time Web*, onderdeel van de minor *Webdevelopment* aan de Hogeschool van Amsterdam. Dit vak staat in het teken van het in zichtelijk en toegankelijk maken van real-time/live data.

## Proces

## Resultaten

## Tooling

## Node modules

### dependencies
```
"body-parser": "^1.17.1",
"dotenv": "^4.0.0",
"ejs": "^2.5.6",
"express": "^4.15.2",
"fs": "0.0.1-security",
"request": "^2.81.0",
"socket.io": "^1.7.3",
"twitter": "^1.7.0"
```

#### body-parser
*Parse incoming request bodies in a middleware before your handlers, available under the req.body property.*

#### dotenv
Dotenv laadt *environment variables* vanuit een `.env`-file en zet deze om naar een `process.env`. In deze app wordt dit gebruikt om de volgende (gevoelige) data te scheiden van de `server.js`-file:

- consumer_key;
- consumer_secret;
- access-token;
- access_token_secret;

Deze file wordt niet meegestuurd naar de repo. Om de app te kunnen draaien is het wel van belang dit bestand in bezit te hebben met de juiste gegevens. Indien dat gewenst is kan dit bestand worden opgevraagd.

Meer info: https://www.npmjs.com/package/dotenv

#### express
Express is een minimalistisch en flexibele node.js web applicatie dat een set aan functies biedt voor web- en mobiele applicaties.

### devDependencies
```
"browserify": "^14.3.0",
"debug-http": "^1.1.0",
"nodemon": "^1.11.0"
```

## Installtie

### Clone repo
```
git clone https://github.com/nooroel-imamdi/real-time-web/tree/master/wk3
cd wk3
```

## Einddoel
- [ ] Probeer real-time uit
- [ ] Sta stil bij workflow, tools
