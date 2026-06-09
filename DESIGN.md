# Sistema di Design — Andrea Bonomo

> Documento di riferimento per qualsiasi nuova pagina o componente.
> Ogni scelta qui descritta è lo standard consolidato - non deviare senza motivo esplicito.

## Regola tipografica: trattini
Usare sempre il trattino corto `-` (hyphen). Non usare mai il trattino lungo `—` (em dash) nei testi della pagina, nei commenti JSX o nelle stringhe. Questo vale per tutti i file del progetto.

---

## 1. Colori

| Token | Hex | Uso |
|---|---|---|
| Primary / Teal | `#156686` | Bottoni, link, accenti, badge, sfondi sezioni scure |
| Teal medio | `#6C9FA8` | Glow orb secondari, accenti leggeri |
| Teal chiaro | `#C4D9DC` | Banner announcement, sfondi card su scuro, testi handwriting |
| Sfondo chiaro alternato | `#EEF3F5` | Card su sfondo scuro, riquadri feature |
| Background pagina | `#ffffff` | Default |
| Dark navy | `#1B2F52` | Sfondo footer |
| Near-black body | `oklch(0.18 0.02 230)` | Colore testo principale (con lieve tinta fredda) |

**Regola ferrea:** il teal è **sempre `#156686`**. Varianti tipo `#146686` o `#166686` vanno corrette.
Verifica prima di ogni push: `grep -r "14[0-9][0-9][0-9][0-9]\|16[0-9][0-9][0-9][0-9]"`

---

## 2. Tipografia

### Font in uso
| Font | Peso | Uso |
|---|---|---|
| **Inter** | 800 (ExtraBold) | Titoli display — la parte in grassetto |
| **Instrument Serif** | 500 italic | Corsivo nei titoli display — la parte enfatizzata |
| **Outfit** | 700 | Non più in uso attivo |
| **Caveat** | 600 | Annotazioni handwriting (es. freccia pricing) |

### Classi tipografiche

#### `.h-display` — Titoli principali
```css
font-family: Inter;
font-weight: 800;
letter-spacing: -0.045em;
line-height: 0.98;
```
- Gli `<em>` dentro `.h-display` diventano automaticamente Instrument Serif italic 500
- **Dimensioni standard per i titoli di sezione:** `text-3xl md:text-4xl lg:text-5xl`
- **Titolo hero above-the-fold:** `clamp(2rem, 4.5vw, 3.25rem)` — unica eccezione alla regola sopra
- **Mai usare `.h-display` senza la classe `font-bold`** quando il titolo è in un contesto standalone

#### Corsivo nei titoli — regola d'uso
- Ogni titolo di sezione deve avere **almeno una parola o frase in corsivo** con colore accentuato
- Su **sfondo chiaro:** `<em className="text-[#156686]">parola</em>`
- Su **sfondo scuro (`#156686`):** `<em style={{ color: "#C4D9DC" }}>parola</em>`
- Il corsivo va su parole chiave o sull'intera frase finale di impatto (es. *"Zero Stress di Lancio."*)

#### `.eyebrow` — Label sopra i titoli
```css
font-size: 0.7rem;
text-transform: uppercase;
letter-spacing: 0.22em;
font-weight: 500;
color: muted-foreground;
```
Uso tipico: `<p className="eyebrow text-[#156686] mb-4">Label sezione</p>`

**Regola:** colore sempre `text-[#156686]` pieno — **mai `/70` o altre opacità**. Uguale su tutte le pagine.

#### Testo corpo
- Dimensione: `text-sm md:text-base` — **mai `md:text-lg`**
- Colore principale: `text-foreground/85`
- Colore secondario: `text-foreground/65` (NON `/75`)
- Testo su sfondo scuro: `text-white` o `text-white/80`, sottotitoli `#f0f0f0`
- Eccezione esplicita: testo descrittivo nelle pagine 404 o landing specifiche può essere `16px` fisso via `style={{ fontSize: "16px" }}`

#### Liste puntate
```tsx
<li className="flex items-start gap-2.5 text-sm text-foreground/85">
  <CheckIcon /> oppure <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
  Testo voce
</li>
```
Gap tra voci: `space-y-3`

---

## 3. Layout e Spaziatura

### Container
| Classe | Max-width | Padding |
|---|---|---|
| `.container-narrow` | `1200px` | `1.5rem` (24px) mobile, `2.5rem` (40px) desktop |
| Pagine landing | `max-w-6xl mx-auto` | — |
| Sezione pricing/FAQ | `max-w-4xl mx-auto` | — |

**Regola:** il padding mobile di `container-narrow` e `1.5rem` (equivalente a `px-6`) - lo stesso usato nella sezione Chi sono. Non ridurre a valori inferiori. Il padding desktop resta `2.5rem`. Le sezioni che usano `container-narrow` non devono aggiungere `px-*` extra sulla `<section>` - il padding lo gestisce solo il container.

### Spaziatura verticale sezioni
- Sezione standard: `py-16 md:py-20`
- Sezione ampia (hero, chi sono): `py-20 md:py-28`
- Padding orizzontale sezione: `px-4` desktop, `px-2` mobile quando la card deve essere più larga

### Layout a due colonne
```tsx
<div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center">
  <div className="md:w-[45%] flex-shrink-0">/* immagine/sinistra */</div>
  <div className="flex-1">/* testo/destra */</div>
</div>
```

---

## 4. Bottoni (`.pill`)

### Struttura base
```tsx
<a className="pill bg-primary text-primary-foreground hover:bg-primary/90 hover:-translate-y-0.5">
  Testo CTA →
</a>
```

### Dimensione base (CSS — non sovrascrivere con Tailwind)
- `font-size: 0.8125rem` · `font-weight: 600` · `padding: 1rem 1.75rem`
- **Non aggiungere** classi `text-sm`, `text-base`, `px-*`, `py-*` — il CSS base gestisce tutto
- Eccezioni: solo Nav CTA (`text-xs px-4 py-2`) e bottoni a piena larghezza mobile (`block w-full text-center`)

### Effetti built-in nel `.pill`
- **Shadow teal:** `box-shadow: 0 4px 18px -2px rgba(21,102,134,0.22)`
- **Glow interno al hover:** `::before` con `radial-gradient` bianco che segue il cursore via CSS variables `--pill-glow-x` / `--pill-glow-y`
- **Transizione:** `all 0.25s ease`
- **`whitespace-nowrap`**: usare per evitare che la freccia `→` vada a capo

