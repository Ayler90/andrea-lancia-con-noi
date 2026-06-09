# Template struttura Landing Page — Corso / Prodotto Digitale

Questo file descrive la struttura standard di una landing page per un corso o prodotto digitale.
Le sezioni sono nell'ordine consigliato. Ogni sezione include indicazioni su **cosa scrivere**, non il testo definitivo.

---

## 1. HERO

**Scopo:** Prima impressione. Deve comunicare in 5 secondi chi è il prodotto e per chi è.

**Contenuto:**
- **Social proof badge** (sopra al titolo): numero di studenti o clienti con avatar impilati. Es. "Oltre X studenti". Serve a dare fiducia prima ancora di leggere il titolo.
- **Titolo principale (H1):** Descrivi la trasformazione promessa. Struttura consigliata: *"Fai [cosa] anche se [ostacolo], grazie a [nome prodotto]."* Metti in evidenza (corsivo o colore primario) la parte differenziante.
- **Sottotitolo:** 2-3 righe. Espandi brevemente cos'è il prodotto, a chi si rivolge e cosa lo rende pratico/accessibile.
- **CTA primaria:** Pulsante che porta al pricing. Testo diretto, es. "Iscriviti ora →".
- **CTA secondaria:** Link anchor verso la sezione lezioni/programma. Es. "Guarda le lezioni ↓".
- **Immagine prodotto:** Cover, mockup o screenshot del prodotto. Posizionata sotto i CTA, occupa tutta la larghezza del contenitore.
- **Statistiche con count-up:** Riga di 3-4 numeri chiave (es. n. lezioni, n. template, ore di formazione, bonus). Animazione count-up quando entrano in viewport.

---

## 2. PROBLEMA — Intro (sfondo colorato primario)

**Scopo:** Far riconoscere all'utente la propria situazione attuale. Mostrare che capisci il problema prima di presentare la soluzione.

**Sfondo:** Colore primario del brand (scuro). Serve a spezzare visivamente la pagina.

**Contenuto:**
- **Eyebrow:** Etichetta piccola sopra il titolo. Es. "Il punto di partenza".
- **Layout 2 colonne (desktop):** Titolo a sinistra, testo a destra.
- **Titolo (H2):** Formula il desiderio che l'utente già ha. Es. *"Vuoi fare [cosa]. Ma da dove si inizia?"*. Metti in evidenza la domanda/difficoltà con colore secondario.
- **Testo (colonna destra):** 3-4 paragrafi brevi. Descrivi come il prodotto risolve il problema, senza ancora spiegare i dettagli. Nomina gli strumenti specifici se rilevante.
- **Griglia 4 screenshot lezioni (LessonGrid):** 4 immagini in griglia 2×2. Ogni immagine ha un badge con tema e un tooltip con approfondimento. I tooltip appaiono al hover (desktop) o al tap (mobile), ruotando dal bordo esterno della griglia.
- **CTA doppia** (come hero): primario al pricing, secondario alle lezioni.

---

## 3. PAIN POINTS — Il problema concreto (sfondo bianco)

**Scopo:** Mostrare il problema reale con un esempio visivo concreto. Poi presentare la soluzione in due varianti.

**Contenuto:**

### Colonna sinistra — Mockup/visualizzazione del problema
Un mockup interattivo che mostra il problema in modo visivo. Esempi:
- Mockup telefono con statistiche Instagram in calo (per chi si affida ai social)
- Screenshot di un tool con dati negativi
- Qualsiasi visualizzazione che renda tangibile il problema

Il mockup deve avere animazioni che partono quando entra in viewport (IntersectionObserver).

### Colonna destra — Testo del problema
- **Eyebrow:** Es. "Il problema".
- **Titolo (H2):** Descrivi il problema in modo diretto e riconoscibile. Formula: *"Fammi indovinare: [situazione problematica che l'utente vive]."* Evidenzia il cuore del problema con colore primario.
- **4 paragrafi:** Racconta la situazione problematica con empatia. Termina con una frase in grassetto che sintetizza il rischio.

