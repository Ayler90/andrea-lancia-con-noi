# Sistema di Design — Andrea Bonomo

> Documento di riferimento per qualsiasi nuova pagina o componente.
> Ogni scelta qui descritta è lo standard consolidato — non deviare senza motivo esplicito.

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
Uso tipico: `<p className="eyebrow text-[#156686]/70 mb-4">Label sezione</p>`

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
| `.container-narrow` | `1200px` | `px-6` mobile, `px-10` desktop |
| Pagine landing | `max-w-6xl mx-auto` | — |
| Sezione pricing/FAQ | `max-w-4xl mx-auto` | — |

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
    <div className="text-3xl" style={{ animation: "thought-float 3s ease-in-out infinite" }}>
      🚀
    </div>
    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-10 h-4 blur-lg rounded-full pointer-events-none"
      style={{ backgroundColor: "rgba(21,102,134,0.35)" }} />
  </div>
  <h3 className="font-semibold text-[#0c2330] text-base md:text-lg mb-5 leading-snug">Titolo</h3>
  <ul className="space-y-3">
    {items.map(t => (
      <li key={t} className="flex items-start gap-3 text-sm text-foreground/70 leading-relaxed">
        {/* checkbox arrotondato con spunta */}
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="flex-shrink-0 mt-0.5">
          <rect x="0.5" y="0.5" width="17" height="17" rx="5" fill="#156686" fillOpacity="0.1" stroke="#156686" strokeOpacity="0.3"/>
          <path d="M5 9.5l2.5 2.5 5-5" stroke="#156686" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        {t}
      </li>
    ))}
  </ul>
</div>
```
**Regole:**
- Emoji sempre `text-3xl` con `thought-float 3s ease-in-out infinite`
- Glow: `w-10 h-4 blur-lg`, colore `rgba(21,102,134,0.35)` per teal; `rgba(220,50,50,0.4)` per rosso
- Checkbox: `rx="5"` (angoli arrotondati), fill teal a 10%, stroke teal a 30%, spunta teal `#156686`

### Card pricing (sfondo bianco con sezione scura intorno)
```tsx
<div className="bg-white rounded-xl overflow-hidden" data-cursor-dark>
```
La sezione che la contiene ha `bg-foreground` con `data-cursor-light`.

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
