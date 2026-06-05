import { useEffect, useRef, useState } from "react";
import guidaImg1 from "@/assets/Img guida ai lanci.png";
import guidaImg2 from "@/assets/Img guida ai lanci 2.png";
import guidaImg3 from "@/assets/Img guida ai lanci 3.png";

const ML_FORM_HTML = `
<iframe name="ml-submit-hidden" id="ml-submit-hidden" style="display:none"></iframe>
<div id="mlb2-41923213" class="ml-form-embedContainer ml-subscribe-form ml-subscribe-form-41923213">
  <div class="ml-form-align-center">
    <div class="ml-form-embedWrapper embedForm">
      <div class="ml-form-embedBody ml-form-embedBodyDefault row-form">
        <div class="ml-form-embedContent"><h4></h4></div>
        <form class="ml-block-form" action="https://assets.mailerlite.com/jsonp/17207/forms/188785133042534099/subscribe" data-code="" method="post" target="ml-submit-hidden">
          <div class="ml-form-formContent">
            <div class="ml-form-fieldRow">
              <div class="ml-field-group ml-field-name ml-validate-required">
                <input aria-label="name" aria-required="true" type="text" class="form-control" data-inputmask="" name="fields[name]" placeholder="Il tuo Nome" autocomplete="given-name">
              </div>
            </div>
            <div class="ml-form-fieldRow ml-last-item">
              <div class="ml-field-group ml-field-email ml-validate-email ml-validate-required">
                <input aria-label="email" aria-required="true" type="email" class="form-control" data-inputmask="" name="fields[email]" placeholder="La tua Email" autocomplete="email">
              </div>
            </div>
          </div>
          <div class="ml-form-embedPermissions">
            <div class="ml-form-embedPermissionsContent default privacy-policy">
              <p>Iscrivendoti accetti la <a href="https://www.iubenda.com/privacy-policy/31182601" target="_blank">Privacy Policy</a> del sito. Puoi disiscriverti quando vuoi, dal link che trovi alla fine di ogni email.</p>
            </div>
          </div>
          <input type="hidden" name="ml-submit" value="1">
          <div class="ml-form-embedSubmit">
            <button type="submit" class="primary">Voglio iscrivermi alla newsletter!</button>
            <button disabled="disabled" style="display:none" type="button" class="loading">
              <div class="ml-form-embedSubmitLoad"></div>
              <span class="sr-only">Loading...</span>
            </button>
            <a href="#" id="nl-preview-link" class="nl-preview-link">Guarda un esempio di newsletter →</a>
          </div>
          <input type="hidden" name="anticsrf" value="true">
        </form>
      </div>
      <div class="ml-form-successBody row-success" style="display:none">
        <div class="ml-form-successContent">
          <h4>Iscrizione confermata!</h4>
          <p>Controlla la tua inbox: dovresti aver ricevuto un'email da parte mia con la conferma dell'iscrizione e il link per accedere immediatamente alla Guida Gratuita ai Lanci!</p>
        </div>
      </div>
    </div>
  </div>
</div>
`;

const PREVIEW_URL = "https://preview.mailerlite.io/emails/webview/17207/188806471623902309";

function NewsletterPreviewModal({ onClose }: { onClose: () => void }) {
  const [open, setOpen] = useState(false);
  useEffect(() => { requestAnimationFrame(() => setOpen(true)); }, []);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);
  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 backdrop-blur-sm" style={{ backgroundColor: open ? "rgba(12,35,48,0.85)" : "rgba(12,35,48,0)", transition: "background-color 0.3s" }} />
      <div className="relative z-10 w-full max-w-2xl rounded-2xl overflow-hidden flex flex-col"
        style={{
          clipPath: open ? "inset(0% 0% 0% 0% round 1rem)" : "inset(50% 0% 50% 0% round 1rem)",
          border: "1.5px solid rgba(196,217,220,0.25)",
          boxShadow: "0 0 60px -10px rgba(21,102,134,0.6)",
          transition: "clip-path 0.3s",
          maxHeight: "85vh",
        }}
        onClick={e => e.stopPropagation()}>
        {/* Top bar */}
        <div className="flex items-center justify-between px-4 py-3 flex-shrink-0"
          style={{ backgroundColor: "#EEF3F5", borderBottom: "1px solid rgba(21,102,134,0.12)" }}>
          <div>
            <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-[#156686]/60">Anteprima newsletter</p>
            <p className="text-[13px] font-semibold text-[#0c2330]/85">Questa è una delle newsletter che ho inviato</p>
          </div>
          <button onClick={onClose} className="w-7 h-7 rounded-full hover:bg-[#156686]/10 flex items-center justify-center text-[#156686]/60 cursor-pointer">✕</button>
        </div>
        {/* Scrollable iframe */}
        <iframe
          src={PREVIEW_URL}
          className="w-full flex-1"
          style={{ minHeight: "60vh", border: "none", backgroundColor: "#fff" }}
          title="Anteprima newsletter"
        />
      </div>
    </div>
  );
}