### Bottone ghost (`.cta-ghost`)
Per CTA secondarie su sfondo chiaro — **stessa dimensione del pill**:
```tsx
<a className="cta-ghost">Testo →</a>
```
- `font-size: 0.8125rem` · `font-weight: 600` · `padding: 1rem 1.75rem` (identico al pill)
- Al hover diventa teal (`#156686`) con testo bianco
- **Non aggiungere** classi di dimensione — il CSS base gestisce tutto

---

## 5. Badge / Chip

### Badge standard (su sfondo chiaro)
```tsx
<div className="inline-flex items-center gap-2 border border-[#156686]/25 bg-[#156686]/6 text-[#156686] text-[11px] font-semibold uppercase tracking-[0.12em] px-3 py-1.5 rounded-full">
  Label badge
</div>
```
- Nessun pallino/dot — solo testo uppercase
- Se serve uno stack di avatar a sinistra del testo:
```tsx
<div className="flex -space-x-2 flex-shrink-0">
  {avatars.map((src, i, arr) => (
    <img key={i} src={src} className="w-10 h-10 rounded-full border-2 object-cover flex-shrink-0"
      style={{ borderColor: "var(--surface)", zIndex: arr.length - i }} />
  ))}
</div>
```
- `w-10 h-10` (40px), `border-color: var(--surface)`, z-index decrescente (primo avatar sopra gli altri)
- **Dimensione standard avatar: sempre `w-10 h-10` (40px)** — non usare `w-8`, `w-9` o altre varianti

### Badge su sfondo scuro (nav mobile)
```tsx
<span className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-widest bg-white/15 text-white px-2.5 py-1 rounded-full">
  <span className="w-2 h-2 rounded-full bg-emerald-400" style={{ boxShadow: "0 0 6px rgba(52,211,153,0.8)" }} />
  Gratis
</span>
```

---

## 6. Card

### Card stats / feature (sfondo chiaro)
```tsx
<div className="rounded-2xl py-8 px-6 bg-[#156686]/8 border border-[#156686]/15"
  style={{ boxShadow: "inset 0 0 40px -10px rgba(21,102,134,0.12), inset 0 1px 0 rgba(196,217,220,0.3)" }}>
```

### Card feature su sezione scura (`#156686`)
```tsx
<div data-cursor-dark className="w-full rounded-2xl py-8 px-6"
  style={{ backgroundColor: "#EEF3F5", border: "1px solid rgba(196,217,220,0.5)" }}>
```
**Importante:** aggiungere `data-cursor-dark` sulle card chiare dentro sezioni scure.

### Card con emoji fluttuante e glow (box checklist)
```tsx
<div className="bg-white rounded-2xl p-7 md:p-8 shadow-sm">
  {/* emoji fluttuante con glow teal sotto */}
  <div className="relative inline-block mb-5">
    <div className="text-4xl" style={{ animation: "thought-float 3s ease-in-out infinite" }}>
      🚀
    </div>
    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-10 h-4 blur-lg rounded-full pointer-events-none"
      style={{ backgroundColor: "rgba(21,102,134,0.35)" }} />
  </div>
  <h3 className="font-semibold text-[#0c2330] text-base md:text-lg mb-5 leading-snug">Titolo</h3>
  <ul className="space-y-3">
    {items.map(t => (
      <li key={t} className="flex items-start gap-3 text-sm text-foreground/70 leading-relaxed">
        <CheckIcon />
        {t}
      </li>
    ))}
  </ul>
</div>
```
**Regole:**
- Emoji sempre `text-4xl` con `thought-float 3s ease-in-out infinite`
- Glow: `w-10 h-4 blur-lg`, colore `rgba(21,102,134,0.35)` per teal; `rgba(220,50,50,0.4)` per rosso
- Checkbox: `rx="5"` (angoli arrotondati), fill teal a 10%, stroke teal a 30%, spunta teal `#156686`

### Card pricing (sfondo bianco con sezione scura intorno)

Struttura completa — identica su tutte le pagine landing:

```tsx
<section id="form" className="py-16 md:py-20 px-2 md:px-4 bg-foreground relative overflow-hidden" data-cursor-light>
  {/* orb glow standard */}
  <div className="container-narrow max-w-4xl mx-auto relative z-10">

    {/* Annotazione handwriting a sinistra (desktop) / sopra (mobile) */}
    {/* → vedi §11 Annotazioni Handwriting */}

    <div className="relative">
      {/* Desktop annotation: absolute right-full top-8 pr-6 w-52 */}
      <div className="bg-white rounded-xl overflow-hidden" data-cursor-dark>

        {/* MOBILE: immagine prodotto centrata + badge + titolo + prezzo + checklist + CTA */}
        {/* DESKTOP: immagine prodotto + header a destra | checklist | divisore | prezzo+CTA */}

        {/* Immagine prodotto con float */}
        <img src={coverImg} className="w-36 flex-shrink-0" style={{ animation: "img-float 5s ease-in-out infinite" }} />

        {/* Badge "Accesso immediato" */}
        <div className="inline-flex items-center gap-1.5 border border-[#156686]/25 bg-[#156686]/6 text-[#156686] text-[11px] font-semibold uppercase tracking-[0.12em] px-3 py-1 rounded-full">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0" style={{ boxShadow: "0 0 5px rgba(52,211,153,0.8)" }} />
          Accesso immediato
        </div>

        {/* Layout desktop: flex con divisore */}
        {/* Sinistra: checklist | div w-px bg-foreground/10 | Destra: prezzo + CTA */}
        <div className="w-px bg-foreground/10 mx-4 self-stretch" />
        <div className="w-72 flex-shrink-0 pl-12 flex flex-col justify-center items-center text-center">
          <span className="text-5xl font-bold text-[#156686]">129€</span>
          <a href={PURCHASE_URL} className="pill bg-primary text-primary-foreground ...">Acquista ora a 129€ →</a>
          <p className="text-xs text-foreground/40 mt-3">Puoi pagare anche a rate, selezionando l'opzione nel checkout</p>
        </div>
      </div>
    </div>

    {/* Blocco garanzia separato sotto il card */}
    <div className="mt-10 bg-white/5 border border-white/20 rounded-2xl px-8 py-7">
      <div className="flex items-center gap-6">
        <img src={imgGaranzia} className="w-16 h-16 flex-shrink-0 rounded-xl object-cover" />
        <div>
          <p className="font-semibold text-white mb-1">Titolo garanzia</p>
          <p className="text-sm text-white/65 leading-relaxed">Testo garanzia con <strong className="text-white/85">14 giorni</strong>...</p>
        </div>
      </div>
    </div>
  </div>
</section>
```