### Freccia biforcuta (SVG)
Elemento grafico che separa il problema dalla soluzione. Freccia che si divide in due rami, per introdurre le due prospettive della soluzione.

### Due box soluzione (griglia 2 colonne)
Ogni box risponde a un aspetto specifico del problema con una lista di vantaggi.
- **Emoji** con animazione float + glow sotto
- **Titolo:** "Perché dovresti [fare X]"
- **Lista punti:** 4-5 vantaggi concreti con icona checkmark

---

## 4. PERCHÉ ESISTE IL PRODOTTO — La soluzione (sfondo tenue)

**Scopo:** Presentare il prodotto come risposta diretta al problema. Mostrare cosa contiene concretamente.

**Contenuto:**
- **Eyebrow:** Es. "La soluzione".
- **Titolo (H2):** "Ecco perché [nome prodotto] esiste." Evidenzia il nome del prodotto.
- **Paragrafo:** 2-3 righe. Racconta la motivazione dietro la creazione del prodotto. Primo persona, tono personale.
- **Annotazione a mano (desktop):** Testo in font handwriting (Caveat) in posizione assoluta accanto al titolo, con freccia SVG che punta al contenuto sotto. Es. "Queste sono solo alcune delle lezioni a cui avrai accesso".
- **ModuleGrid — griglia 3×2 moduli:** 6 card con immagine + titolo breve. Mostrano i macro-argomenti del corso. Hover: leggero sollevamento. Tap su mobile: stesso effetto toggle.
- **CTA doppia** (come hero).

---

## 5. PER CHI È

**Scopo:** Aiutare l'utente a identificarsi. Ridurre i dubbi del tipo "ma è adatto a me?".

**Contenuto:**
- **Eyebrow:** Es. "Per chi è [nome prodotto]?"
- **Titolo (H2):** "[Nome prodotto] è perfetto per te se sei:". Evidenzia "perfetto per te".
- **Griglia 3 card (desktop) / colonna (mobile):** Una card per ogni profilo target.
  - **Emoji** con animazione float sfasata (delay diverso per ogni card)
  - **Titolo profilo:** Es. "Freelance", "Solopreneur", "Coach"
  - **Testo:** 2 paragrafi. Descrivi il problema specifico di questo profilo e come il prodotto lo risolve.
  - **Tag keywords** (footer card, separati da punto): 3 parole chiave che riassumono il valore per quel profilo

---

## 6. PROGRAMMA COMPLETO — Lista lezioni

**Scopo:** Mostrare la profondità e il valore del corso. Costruire fiducia con la trasparenza sul contenuto.

**Sfondo:** Colore primario. Con parallax background (immagini delle lezioni disposte in diagonale, scrollano lentamente con la pagina).

**Contenuto:**
- **Eyebrow:** Es. "Il programma completo".
- **Titolo (H2):** "Qui sotto trovi la lista completa delle lezioni." Evidenzia "completa delle lezioni".
- **Badge lezioni sbloccate:** Pillola con icona lucchetto aperto. Informa l'utente che alcune lezioni sono accessibili gratuitamente (con simbolo play verde). Include link inline "(o clicca qui per filtrarle)" che filtra la lista mostrando solo le lezioni con preview. Sotto il badge, se il filtro è attivo, appare il link "Mostra tutte le lezioni".
- **Lista moduli (LessonList):** Layout a 3 colonne (desktop) / 1 colonna (mobile), con `column-count`. Ogni modulo ha:
  - Pillola con numero modulo (es. "Modulo 3") — numero originale preservato anche quando si filtra
  - Titolo modulo in grassetto
  - Lista lezioni con bordo sinistro verticale
  - Lezioni con preview: button con simbolo play verde animato, cliccabile → apre VideoModal
  - Lezioni standard: testo disabilitato
