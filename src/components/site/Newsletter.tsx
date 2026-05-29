import { useEffect } from "react";
import guidaMockup from "@/assets/guida-mockup.jpg";

const ML_FORM_HTML = `
<div id="mlb2-41923213" class="ml-form-embedContainer ml-subscribe-form ml-subscribe-form-41923213">
  <div class="ml-form-align-center">
    <div class="ml-form-embedWrapper embedForm">
      <div class="ml-form-embedBody ml-form-embedBodyDefault row-form">
        <div class="ml-form-embedContent"><h4></h4></div>
        <form class="ml-block-form" action="https://assets.mailerlite.com/jsonp/17207/forms/188785133042534099/subscribe" data-code="" method="post" target="_blank">
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

export function Newsletter() {
  useEffect(() => {
    (window as any).ml_webform_success_41923213 = function () {
      const success = document.querySelector(".ml-subscribe-form-41923213 .row-success") as HTMLElement | null;
      const form = document.querySelector(".ml-subscribe-form-41923213 .row-form") as HTMLElement | null;
      if (success) success.style.display = "block";
      if (form) form.style.display = "none";
    };

    if (!document.getElementById("ml-webforms-script")) {
      const script = document.createElement("script");
      script.id = "ml-webforms-script";
      script.src = "https://groot.mailerlite.com/js/w/webforms.min.js?vb397d78ebaa8a0f631d35384c46d781b";
      script.type = "text/javascript";
      document.body.appendChild(script);
      fetch("https://assets.mailerlite.com/jsonp/17207/forms/188785133042534099/takel").catch(() => {});
    }
  }, []);

  return (
    <section id="newsletter" className="py-20 md:py-28">
      <div className="container-narrow">
        <div className="bg-primary text-primary-foreground rounded-3xl md:rounded-[2rem] overflow-hidden relative">
          <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-secondary/20 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full bg-secondary/15 blur-3xl pointer-events-none" />

          <div className="grid md:grid-cols-12 gap-0 items-center relative">
            {/* Mockup */}
            <div className="md:col-span-5 p-8 sm:p-10 md:p-12 lg:p-14 flex items-center justify-center">
              <div className="relative w-full max-w-md">
                <div className="absolute inset-0 bg-secondary/30 blur-3xl rounded-full" />
                <img
                  src={guidaMockup}
                  alt="Mockup della Guida Gratuita ai Lanci"
                  loading="lazy"
                  width={1024}
                  height={1280}
                  className="relative w-full h-auto drop-shadow-2xl rounded-2xl rotate-[-4deg] hover:rotate-0 transition-transform duration-500"
                />
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

              <div
                className="mt-10 max-w-xl"
                dangerouslySetInnerHTML={{ __html: ML_FORM_HTML }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