---

## 7. Sezioni — Regole colore e cursore

### Sezione chiara (bg bianco o `#f0f7f9` o `#EEF3F5`)
- Testo: `text-foreground/85`, secondario `text-foreground/65`
- Accenti: `text-[#156686]`, `bg-[#156686]/8`, `border-[#156686]/15`
- Cursore: **nessun attributo** (rimane scuro di default)

### Sezione scura (bg `#156686`, `#1B2F52`, `bg-foreground`)
- Aggiungere **sempre** `data-cursor-light` sul `<section>`
- Testo: `text-white`, `text-white/80`
- Sottotitoli: `color: "#f0f0f0"`
- Card interne chiare: aggiungere `data-cursor-dark`

---

## 8. Glow Orb (sfondo animato)

### Orb standard per sezione scura
```tsx
<div className="absolute w-[700px] h-[700px] rounded-full pointer-events-none"
  style={{ background: "#6C9FA8", opacity: 0.35, filter: "blur(100px)",
    bottom: "-20%", left: "5%", animation: "orb-drift-1 28s ease-in-out infinite" }} />
<div className="absolute w-[600px] h-[600px] rounded-full pointer-events-none"
  style={{ background: "#156686", opacity: 0.3, filter: "blur(100px)",
    bottom: "-15%", right: "10%", animation: "orb-drift-2 34s ease-in-out infinite" }} />
```
La sezione deve avere `relative overflow-hidden`.

### Orb hero (sezione chiara)
```tsx
<div className="absolute w-[500px] h-[500px] rounded-full bg-[#156686]/25 blur-3xl"
  style={{ top: "0%", left: "-5%", animation: "orb-drift-1 22s ease-in-out infinite" }} />
```

### Glow sotto immagine (globo di luce)
```tsx
<div style={{
  position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)",
  width: "120%", height: "120%",
  background: "radial-gradient(circle, rgba(255,255,255,0.75) 0%, rgba(255,255,255,0.3) 40%, transparent 70%)",
  filter: "blur(40px)", zIndex: 0,
}} />
```

---

## 9. Animazioni

### Disponibili in `styles.css`

| Nome | Durata consigliata | Uso |
|---|---|---|
| `img-float` | `5s ease-in-out infinite` | Fluttuazione immagini — ruota di -2deg e sale/scende 18px |
| `orb-drift-1` | `22-28s ease-in-out infinite` | Orb principale che deriva per lo schermo |
| `orb-drift-2` | `26-34s ease-in-out infinite` | Orb secondario, direzione opposta |
| `orb-drift-3` | `30s ease-in-out infinite` | Orb terziario |
| `orb-drift-4` | `35s ease-in-out infinite` | Orb quaternario |
| `text-glow-float` | `9s ease-in-out infinite` | Glow circolare che scorre sul testo (pagina 404) |
| `arrow-nudge` | `2.4s ease-in-out infinite` | Doppio scatto freccia → (banner nav) |
| `footer-glow` | `12s linear infinite` | Orb nel footer navy |
| `guide-gentle-float` | `3-3.8s ease-in-out infinite` | Float leggero immagini guida |
| `mobile-menu-in/out` | `0.15s ease` | Apertura/chiusura menu mobile |
| `thought-float` | `3s ease-in-out infinite` | Fluttuazione emoji nei box checklist e card |

### `img-float` — dettaglio
```css
@keyframes img-float {
  0%, 100% { transform: rotate(-2deg) translateY(0px); }
  50%       { transform: rotate(-2deg) translateY(-18px); }
}
```
Mantiene sempre la rotazione di -2deg. Ampiezza 18px.

### `text-glow-float` — dettaglio (pagina 404)
```tsx
style={{
  background: "radial-gradient(circle, #a8e6f0 0%, #156686 30%, #0c2330 65%)",
  backgroundSize: "400% 400%",
  backgroundPosition: "-100% 50%",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  animation: "text-glow-float 9s ease-in-out infinite",
}}
```
Il glow è circolare, grande (400%), molto lento (9s), va da sinistra a destra e torna.

---

## 10. Classi interattive

### `.border-wipe` — Card con bordo teal animato al hover
```css
/* Default: bordo grigio 1.5px */
/* Hover: bordo teal 1.5px che si disegna da sinistra a destra in 0.55s */
/* Hover: sollevamento -4px con shadow */
```
Usata sulle card recensioni e percorsi.

### `.filter-btn` — Pulsante con bordo teal animato
```css
/* Default: sfondo bianco, bordo grigio 1.5px */
/* Hover: bordo teal wipe + scale(1.015) translateY(-2px) */
/* .is-active: sfondo #156686, testo bianco */
```
Usato nei filtri percorsi e nelle FAQ.

### `.faq-item.is-active` — Accordion FAQ attivo
```css
/* Sfondo rimane bianco — NON diventa blu */
/* Solo il bordo diventa teal 1.5px */
/* Apertura: max-height 0.4s ease — fluida */
/* Chiusura: istantanea (transition: none) */
```

### Struttura FAQ corretta
```tsx
{/* Sezione: max-w-4xl mx-auto */}
<div className={`faq-item filter-btn rounded-2xl${open ? " is-active" : ""}`}
  style={{ transition: "box-shadow 0.35s ease, transform 0.35s ease" }}>
  <button className="w-full flex items-center justify-between px-6 py-5 text-left font-semibold text-base text-foreground">
    {faq.q}
    <svg ... style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.35s ease" }}>
      <polyline points="6 9 12 15 18 9" />
    </svg>
  </button>
  <div style={{ maxHeight: open ? "800px" : "0px", overflow: "hidden", transition: open ? "max-height 0.4s ease" : "none" }}>
    <div className="px-6 pb-5 text-sm text-foreground/65 leading-relaxed">{faq.a}</div>
  </div>
</div>
```
**Regole:**
- **NON** aggiungere `border` o `overflow-hidden` Tailwind al div wrapper — il `filter-btn` gestisce tutto via CSS
- Testo domanda: `font-semibold text-base text-foreground` (non `text-foreground/85`)
- `faq.a` può essere `React.ReactNode` per supportare JSX (checklist con `<CheckIcon />`, link `<a>`)
- Risposte con paragrafi/newline: aggiungere `whitespace-pre-line` al wrapper se è stringa pura

