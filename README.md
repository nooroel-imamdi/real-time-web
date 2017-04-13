# Real Time Web - Minor Web Development
In de voorafgaande blokken van de minor heb ik geleerd hoe je vandaf scratch een web app bouwt die zuinig draait en optimaal gebruikt maakt van alle functionaliteiten die de browser biedt. In dit vak wordt het tijd dat al deze vaardigheden worden toegepast in een real-time applicatie.

## Einddoel
- [ ] Probeer real-time uit
- [ ] Sta stil bij workflow, tools

## Week 1

### To Do-list
- [x] Init
- [x] Aanmaken repository + Readme
- [x] Kies een code-style
- [x] Installatie Express
- [x] Installatie Socket.io
- [x] Deploy de app op het web


Week 1 stond in het teken van een verkenningstocht naar `socket.io`. Hierbij ben ik meerdere tutorials afgelopen om te kijken wat er allemaal mogelijk is. Uiteindelijk ben ik aan de slag gegaan met een chat, waarmee meerdere mensen tegelijk een berichtje kunnen sturen en live de veranderingen kunnen zien.

In de tutorial wordt gebruik gemaakt van `jQuery`. De uitdaging was hierbij om naast een werkende chat, de code van `jQuery` naar `Vanilla JavaScript` te schrijven.

### Resultaat
De chat app is uiteindelijk omgebouwd naar een werkende app dat functioneert middels `Vanilla JavaScript`. Hetgeen wat nog niet de aandacht heeft gekregen deze week is de styling. De focus lag voornamelijk op het werkend krijgen van een applicatie met behulp van Socket. De styling staat voor komende op het programma.

#### Deploying met `now`
Met behulp van `now` is het gelukt de code te deployen.

Live: https://ioapp-dmemcppxof.now.sh/

#### Bug #1
Op dit moment bevindt zich nog een bug in de list *Online users*. Het probleem hierbij is dat de naam van de nieuwe gebruikers op één regel wordt samengevoegd met eerdere gebruikers die ingelogd staan.

Deze bug zal toegevoegd worden aan de to do-list van volgende week.

## Week 2

### To Do-list
- [ ] Fixing bug #1
- [ ] Styling chat
- [ ] ... en wat er nog komen gaat