export function Newsletter() {
  const [showTooltip, setShowTooltip] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const hideTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [fanned, setFanned] = useState(false);

  // Dismiss tooltip on any click outside the form
  useEffect(() => {
    if (!showTooltip) return;
    const dismiss = (e: MouseEvent) => {
      const form = document.getElementById("mlb2-41923213");
      if (!form?.contains(e.target as Node)) {
        setShowTooltip(false);
        if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
      }
    };
    document.addEventListener("mousedown", dismiss);
    return () => document.removeEventListener("mousedown", dismiss);
  }, [showTooltip]);

  // Preview link click handler (injected inside MailerLite HTML)
  useEffect(() => {
    const link = document.getElementById("nl-preview-link");
    if (!link) return;
    const handler = (e: Event) => { e.preventDefault(); setShowPreview(true); };
    link.addEventListener("click", handler);
    return () => link.removeEventListener("click", handler);
  }, []);

  useEffect(() => {
    // Success callback invoked by MailerLite after successful submission
    (window as any).ml_webform_success_41923213 = function () {
      const success = document.querySelector(".ml-subscribe-form-41923213 .row-success") as HTMLElement | null;
      const formRow = document.querySelector(".ml-subscribe-form-41923213 .row-form") as HTMLElement | null;
      if (success) success.style.display = "block";
      if (formRow) formRow.style.display = "none";
      const eventId = (window as any).__ml_lead_event_id;
      (window as any).fbq?.("track", "Lead", {}, { eventID: eventId });
      fetch("/api/meta-capi", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ event_name: "Lead", event_id: eventId }),
      }).catch(() => {});
    };

    // Load MailerLite script (handles actual AJAX submission)
    if (!document.getElementById("ml-webforms-script")) {
      const script = document.createElement("script");
      script.id = "ml-webforms-script";
      script.src = "https://groot.mailerlite.com/js/w/webforms.min.js?vb397d78ebaa8a0f631d35384c46d781b";
      script.type = "text/javascript";
      document.body.appendChild(script);
    }

    // Attach validation in capture phase so it runs before MailerLite's own handler
    const handleSubmit = (e: Event) => {
      const nameInput  = document.querySelector('#mlb2-41923213 input[name="fields[name]"]')  as HTMLInputElement | null;
      const emailInput = document.querySelector('#mlb2-41923213 input[name="fields[email]"]') as HTMLInputElement | null;

      const nameEmpty  = !nameInput?.value?.trim();
      const emailEmpty = !emailInput?.value?.trim();

      if (nameEmpty || emailEmpty) {
        e.preventDefault();
        e.stopImmediatePropagation();

        if (nameEmpty && nameInput) {
          nameInput.classList.add("field-error");
          nameInput.addEventListener("input", () => nameInput.classList.remove("field-error"), { once: true });
        }
        if (emailEmpty && emailInput) {
          emailInput.classList.add("field-error");
          emailInput.addEventListener("input", () => emailInput.classList.remove("field-error"), { once: true });
        }

        if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
        setShowTooltip(false);
        requestAnimationFrame(() => {
          setShowTooltip(true);
          hideTimerRef.current = setTimeout(() => setShowTooltip(false), 3000);
        });
      } else {
        // Generate a shared event_id for Pixel + CAPI deduplication
        const eventId = crypto.randomUUID();
        (window as any).__ml_lead_event_id = eventId;
        // Validation passed — show success after MailerLite's AJAX round-trip
        setTimeout(() => {
          const success = document.querySelector(".ml-subscribe-form-41923213 .row-success") as HTMLElement | null;
          const formRow = document.querySelector(".ml-subscribe-form-41923213 .row-form")    as HTMLElement | null;
          if (success) success.style.display = "block";
          if (formRow) formRow.style.display  = "none";
          const nameInput  = document.querySelector('#mlb2-41923213 input[name="fields[name]"]')  as HTMLInputElement | null;
          const emailInput = document.querySelector('#mlb2-41923213 input[name="fields[email]"]') as HTMLInputElement | null;
          (window as any).fbq?.("track", "Lead", {}, { eventID: eventId });
          fetch("/api/meta-capi", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              event_name: "Lead",
              event_id: eventId,
              email: emailInput?.value ?? "",
              name: nameInput?.value ?? "",
            }),
          }).catch(() => {});
        }, 1800);
      }
    };

    // Wait for MailerLite to render the form, then attach on the document in capture phase
    const timer = setTimeout(() => {
      document.addEventListener("submit", handleSubmit, true);
    }, 800);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("submit", handleSubmit, true);
    };
  }, []);

  return (
    <>
    {showPreview && <NewsletterPreviewModal onClose={() => setShowPreview(false)} />}
    <section id="newsletter" className="py-20 md:py-28 px-4 md:px-8 lg:px-12">
      <div className="bg-primary text-primary-foreground rounded-3xl md:rounded-[2rem] overflow-hidden relative max-w-[1600px] mx-auto" data-cursor-light>
          <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-secondary/20 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full bg-secondary/15 blur-3xl pointer-events-none" />

          <div className="grid md:grid-cols-12 gap-0 items-center relative">
            {/* Stacked guide images */}
            <div className="md:col-span-5 pt-16 px-8 pb-8 sm:p-10 md:p-12 lg:p-14 flex items-center justify-center">
              <div
                className={`guide-stack w-full md:max-w-[350px]${fanned ? " is-fanned" : ""}`}
                style={{ height: "425px" }}
                onClick={() => setFanned(v => !v)}
              >
                <div className="guide-wrapper guide-wrapper-1">
                  <img src={guidaImg3} alt="Guida Gratuita ai Lanci pagina 3" loading="lazy" className="guide-img" />
                </div>
                <div className="guide-wrapper guide-wrapper-2">
                  <img src={guidaImg2} alt="Guida Gratuita ai Lanci pagina 2" loading="lazy" className="guide-img" />
                </div>
                <div className="guide-wrapper guide-wrapper-3">
                  <img src={guidaImg1} alt="Guida Gratuita ai Lanci" loading="lazy" className="guide-img" />
                </div>
                {/* Social proof badge — overlaid at bottom */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2 px-3.5 py-2 rounded-full whitespace-nowrap"
                  style={{ background: "rgba(12,35,48,0.72)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.15)" }}>
                  <span className="relative flex-shrink-0 w-2 h-2">
                    <span className="absolute inset-0 rounded-full bg-green-400 blur-[3px] opacity-80" />
                    <span className="relative block w-2 h-2 rounded-full bg-green-400" />
                  </span>
                  <span className="text-xs font-semibold text-white/90 tracking-wide">
                    +1.200 iscritti · Guida Gratuita ai Lanci
                  </span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="md:col-span-7 p-8 sm:p-10 md:p-14 lg:p-16">
              <p className="eyebrow mb-5 text-primary-foreground/70">Guida Gratuita ai Lanci</p>
              <h2 className="h-display text-4xl md:text-5xl lg:text-6xl">
                Iscriviti alla mia newsletter e scarica la{" "}
                <em className="text-[#C4D9DC]">Guida Gratuita ai Lanci</em>
              </h2>
              <p className="mt-6 text-sm md:text-base text-primary-foreground/85 leading-relaxed max-w-xl">
                Ho una newsletter che invio ogni venerdì alle 15, la{" "}
                <strong className="text-primary-foreground">Fun-Letter</strong>, con strategie,
                tattiche e consigli legati ai lanci, ai funnel e al dietro le quinte del mio
                business. È letta da oltre 1.200 persone.
              </p>
              <p className="mt-4 text-sm md:text-base text-primary-foreground/85 leading-relaxed max-w-xl">
                Come regalo per l'iscrizione ricevi subito la{" "}
                <strong className="text-primary-foreground">Guida Gratuita ai Lanci</strong>, una
                guida pratica di oltre 30 pagine per capire come funzionano le fasi di un lancio e
                come strutturare il tuo, che sia il primo o il prossimo.
              </p>

              <ul className="mt-8 space-y-3 max-w-lg">
                {[
                  "Le 4 fasi di un lancio che converte",
                  "Errori comuni da evitare al primo lancio",
                  "Strumenti gratuiti consigliati per il tuo lancio",
                ].map((b) => (
                  <li key={b} className="flex items-start gap-3 text-sm md:text-base text-primary-foreground/90">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>

              {/* Form + tooltip */}
              <div className="mt-10 max-w-xl relative">
                <div dangerouslySetInnerHTML={{ __html: ML_FORM_HTML }} />

                  {showTooltip && (
                  <div className="absolute left-0 pointer-events-none z-20"
                    style={{ bottom: "calc(100% - 3.5rem)" }}>
                    <div className="relative bg-white text-foreground text-sm font-medium px-4 py-3 rounded-2xl shadow-lg border border-border">
                      Inserisci il tuo nome e la tua email per iscriverti!
                      {/* tail pointing down */}
                      <span
                        className="absolute left-8 -bottom-2 w-0 h-0 block"
                        style={{
                          borderLeft: "8px solid transparent",
                          borderRight: "8px solid transparent",
                          borderTop: "8px solid white",
                          filter: "drop-shadow(0 1px 0 oklch(0.9 0.005 230))",
                        }}
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
    </section>
    </>
  );
}