---

## 11. Annotazioni Handwriting

Per elementi decorativi tipo "Pronto a organizzare i tuoi lanci?":
```tsx
<span style={{ fontFamily: "'Caveat', cursive", fontSize: "1.2rem", color: "#C4D9DC",
  lineHeight: 1.35, display: "block", transform: "rotate(-6deg)", transformOrigin: "left top" }}>
  Testo annotazione
</span>
```
Font: Caveat 600 (già caricato in `index.html`).
Colore: sempre `#C4D9DC` su sfondo scuro.
Rotazione: `-6deg` per effetto manuale naturale.

### Freccia SVG verso il basso
```tsx
<svg width="50" height="55" viewBox="0 0 50 55" fill="none">
  <path d="M 25 4 C 22 20, 28 36, 25 48" stroke="#C4D9DC" strokeWidth="2" strokeLinecap="round" fill="none"/>
  <path d="M 17 40 L 25 52 L 33 40" stroke="#C4D9DC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
</svg>
```

---

## 12. Immagini

- **Mai** `shadow-*` Tailwind sulle immagini — usa `filter: drop-shadow()`
- **Mai** `box-shadow` su `<img>`
- Per glow che segue la sagoma: `filter: drop-shadow(0 6px 18px rgba(0,0,0,0.18))`
- Per glow "globo di luce": `<div>` absolute con `radial-gradient` + `filter: blur()`
- Immagini hero con float: `style={{ animation: "img-float 5s ease-in-out infinite" }}`

---

## 13. Cursore personalizzato

| Attributo | Effetto |
|---|---|
| `data-cursor-light` | Cursore diventa chiaro (per sezioni scure) |
| `data-cursor-dark` | Cursore diventa scuro (per card chiare dentro sezioni scure) |
| nessun attributo | Cursore default scuro |

**Regola:** ogni `<section>` con sfondo scuro deve avere `data-cursor-light`. Le card chiare dentro quelle sezioni devono avere `data-cursor-dark`.

---

## 14. Navigazione

### Link context-aware (Nav e Footer)
- Su `/scarica-calendario-lancio`: "Chi sono", "Guida gratuita", "Recensioni" puntano a ancore locali (`#chi-sono`, `#newsletter`, `#testimonianze`)
- Su qualsiasi altra pagina: puntano alla homepage (`/#chi-sono`, ecc.)
- "Calendario di Lancio" punta sempre a `/scarica-calendario-lancio` direttamente
- I link percorsi (goToPercorso): se non si è sulla homepage → redirect a `/#percorsi`

### Bottoni vs Anchor per navigazione
- Se TanStack Router potrebbe intercettare il click su stesso percorso → usare `<button>` con `window.location.href` invece di `<a>`

---

## 15. Pagine landing (struttura standard)

Ordine sezioni consigliato (da `/scarica-calendario-lancio` come riferimento):
1. **Hero** — above the fold, immagine + copy + CTA
2. **Features** — sezione scura `#156686` con card `#EEF3F5`
3. **Carousel / Preview** — mostra il prodotto
4. **Pricing** — sezione scura `bg-foreground` con card bianca
5. **FAQ** — sezione chiara, accordion
6. **Chi Sono** — componente riusabile
7. **Testimonianze** — componente riusabile
8. **Newsletter** — componente riusabile

---

## 16. Pagina 404

Struttura:
```tsx
<h1 className="h-display font-bold">Aiuto, forse c'è un problema.</h1>
<p className="h-display font-bold">🤔 <span style={/* text-glow-float */}>mmm, questa pagina non c'è.</span></p>
<p style={{ fontSize: "16px" }} className="text-foreground/60 max-w-md">Descrizione...</p>
<Link className="pill bg-primary ...">Torna alla home →</Link>
```

---

## 17. Regole generali — DO / DON'T

### DO ✅
- Corsivo colorato in ogni titolo di sezione
- `data-cursor-light` su ogni sezione scura
- `filter: drop-shadow()` per le ombre sulle immagini
- `text-sm md:text-base` per il testo corpo
- `text-foreground/65` per testo secondario (non /75)
- `whitespace-nowrap` sui bottoni CTA full-width per evitare wrapping della freccia →
- Usare `<button>` invece di `<a>` quando TanStack Router potrebbe intercettare la navigazione

### DON'T ❌
- Mai cambiare sfondo sezione senza esplicita richiesta
- Mai `md:text-lg` sul testo corpo
- Mai `whitespace-nowrap` sui titoli (overflow mobile)
- Mai `shadow-*` Tailwind sulle immagini
- Mai `box-shadow` su `<img>`
- Mai teal diverso da `#156686`
- Mai `overflow-hidden` su elementi con animazione `::before` clip-path (la clippa)

---

## 18. Programma Lezioni (sezione corso)

### Layout colonne
```tsx
<div className="columns-1 md:columns-3 gap-5">
  {modules.map((mod, i) => (
    <div className="break-inside-avoid mb-6">
      {/* Badge modulo */}
      <span className="inline-block text-[10px] font-semibold uppercase tracking-[0.14em] text-[#156686] bg-[#C4D9DC]/90 px-2 py-0.5 rounded-full mb-2">
        Modulo {i + 1}
      </span>
      <p className="text-[14px] font-semibold text-white/90 mb-2">{mod.title}</p>
      <ul className="border-l-2 border-white/20 pl-3 space-y-1.5">
        {mod.lessons.map((l) => (
          <li className="text-[13px] leading-snug">
            {/* Lezione con video */}
            <button className="group flex items-center gap-1.5 text-left text-white/80 hover:text-white transition-colors w-full">
              <span className="lesson-link-text">{l.name}</span>
              <span className="flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center"
                style={{ animation: "arrow-nudge 2.8s ease-in-out infinite", backgroundColor: "rgba(187,247,208,0.9)" }}>
                <svg width="6" height="7" viewBox="0 0 6 7" fill="#15803d"><polygon points="0,0 6,3.5 0,7" /></svg>
              </span>
            </button>
            {/* Lezione senza video */}
            <span className="text-white/60">{l.name}</span>
          </li>
        ))}
      </ul>
    </div>
  ))}
</div>
```