- **Pulsante "Guarda tutti i moduli":** Visibile solo se ci sono più moduli di quelli mostrati inizialmente e il filtro non è attivo. Espande la lista completa.
- **VideoModal:** Popup con clip-path animation di apertura. Contiene top bar con etichetta + titolo lezione + pulsante chiusura, e player video (iframe o `<video>`). Desktop: `max-w-5xl`. Mobile: full width.

---

## 7. BONUS

**Scopo:** Aggiungere valore percepito oltre il contenuto principale del corso.

**Sfondo:** Tenue (es. sfondo secondario chiaro).

**Contenuto:**
- **Eyebrow:** Es. "Extra".
- **Titolo (H2):** "Ci sono anche [N] Bonus Speciali per te." Evidenzia "Bonus Speciali".
- **Griglia 2 card bonus** (max-w-4xl centrata):
  - Immagine cover (aspect-video, rounded-xl) nella parte alta
  - Etichetta "Bonus #N"
  - **Titolo bonus** + sottotitolo (es. autore/tipo di materiale)
  - **Descrizione:** 2-3 righe su cosa si ottiene e perché è utile
  - Hover: leggero sollevamento + ombra

---

## 8. CHI SONO — Presentazione autore

**Scopo:** Costruire autorità e connessione personale. Rispondere implicitamente alla domanda "perché dovrei fidarmi di te?".

**Struttura:** Componente condiviso `<ChiSono>` usabile in tutte le landing page.

**Contenuto:**
- Foto dell'autore
- Nome e ruolo
- Bio breve: 2-3 paragrafi. Racconta la storia personale, l'esperienza rilevante e il motivo per cui insegna questo argomento.
- **Credenziali/numeri:** es. anni di esperienza, n. clienti, risultati ottenuti
- **CTA** (personalizzabile per ogni pagina via prop): porta al pricing della specifica pagina

---

## 9. TESTIMONIANZE

**Scopo:** Prova sociale. Far vedere che altri hanno già scelto il prodotto e ne sono soddisfatti.

**Sfondo:** Bianco, con starfield canvas animato (stelle/sparkle che driftano lentamente, reagiscono al movimento del mouse su desktop).

**Contenuto:**
- **Eyebrow:** Es. "Le parole dei miei studenti ❤️".
- **Titolo (H2):** "Cosa dicono i miei studenti e clienti di [nome prodotto]?"
- **ScrollReviews — due righe di screenshot:**
  - Desktop: parallax scroll-driven (riga 1 va a sinistra, riga 2 a destra man mano che scorri)
  - Mobile: marquee CSS automatico (riga 1 a sinistra, riga 2 a destra), velocità 35s
  - Fade sulle estremità (gradiente bianco su left/right)
  - Screenshot di recensioni reali (Instagram DM, commenti, messaggi)

---

## 10. PRICING

**Scopo:** Convertire. Rendere l'acquisto semplice e privo di rischi percepiti.

**Sfondo:** Colore scuro/foreground. Glow orbs decorativi.

**Contenuto:**

### Annotazione handwriting (desktop: assoluta a sinistra del box; mobile: sopra)
Testo in font Caveat. Domanda retorica che anticipa l'acquisto. Es. "Pronto a [trasformazione promessa]?" Con freccia SVG che punta al box pricing.

### Box pricing (sfondo bianco, angoli arrotondati)
**Layout desktop (2 colonne):**
- Sinistra: immagine cover prodotto + badge "Accesso immediato" + titolo prodotto + sottotitolo
- Riga inferiore: lista "Cosa ricevi" | separatore verticale | colonna destra con prezzo + CTA

**Layout mobile (colonna singola):**
- Cover prodotto centrata + badge + titolo + sottotitolo
- Prezzo grande centrato
- Lista "Cosa ricevi"
- CTA full-width

**Elementi comuni:**
- **Badge "Accesso immediato"** con dot verde pulsante
- **Prezzo:** Grande, colore primario. Formato: "€XX" + "una tantum" sottotitolo
- **Lista "Cosa ricevi":** Ogni voce con checkmark. Include: n. lezioni, n. template, ore formazione, accesso a vita, supporto, bonus, garanzia.
- **CTA:** Testo con prezzo incluso, es. "Acquista ora a €XX →". Nessun `target="_blank"`.
- **Nota rate:** Piccola nota sotto la CTA. Es. "Puoi pagare anche a rate".

