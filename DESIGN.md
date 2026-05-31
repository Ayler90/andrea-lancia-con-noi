# Linee guida di design — Andrea Bonomo

## Colori

| Token | Valore | Uso |
|---|---|---|
| Primary / Teal | `#156686` | Bottoni, link, accenti, badge, sezioni scure |
| Teal chiaro | `#C4D9DC` | Banner announcement, sfondi leggeri |
| Dark navy | `#1B2F52` | Sfondo footer |
| Background chiaro | `#f0f7f9` | Sezioni alternate chiare |

**Regola:** il codice corretto del teal è sempre `#156686`. Qualsiasi variante (`#146686`, `#166686`, ecc.) va corretta in `#156686`.

---

## Tipografia

| Elemento | Classe |
|---|---|
| Titoli display | `h-display font-bold` (font: Instrument Serif italic + Inter bold) |
| Testo corpo | `text-sm md:text-base` — mai usare `md:text-lg` salvo eccezioni esplicite |
| Colore testo principale | `text-foreground/85` |
| Colore testo secondario | `text-foreground/65` (NON /75) |
| Colore testo su sfondo scuro | `text-white` o `text-white/80` |

---

## Sezioni

### Sezioni chiare (sfondo bianco o `#f0f7f9`)
- Testo: `text-foreground/85` e `text-foreground/65`
- Badge/accenti: `text-[#156686]`, `bg-[#156686]/8`, `border-[#156686]/15`
- Cursore: normale (scuro)

### Sezioni scure (sfondo `#156686`, `#1B2F52`, ecc.)
- **Aggiungere sempre** `data-cursor-light` all'elemento `<section>` — il cursore diventa chiaro
- Testo: `text-white`, `text-white/80`, sottotitoli a `#f0f0f0`
- Card dentro sezione scura: `bg-[#156686]/8 border border-[#156686]/15 backdrop-blur`

---

## Card stile "stats" (riquadri chiari)
Usato in: ChiSono stats, card delle features nel calendario
```
bg-[#156686]/8  border border-[#156686]/15  rounded-2xl  py-8 px-6
```
- Su sfondo **bianco/chiaro**: testo `text-foreground`, `text-foreground/85`
- Su sfondo **scuro (#156686)**: testo `text-white`, `text-white/80`

---

## Immagini

- **Mai usare** `shadow-*` Tailwind sulle immagini (applica l'ombra al container, non all'immagine)
- Per le ombre/glow usare `filter: drop-shadow(...)` — segue la forma dell'immagine
- Per un glow "globo di luce" sotto un'immagine usare un `<div>` posizionato absolute con `radial-gradient` bianco e `filter: blur()`
- Niente `box-shadow` sugli `<img>`

---

## Animazioni disponibili (già definite in `styles.css`)

| Nome | Uso |
|---|---|
| `img-float` | Fluttuazione verticale lenta (immagini hero) |
| `orb-drift-1/2/3/4` | Glow orb che derivano lentamente (sezioni hero) |
| `text-glow-float` | Glow orizzontale sul testo (pagina 404) |
| `arrow-nudge` | Doppio scatto freccia (banner nav) |
| `footer-glow` | Orb nel footer |

---

## Bottoni

Classe base: `pill bg-primary text-primary-foreground hover:bg-primary/90 hover:-translate-y-0.5`

- Desktop nav CTA: `text-xs px-4 py-2`
- Sezioni principali: `text-sm px-6 py-3`

---

## Spaziatura e layout

- Container principale: `container-narrow` (definito nel CSS)
- Pagine landing: `max-w-6xl mx-auto`
- `gap` tra voci liste: `gap-y-3`
- Font size lista: `text-sm text-foreground/85` con pallino `bg-primary`

---

## Regole generali

1. **Non cambiare il colore di sfondo di una sezione** a meno che non sia esplicitamente richiesto
2. **Non aggiungere `md:text-lg`** al testo corpo — il testo è sempre `text-sm md:text-base`
3. **Non usare `whitespace-nowrap`** sui titoli — causano overflow su mobile
4. Prima di modificare una sezione, identificare se è chiara o scura e applicare le regole di colore corrispondenti
5. Il colore teal è **sempre `#156686`** — verificare prima di ogni push con `grep -r "14[0-9][0-9][0-9][0-9]\|16[0-9][0-9][0-9][0-9]"`