### Badge modulo pill
- Sfondo: `bg-[#C4D9DC]/90` — teal chiaro semi-opaco
- Testo: `text-[#156686]` — teal su teal chiaro
- Taglia: `text-[10px]` uppercase tracking `0.14em`

### Pulsante play (lezioni sbloccate)
- **Sfondo cerchio:** `rgba(187,247,208,0.9)` — verde chiaro
- **Triangolo:** fill `#15803d` — verde scuro
- **Animazione:** `arrow-nudge 2.8s ease-in-out infinite` — doppio scatto a destra
- **Posizione:** a destra del testo lezione

### Sottolineatura lezione cliccabile (`.lesson-link-text`)
```css
.lesson-link-text {
  background-image: linear-gradient(rgba(187,247,208,0.9), rgba(187,247,208,0.9));
  background-repeat: no-repeat;
  background-position: left bottom;
  background-size: 0% 2px;
  transition: background-size 0.5s cubic-bezier(0.4,0,0.2,1);
  text-decoration: none !important;
  cursor: pointer;
}
.group:hover .lesson-link-text {
  background-size: 100% 2px; /* disegna da sinistra a destra */
  font-weight: 600;
}
```

### Badge "lezioni sbloccate"
```tsx
<div className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.12em]"
  style={{ backgroundColor: "rgba(196,217,220,0.12)", border: "1px solid rgba(196,217,220,0.25)", color: "#C4D9DC" }}>
  🔓 Testo badge
  <span className="flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center"
    style={{ backgroundColor: "rgba(187,247,208,0.9)" }}>
    <svg width="6" height="7" viewBox="0 0 6 7" fill="#15803d"><polygon points="0,0 6,3.5 0,7" /></svg>
  </span>
</div>
```

### Pulsante "Guarda tutti i moduli"
```tsx
<button className="inline-flex items-center gap-2 text-sm font-semibold text-white/80 border border-white/25 rounded-full px-6 py-2.5 hover:bg-white/10 transition">
  Guarda tutti i moduli
  <svg ...>↓</svg>
</button>
```

---

## 19. Video Modal