### Box Garanzia (sotto il box pricing)
- Sfondo semi-trasparente chiaro su sfondo scuro, bordo leggero, angoli arrotondati
- **Layout:** Immagine garanzia (quadrata, 64×64px) + titolo in linea | testo descrittivo full-width sotto
- **Titolo:** Frase che trasmette fiducia. Es. "Voglio che il tuo acquisto sia consapevole."
- **Testo:** Descrivi la garanzia soddisfatto o rimborsato con numero di giorni e condizioni. Tono diretto e rassicurante.

---

## 11. FAQ

**Scopo:** Abbattere le ultime obiezioni e dubbi rimasti prima dell'acquisto.

**Contenuto:**
- **Eyebrow:** Es. "Domande frequenti".
- **Titolo (H2):** "Hai qualche domanda? Ho le risposte." Evidenzia "Ho le risposte."
- **FaqAccordion:** Lista di domande/risposte in accordion. Ogni voce ha:
  - Domanda in grassetto (testo pieno), freccia chevron che ruota all'apertura
  - Risposta che si apre con animazione max-height
  - Apertura singola (aprirne una chiude le altre)

**Domande tipo da includere:**
- Quanto costa?
- Come contattare l'autore?
- Cosa si impara?
- Come funzionano i template?
- Come funziona la garanzia?

---

## 12. NEWSLETTER

**Scopo:** Catturare chi non è pronto ad acquistare. Costruire la lista email.

**Struttura:** Componente condiviso `<Newsletter>` usabile in tutte le pagine.
Wrapper `<div id="newsletter">` per permettere l'anchor `#newsletter`.

**Contenuto:**
- Titolo sezione e sottotitolo che spiegano cosa riceve chi si iscrive
- Immagini del lead magnet (se presente)
- **Form MailerLite** embeddato via `dangerouslySetInnerHTML`
- **Pulsante principale:** "Voglio iscrivermi alla newsletter!"
- **Link secondario** (accanto al pulsante): "Guarda un esempio di newsletter →". Al click apre `NewsletterPreviewModal`.
- **NewsletterPreviewModal:** Popup con clip-path animation. Top bar con etichetta + titolo + pulsante chiusura. Iframe con preview di una newsletter reale, caricato con 350ms di ritardo (dopo animazione apertura) per evitare flicker. Desktop: `max-w-4xl`. Mobile: full width.

---

## Note generali di struttura

### Navigazione sezioni
- Il pulsante "Iscriviti ora" nelle sezioni Hero, Problema, Perché esiste → anchor `#form` (scroll al pricing)
- Il pulsante "Guarda le lezioni" → anchor `#lezioni`
- Il banner annuncio in cima alla pagina → anchor `#newsletter` se si è già sulla pagina, altrimenti `/#newsletter`

### Palette colori (adattabile)
- **Primario:** colore brand principale (es. `#156686`)
- **Secondario/tenue:** versione più chiara del primario (es. `#C4D9DC`)
- **Sfondo scuro:** `#0C2330` (pricing, modal, tooltip)
- **Sfondo chiaro alternato:** `#EEF3F5` (sezioni alternate per creare ritmo visivo)

### Componenti riusabili in tutte le landing
- `<Nav />` — navigazione
- `<Footer />` — footer
- `<ChiSono />` — presentazione autore (CTA personalizzabile via prop)
- `<Newsletter />` — form iscrizione newsletter
- `<Loghi />` — loghi partner/media (opzionale, con o senza bordo)

### Ordine sezioni consigliato
```
Hero → Problema intro → Pain points → Perché esiste → Per chi è
→ Programma completo → Bonus → Chi sono → Testimonianze
→ Pricing → FAQ → Newsletter
```