Si apre con animazione `clipPath` dal centro (espande verso l'alto e verso il basso):

```tsx
<div className="fixed inset-0 z-[200] flex items-center justify-center p-4" onClick={onClose}>
  <div className="absolute inset-0 backdrop-blur-sm" style={{ backgroundColor: open ? "rgba(12,35,48,0.85)" : "rgba(12,35,48,0)" }} />
  <div className="relative z-10 w-full max-w-3xl rounded-2xl overflow-hidden"
    style={{
      clipPath: open ? "inset(0% 0% 0% 0% round 1rem)" : "inset(50% 0% 50% 0% round 1rem)",
      border: "1.5px solid rgba(196,217,220,0.25)",
      boxShadow: "0 0 60px -10px rgba(21,102,134,0.6)",
      transition: "all 0.3s",
    }}>
    {/* Barra superiore brand */}
    <div className="flex items-center justify-between px-4 py-3" style={{ backgroundColor: "#EEF3F5", borderBottom: "1px solid rgba(21,102,134,0.12)" }}>
      <div>
        <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-[#156686]/60">Anteprima lezione</p>
        <p className="text-[13px] font-semibold text-[#0c2330]/85">{title}</p>
      </div>
      <button onClick={onClose} className="w-7 h-7 rounded-full hover:bg-[#156686]/10 text-[#156686]/60">✕</button>
    </div>
    {/* Video: <video> per .mp4, <iframe> per YouTube */}
    <div className="aspect-video" style={{ backgroundColor: "#0c2330" }}>
      {url.includes(".mp4") ? <video src={url} controls autoPlay className="w-full h-full" />
                            : <iframe src={url} className="w-full h-full" allow="autoplay; fullscreen" allowFullScreen />}
    </div>
  </div>
</div>
```
**Colori barra:** `#EEF3F5` sfondo, `#156686` accenti, `#0c2330` testo — brand palette.

---

## 20. Card con immagine interna (Bonus)

Per card dove l'immagine deve avere margini dai bordi:
```tsx
<div className="rounded-2xl bg-white border border-[#156686]/15 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
  style={{ boxShadow: "0 2px 16px -4px rgba(21,102,134,0.10)" }}>
  <div className="p-4 pb-0">
    <img src={img} className="w-full aspect-video object-cover rounded-xl" />
  </div>
  <div className="px-6 py-6">...</div>
</div>
```
- Immagine dentro `p-4 pb-0` → margini interni con angoli arrotondati `rounded-xl`
- Hover: `-translate-y-1` + `shadow-xl`

---

## 21. Hover immagini prodotto (lezioni)

Hover leggero senza zoom:
```tsx
<div className="group overflow-hidden rounded-2xl">
  <img className="w-full h-full object-cover transition-all duration-500 group-hover:brightness-105 group-hover:scale-[1.01]" />
</div>
```
- **NO** `scale` grande (tipo 1.05) — solo `1.01` al massimo
- `brightness-105` per l'effetto luminosità leggero

---

## 22. Slider recensioni scroll-driven (due righe)

```tsx
// Row 1: si sposta a sinistra mentre si scrolla
// Row 2: si sposta a destra mentre si scrolla
// Guidato da IntersectionObserver + scroll offset

const [offset, setOffset] = useState(0);
// offset = progress * 300 dove progress = -rect.top / (rect.height + window.innerHeight)

{[row1, row2].map((row, ri) => (
  <div className="flex gap-5"
    style={{ transform: `translateX(${ri === 0 ? -offset : offset - 150}px)`, transition: "transform 0.05s linear", width: "max-content" }}>
    {row.map(src => <img className="h-80 w-auto rounded-2xl object-cover flex-shrink-0" />)}
  </div>
))}
```
- Immagini: `h-80` (320px) senza box-shadow
- Fade sui bordi: `w-32` gradient bianco a sinistra e destra
- Nessuna animazione automatica — solo scroll-driven

---

## 23. CountUp — Card box contenitore

Le statistiche countup vanno inside un riquadro card:
```tsx
<div className="rounded-2xl border border-[#156686]/15 bg-[#156686]/5 px-6 py-8"
  style={{ boxShadow: "0 2px 16px -4px rgba(21,102,134,0.08)" }}>
  <div className="flex items-stretch justify-center flex-wrap gap-y-8">
    {/* countup items con divisori */}
  </div>
</div>
```

---

## 11. CountUp — Numero animato al scroll

Componente React che anima un numero da 0 al valore target quando entra nel viewport.

### Caratteristiche
- **Trigger**: `IntersectionObserver` con `threshold: 0.5` — parte quando il 50% del elemento è visibile
- **Si avvia una sola volta** (ref `started` previene ri-avvii al re-scroll)
- **Durata**: 6400ms
- **Easing**: `1 - (1 - progress)^12` — sale velocemente all'inizio, rallenta moltissimo verso il valore finale
- **Anti-tremolio**: `display: inline-block` + `minWidth` calcolato su `${cifre + suffisso}.length ch` + `fontVariantNumeric: tabular-nums`

### Codice
```tsx
function CountUp({ target, suffix = "", duration = 6400 }: { target: number; suffix?: string; duration?: number }) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const tick = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const ease = 1 - Math.pow(1 - progress, 12);
            setValue(Math.round(ease * target));
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return (
    <span ref={ref} style={{ display: "inline-block", minWidth: `${String(target).length + suffix.length}ch`, fontVariantNumeric: "tabular-nums" }}>
      {value}{suffix}
    </span>
  );
}
```

### Uso in ChiSono (box statistiche)

I tre numeri nel box statistiche di `ChiSono.tsx` usano CountUp:
```tsx
<p className="h-display text-3xl md:text-4xl text-[#156686]"><CountUp target={50} suffix="+" /></p>
<p className="h-display text-3xl md:text-4xl text-[#156686]"><CountUp target={6} suffix="+" /></p>
<p className="h-display text-3xl md:text-4xl text-[#156686]"><CountUp target={500} suffix="k€" /></p>
```
Il componente `CountUp` è definito direttamente in `ChiSono.tsx` (non importato da altrove).

### Uso (riga stat con divisori verticali)
```tsx
<div className="flex items-stretch justify-center flex-wrap gap-y-8">
  {[
    { target: 90, suffix: "+", label: "Lezioni" },
    { target: 21, suffix: "",  label: "Template" },
    { target: 5,  suffix: "",  label: "Ore di formazione" },
    { target: 2,  suffix: "",  label: "Bonus inclusi" },
  ].map((s, i) => (
    <>
      {i > 0 && (
        <div key={`div-${i}`} className="hidden md:flex items-center flex-shrink-0 mx-10">
          <span className="w-px h-8 bg-[#156686]/30" />
        </div>
      )}
      <div key={s.label} className="text-center min-w-[100px]">
        <p className="font-bold text-[#156686]" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontVariantNumeric: "tabular-nums", minWidth: "2.5ch" }}>
          <CountUp target={s.target} suffix={s.suffix} />
        </p>
        <p className="text-sm text-foreground/65 mt-1">{s.label}</p>
      </div>
    </>
  ))}
</div>
```
- Divisori verticali `w-px h-8 bg-[#156686]/30`, visibili solo su desktop (`hidden md:flex`)
- Numeri con `clamp(2.5rem, 5vw, 4rem)` per dimensione responsive

---

## 24. Fumetti tooltip (LessonCard)

Fumetti che appaiono accanto alle card immagine, con freccia che punta alla card.

### Desktop
Appare al hover, fuori dal bordo della card. Colonna sinistra → fumetto a sinistra con freccia destra; colonna destra → fumetto a destra con freccia sinistra.

```tsx
{/* Colonna SINISTRA — fumetto a sinistra, freccia punta a destra */}
<div className="tooltip-bubble tooltip-arrow-right hidden md:flex absolute right-full top-1/2 -translate-y-1/2 mr-4 z-30 pointer-events-none items-center"
  style={{ rotate: "-3deg", transformOrigin: "right center" }}>
  <div className="text-white text-[11px] font-semibold px-4 py-3 rounded-xl w-36 leading-snug"
    style={{ backgroundColor: "rgba(12,35,48,0.97)", backdropFilter: "blur(12px)" }}>
    Testo tooltip
  </div>
  {/* Freccia → */}
  <div style={{ width: 0, height: 0, borderTop: "7px solid transparent", borderBottom: "7px solid transparent", borderLeft: "7px solid #0c2330", flexShrink: 0 }} />
</div>

{/* Colonna DESTRA — fumetto a destra, freccia punta a sinistra */}
<div className="tooltip-bubble tooltip-arrow-left hidden md:flex absolute left-full top-1/2 -translate-y-1/2 ml-4 z-30 pointer-events-none items-center"
  style={{ rotate: "3deg", transformOrigin: "left center" }}>
  {/* Freccia ← */}
  <div style={{ width: 0, height: 0, borderTop: "7px solid transparent", borderBottom: "7px solid transparent", borderRight: "7px solid #0c2330", flexShrink: 0 }} />
  <div className="text-white text-[11px] font-semibold px-4 py-3 rounded-xl w-36 leading-snug"
    style={{ backgroundColor: "rgba(12,35,48,0.97)", backdropFilter: "blur(12px)" }}>
    Testo tooltip
  </div>
</div>
```

**Animazioni desktop** (in `styles.css`):
- `.tooltip-bubble` → `opacity: 0` di default
- `.group:hover .tooltip-bubble` → `opacity: 1`
- `.tooltip-bubble.tooltip-arrow-right` → `transform-origin: right center` (pivot sulla punta della freccia)
- `.tooltip-bubble.tooltip-arrow-left` → `transform-origin: left center`
- Al hover: `tooltip-pop 0.85s ease forwards` poi `tooltip-float-arrowright/left 4-4.5s ease-in-out infinite`
- `tooltip-float-*`: pura rotazione ±3deg attorno al pivot (niente translateY)

### Mobile
Appare al tap. Si posiziona sopra o sotto la card in base alla posizione nel viewport. La card attiva prende `z-10` per evitare che le card con `opacity-40` vicine la coprano (stacking context).

```tsx
{/* Card wrapper */}
<div className={`group relative${isDimmed ? " opacity-40" : ""}${mobileOpen ? " z-10" : ""}`}>

  {/* Fumetto SOPRA */}
  <div className={`mobile-tooltip md:hidden absolute left-0 right-0 bottom-full mb-2 z-[100]${mobileOpen && !showBelow ? " is-open" : ""}`}
    style={{ transform: "rotate(-3deg)", transformOrigin: "center bottom" }}>
    <div key={animKey} className="mobile-tooltip-inner">
      <div className="text-white text-[12px] font-semibold px-4 py-3 rounded-xl leading-snug text-center"
        style={{ backgroundColor: "#0c2330", boxShadow: "0 4px 20px rgba(0,0,0,0.35)" }}>
        Testo tooltip
      </div>
      {/* Freccia ↓ */}
      <div className="flex justify-center">
        <div style={{ width: 0, height: 0, borderLeft: "7px solid transparent", borderRight: "7px solid transparent", borderTop: "7px solid #0c2330" }} />
      </div>
    </div>
  </div>

  {/* Fumetto SOTTO */}
  <div className={`mobile-tooltip md:hidden absolute left-0 right-0 top-full mt-2 z-[100]${mobileOpen && showBelow ? " is-open" : ""}`}
    style={{ transform: "rotate(-3deg)", transformOrigin: "center top" }}>
    <div key={animKey} className="mobile-tooltip-inner">
      {/* Freccia ↑ */}
      <div className="flex justify-center">
        <div style={{ width: 0, height: 0, borderLeft: "7px solid transparent", borderRight: "7px solid transparent", borderBottom: "7px solid #0c2330" }} />
      </div>
      <div className="text-white text-[12px] font-semibold px-4 py-3 rounded-xl leading-snug text-center"
        style={{ backgroundColor: "#0c2330", boxShadow: "0 4px 20px rgba(0,0,0,0.35)" }}>
        Testo tooltip
      </div>
    </div>
  </div>
</div>
```

**Logica posizionamento mobile:**
```tsx
const [showBelow, setShowBelow] = useState(pos !== "bottom-right");
const [animKey, setAnimKey]     = useState(0);

const handleClick = () => {
  if (!mobileOpen) {
    if (pos === "bottom-right") setShowBelow(false); // sempre sopra
    else if (cardRef.current)
      setShowBelow(cardRef.current.getBoundingClientRect().top < window.innerHeight / 2);
    setAnimKey(k => k + 1); // forza remount per riavviare animazione
  }
  onToggle();
};
```

**CSS mobile** (in `styles.css`):
```css
.mobile-tooltip { visibility: hidden; pointer-events: none; }
.mobile-tooltip.is-open { visibility: visible; }
.mobile-tooltip.is-open .mobile-tooltip-inner { animation: tooltip-pop 0.85s ease forwards; }
```
Usare `visibility` (non `opacity`) per evitare trasparenza parziale durante l'animazione pop.

---

## 25. Slider recensioni — scroll-driven desktop + auto-scroll JS mobile

Lo slider usa **sempre JS** per animare le righe — sia su desktop (scroll-driven) che su mobile (auto-scroll con `requestAnimationFrame`). **Non usare mai CSS animation (`marquee-left`/`marquee-right`) per questo componente**: su Safari mobile, la CSS `transform` animation su figli di un contenitore con `overflow` causa rendering invisibile delle immagini, un bug difficile da debuggare.

### Componente completo

```tsx
function ScrollReviews() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);
  const [isMobile, setIsMobile] = useState(() => typeof window !== "undefined" && window.innerWidth < 768);
  const mobileOffset = useRef(0);
  const rafRef = useRef<number>();

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    if (isMobile) {
      // mobile: auto-scroll lento con rAF (0.5px per frame ≈ 30px/s a 60fps)
      const tick = () => {
        mobileOffset.current += 0.5;
        setOffset(mobileOffset.current);
        rafRef.current = requestAnimationFrame(tick);
      };
      rafRef.current = requestAnimationFrame(tick);
      return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
    } else {
      // desktop: scroll-driven
      const handler = () => {
        if (!sectionRef.current) return;
        const rect = sectionRef.current.getBoundingClientRect();
        const progress = -rect.top / (rect.height + window.innerHeight);
        setOffset(progress * 300);
      };
      window.addEventListener("scroll", handler, { passive: true });
      handler();
      return () => window.removeEventListener("scroll", handler);
    }
  }, [isMobile]);

  const row1 = [...REC_IMGS, ...REC_IMGS];
  const row2 = [...REC_IMGS].reverse().concat([...REC_IMGS].reverse());

  return (
    <div ref={sectionRef} className="relative space-y-5">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32" style={{ background: "linear-gradient(to right, white, transparent)", zIndex: 2 }} />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32" style={{ background: "linear-gradient(to left, white, transparent)", zIndex: 2 }} />
      {[row1, row2].map((row, ri) => (
        <div key={ri}
          className="flex gap-5"
          style={{ transform: `translateX(${ri === 0 ? -offset : offset - 150}px)`, transition: isMobile ? "none" : "transform 0.05s linear", width: "max-content" }}>
          {row.map((src, i) => (
            <img key={i} src={src} className="h-80 w-auto rounded-2xl object-cover flex-shrink-0" />
          ))}
        </div>
      ))}
    </div>
  );
}
```

### Wrapper nella section

```tsx
<div className="relative z-10" style={{ clipPath: "inset(0)" }}>
  <ScrollReviews />
</div>
```

`clipPath: "inset(0)"` taglia l'overflow orizzontale delle righe senza creare uno scroll container (che romperebbe `position: sticky/fixed`) e senza tagliare l'asse verticale (che nasconderebbe la seconda riga).

### Regole

- **Mai CSS animation su mobile** per questo componente - causa invisibilità immagini su Safari
- **Mai `overflow: hidden`** sul wrapper diretto delle righe - taglia la seconda riga verticalmente
- Il doppio array (`[...REC_IMGS, ...REC_IMGS]`) garantisce che le righe siano abbastanza larghe da scorrere senza fine apparente
- `transition: "none"` su mobile evita lag percepibile nel rAF loop
- `mobileOffset` e `rafRef` sono `useRef` (non state) per evitare re-render ad ogni frame

---

## 26. Phone mockup — scaling mobile senza spazio bianco

`transform: scale()` preserva lo spazio layout originale. Per ridurre il mockup su mobile senza lasciare spazio bianco, si usa `margin-bottom` negativo.

```css
@media (max-width: 767px) {
  .phone-mockup-mobile {
    transform: scale(0.6);
    transform-origin: top center;
    margin-bottom: -195px; /* compensa lo spazio layout residuo */
  }
}
```

Il valore `-195px` dipende dall'altezza originale del mockup (≈488px): `488 * (1 - 0.6) / 2 ≈ 195px`. Ricalcolare se cambia l'altezza del mockup.

**Struttura JSX:**
```tsx
<div className="phone-mockup-mobile"> {/* classe CSS con scale mobile */}
  <div className="relative w-[280px]"
    style={{ transform: "rotate(-6deg)", transformOrigin: "center bottom", animation: "phone-float 5s ease-in-out infinite" }}>
    {/* contenuto mockup */}
  </div>
</div>
```

---

## 27. ModuleGrid — card con tap-toggle su mobile

Le card mostrano un effetto lift al click su mobile (stesso del hover desktop), senza ingrandimento immagine interno.

```tsx
function ModuleGrid() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
      {MODULE_CARDS.map(({ title, img }, i) => {
        const isActive = activeIndex === i;
        return (
          <div key={title}
            className={`rounded-xl overflow-hidden border border-[#156686]/10 bg-white group transition-transform duration-300 md:hover:-translate-y-1.5${isActive ? " -translate-y-1.5" : ""}`}
            style={{ boxShadow: "0 2px 12px -2px rgba(21,102,134,0.08)", touchAction: "manipulation" }}
            onClick={() => setActiveIndex(prev => prev === i ? null : i)}>
            <img src={img} alt={title} className="w-full aspect-video object-cover transition-transform duration-500 md:group-hover:scale-[1.03]" />
            <div className="px-4 py-3">
              <p className="text-sm font-semibold text-foreground/85">{title}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
```

**Regole:**
- `touchAction: "manipulation"` rimuove il delay di 300ms al tap su mobile
- Hover scale immagine (`md:group-hover:scale-[1.03]`) solo su desktop — niente zoom su mobile
- Lift (`-translate-y-1.5`) attivo sia su `md:hover` (desktop) che su `.isActive` (mobile tap)
- Click ri-clicca per deselezionare (toggle: `prev === i ? null : i`)

---

## 28. Box garanzia

Sotto il card pricing, blocco garanzia su sfondo scuro con immagine + titolo in riga e testo full-width sotto.

```tsx
<div className="mt-10 bg-white/5 border border-white/20 rounded-2xl px-8 py-7">
  {/* Riga: immagine + titolo */}
  <div className="flex items-center gap-6 mb-3">
    <img src={imgGaranzia} alt="Garanzia" className="w-16 h-16 flex-shrink-0 rounded-xl object-cover" />
    <p className="font-semibold text-white">Voglio che il tuo acquisto sia consapevole.</p>
  </div>
  {/* Testo full-width sotto */}
  <p className="text-sm text-white/65 leading-relaxed">
    Puoi sempre richiedere il rimborso entro <strong className="text-white/85">14 giorni</strong> dall'acquisto...
  </p>
</div>
```

**Regole:**
- Immagine: `w-16 h-16` (64px), `rounded-xl`, `flex-shrink-0`
- Titolo inline con immagine, testo corpo sotto a piena larghezza (non dentro il flex)
- Sfondo: `bg-white/5` + `border border-white/20` — semi-trasparente su `bg-foreground`
- Testo enfatizzato (es. "14 giorni"): `text-white/85` dentro `<strong>`
- Funziona uguale su mobile e desktop — nessuna variante responsive necessaria

---

## 29. Hero above-the-fold — padding verticale

Tutte le hero section usano padding asimmetrico: meno sopra (vicino alla nav), più sotto.

```tsx
<section className="pt-10 pb-20 md:pt-14 md:pb-28 relative overflow-hidden">
```

- Mobile: `pt-10` (2.5rem) sopra, `pb-20` (5rem) sotto
- Desktop: `pt-14` (3.5rem) sopra, `pb-28` (7rem) sotto
- Applicato a: `consulenza-strategica`, `easy-mail-pack`, `scarica-calendario-lancio`

---

## 30. Slider recensioni mobile — loop lungo

Per evitare che il loop si percepisca troppo presto, ogni slider usa **4 copie** dell'array immagini e resetta ogni `2*hw` pixel (il doppio del set unico).

**Row1 (sinistra):**
```tsx
const row1 = isMobile
  ? [...REC_IMGS, ...REC_IMGS, ...REC_IMGS, ...REC_IMGS]
  : [...REC_IMGS, ...REC_IMGS];

// offset resetta a 2*hw
if (hw > 0 && mobileOffset.current >= hw * 2) mobileOffset.current -= hw * 2;

// transform
`translateX(${-(offset % (hw * 2))}px)`
```

**Row2 (destra, parte da immagine specifica):**
```tsx
// Ruota l'array invertito per far partire dall'immagine desiderata
const reversed = [...REC_IMGS].reverse();
const row2Base = isMobile ? [...reversed.slice(N), ...reversed.slice(0, N)] : reversed;
const row2 = isMobile
  ? [...row2Base, ...row2Base, ...row2Base, ...row2Base]
  : [...row2Base, ...row2Base];

// offset2 separato, resetta a 2*hw
if (hw > 0 && mobileOffset2.current >= hw * 2) mobileOffset2.current -= hw * 2;

// transform: parte da -2*hw e scorre a destra
`translateX(${(offset2 % (hw * 2)) - hw * 2}px)`
```

**Dove N = indice di rotazione**: per consulenza-strategica N=4 (recG9 = Barbara Menescardi prima).

**halfWidth** si misura dal `rowRef` (row1): `scrollWidth / 4` se row1 ha 4 copie su mobile.

---

## 31. Consulenza Strategica — navigazione

La pagina `/consulenza-strategica` è collegata in:
- **Nav desktop**: dropdown "I miei percorsi" > Consulenza Strategica (link diretto)
- **Nav mobile**: menu hamburger, stessa voce
- **Footer**: colonna "Percorsi", link diretto
- **Homepage Percorsi**: box CTA con `ctaHref: "/consulenza-strategica"`
- **Banner guida**: sezione `#guida` in fondo alla pagina con CTA a `/scarica-calendario-lancio`
- **Hero CTA secondario**: link testo "Scarica la guida gratuita →" sotto il pulsante principale

**Regola per i percorsi nel Nav/Footer:** se un percorso ha un campo `href`, il link va direttamente a quella URL (tag `<a>`). Altrimenti usa il sistema `goToPercorso` (scroll + filtro homepage).
