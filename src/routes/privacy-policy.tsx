import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/privacy-policy")({
  component: PrivacyPolicy,
  head: () => ({
    meta: [
      { title: "Privacy Policy | Andrea Bonomo" },
      { name: "description", content: "Informativa sul trattamento dei dati personali raccolti attraverso il sito andreabonomo.it, ai sensi del GDPR." },
    ],
  }),
});

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="font-bold text-xl md:text-2xl text-foreground mb-4">{title}</h2>
      <div className="space-y-4 text-foreground/80 leading-relaxed text-sm md:text-base">{children}</div>
    </section>
  );
}

function SubSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-6">
      <h3 className="font-bold text-base md:text-lg text-foreground mb-3">{title}</h3>
      <div className="space-y-3 text-foreground/80 leading-relaxed text-sm md:text-base">{children}</div>
    </div>
  );
}

function Ul({ items }: { items: string[] }) {
  return (
    <ul className="list-disc list-outside pl-5 space-y-1.5">
      {items.map((item, i) => <li key={i}>{item}</li>)}
    </ul>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return <span className="font-semibold text-foreground">{children}</span>;
}

import React from "react";

function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-background">
      <Nav />
      <section className="py-20 md:py-28 px-4">
        <div className="container-narrow max-w-3xl">
          <p className="eyebrow text-[#156686]/70 mb-4">Informativa</p>
          <h1 className="h-display font-bold text-3xl md:text-4xl lg:text-5xl mb-6">
            Privacy <em className="text-[#156686]">Policy</em>
          </h1>
          <p className="text-foreground/55 text-sm mb-14">Ultima modifica: 27 settembre 2026</p>

          <div className="prose-like">

            <p className="text-foreground/80 leading-relaxed text-sm md:text-base mb-10">
              Questa Privacy Policy è resa ai sensi dell'art. 13 del Regolamento (UE) 2016/679 ("GDPR") e si applica esclusivamente al trattamento dei Dati Personali raccolti attraverso il sito web www.andreabonomo.it. La presente informativa descrive le modalità di raccolta, utilizzo, conservazione e protezione dei Dati Personali degli utenti che accedono e utilizzano il Sito, nonché i diritti riconosciuti agli Interessati dalla normativa applicabile in materia di protezione dei dati personali. La Privacy Policy potrà essere soggetta ad aggiornamenti, modifiche o integrazioni, anche in conseguenza di modifiche normative o dell'evoluzione dei servizi offerti tramite il Sito. Ogni aggiornamento sarà pubblicato tempestivamente su questa pagina e diventerà efficace dalla data di pubblicazione. La presente Privacy Policy deve essere letta congiuntamente alla Cookie Policy e agli eventuali ulteriori documenti informativi richiamati o resi disponibili durante la navigazione o l'utilizzo dei servizi.
            </p>

            <Section title="Titolare del Trattamento">
              <p>
                Il Titolare del Trattamento dei Dati Personali raccolti attraverso il sito web www.andreabonomo.it è Andrea Bonomo, con sede in Via Caduti del Lavoro 10, 37031 Illasi (VR), P.IVA 04815800232, indirizzo e-mail: bonomoandrea90@gmail.com. Il Titolare determina le finalità e i mezzi del trattamento dei Dati Personali nel rispetto della normativa vigente in materia di protezione dei dati personali, adottando misure tecniche e organizzative adeguate a garantire la sicurezza, la riservatezza e l'integrità dei Dati trattati. Per qualsiasi informazione relativa al trattamento dei Dati Personali o per l'esercizio dei diritti previsti dagli artt. 15 e ss. del GDPR, l'Interessato può contattare il Titolare ai recapiti sopra indicati.
              </p>
            </Section>

            <Section title="Dati raccolti">
              <SubSection title="Dati di navigazione e dati tecnici">
                <p>
                  I sistemi informatici e le procedure software preposte al funzionamento del Sito acquisiscono, nel corso del loro normale esercizio, alcuni Dati Personali la cui trasmissione è implicita nell'uso dei protocolli di comunicazione di Internet. Rientrano in questa categoria, a titolo esemplificativo:
                </p>
                <Ul items={["indirizzi IP;", "tipo di browser utilizzato;", "sistema operativo;", "nome di dominio e indirizzi dei siti web dai quali è stato effettuato l'accesso o l'uscita;", "informazioni relative al comportamento di navigazione;", "dati raccolti tramite cookie e tecnologie assimilabili."]} />
                <p>Tali informazioni non sono raccolte per essere associate a Interessati identificati, ma potrebbero, attraverso elaborazioni ed associazioni con dati detenuti da terzi, permettere l'identificazione degli utenti.</p>
              </SubSection>

              <SubSection title="Dati conferiti volontariamente dall'Utente">
                <p>L'invio facoltativo, esplicito e volontario di comunicazioni tramite form di contatto, richiesta di informazioni, iscrizione a newsletter, prenotazione di una call o comunicazioni via e-mail comporta la successiva acquisizione dei Dati Personali necessari per rispondere alle richieste dell'Interessato e per l'erogazione dei servizi richiesti. Tra questi possono rientrare:</p>
                <Ul items={["nome e cognome;", "indirizzo e-mail;", "numero di telefono;", "azienda o attività professionale;", "dati fiscali e di fatturazione;", "ogni ulteriore informazione volontariamente trasmessa dall'Interessato."]} />
              </SubSection>

              <SubSection title="Dati trattati per finalità contrattuali e commerciali">
                <p>Nel caso di acquisto di servizi, consulenze o percorsi offerti tramite il Sito, il Titolare potrà trattare i Dati necessari alla gestione del rapporto contrattuale, amministrativo, fiscale e contabile.</p>
              </SubSection>

              <SubSection title="Dati trattati per finalità di marketing">
                <p>Previo consenso dell'Interessato, potranno essere trattati dati quali nome, cognome ed e-mail per l'invio di newsletter, comunicazioni promozionali e aggiornamenti commerciali.</p>
              </SubSection>

              <p>Il conferimento dei Dati può essere obbligatorio o facoltativo a seconda della finalità perseguita; l'eventuale rifiuto di conferire i Dati necessari potrebbe comportare l'impossibilità di fornire il servizio richiesto, instaurare il rapporto contrattuale o dare seguito alle richieste dell'Interessato.</p>
            </Section>

            <Section title="Modalità di Trattamento dei Dati Personali">
              <p>Il trattamento dei Dati Personali avviene nel rispetto dei principi di liceità, correttezza, trasparenza, minimizzazione, esattezza, integrità, riservatezza e limitazione della conservazione previsti dal GDPR. I Dati Personali sono trattati mediante strumenti informatici e telematici, con modalità strettamente correlate alle finalità per le quali sono stati raccolti e comunque tali da garantire un adeguato livello di sicurezza e riservatezza. Il Titolare adotta misure tecniche e organizzative adeguate a prevenire accessi non autorizzati, divulgazione, modifica, perdita o distruzione illecita dei Dati Personali. L'accesso ai Dati potrà essere consentito esclusivamente a soggetti autorizzati dal Titolare, nonché a soggetti terzi nominati, ove necessario, Responsabili del Trattamento ai sensi dell'art. 28 del GDPR. Il trattamento potrà inoltre essere effettuato mediante l'utilizzo di piattaforme digitali, servizi cloud, strumenti software e infrastrutture tecnologiche forniti anche da soggetti terzi, selezionati nel rispetto dei requisiti di affidabilità, sicurezza e conformità alla normativa vigente. Qualora tali strumenti integrino funzionalità basate su sistemi di intelligenza artificiale, il loro utilizzo avverrà nel rispetto del Regolamento (UE) 2024/1689 ("AI Act") e della normativa europea applicabile, garantendo che tali tecnologie operino come strumenti di supporto e non determinino processi decisionali interamente automatizzati idonei a produrre effetti giuridici o incidere significativamente sugli Interessati ai sensi dell'art. 22 del GDPR.</p>
            </Section>

            <Section title="Finalità del Trattamento dei Dati raccolti e Base giuridica">
              <p>I Dati Personali possono essere raccolti in modo autonomo dal Titolare o tramite terze parti. I Dati che l'Interessato sceglie di fornire spontaneamente saranno trattati nel rispetto delle condizioni di liceità ex art. 6 GDPR, per consentire al Sito di fornire i propri servizi e per le seguenti finalità:</p>

              <SubSection title="1) Rispondere alle richieste e fornire informazioni">
                <p>I Dati saranno trattati al fine di rispondere alle richieste rivolte al Titolare tramite messaggi di posta elettronica o altri strumenti di comunicazione.</p>
                <p><Label>Base giuridica:</Label> trattamento facoltativo, basato sul consenso dell'Interessato; il conferimento dei Dati è necessario per il perseguimento della finalità indicata.</p>
                <p><Label>Periodo di conservazione:</Label> sino a revoca del consenso da parte dell'Interessato.</p>
              </SubSection>

              <SubSection title="2) Informazioni e adempimenti precontrattuali">
                <p>I dati saranno trattati per ricontattare l'Interessato e dare seguito a richieste di informazioni, preventivi o prenotazione di una call conoscitiva. Il ricontatto potrà avvenire tramite posta elettronica, telefono, il form di contatto o lo strumento di prenotazione appuntamenti presente sul sito.</p>
                <p><Label>Base giuridica:</Label></p>
                <Ul items={["Esecuzione di misure precontrattuali su richiesta dell'Interessato (art. 6.1 lett. b GDPR).", "Consenso dell'Interessato (art. 6.1 lett. a GDPR), quando i dati vengono raccolti per successivi contatti commerciali."]} />
                <p><Label>Periodo di conservazione:</Label> i dati forniti per richieste di informazioni saranno conservati per un massimo di 12 mesi, salvo instaurazione di un rapporto contrattuale. Se l'Interessato ha fornito il consenso per essere ricontattato in futuro, i dati saranno conservati fino a revoca del consenso.</p>
              </SubSection>

              <SubSection title="3) Trattamento necessario nell'ambito di un contratto">
                <p>I Dati saranno trattati per la predisposizione e sottoscrizione elettronica del contratto (tramite JotForm Sign), l'esecuzione del contratto stipulato tra l'Interessato e il Titolare, la gestione del rapporto contrattuale (comunicazioni, condivisione di materiali tramite Notion e Google Drive, fatturazione), l'assistenza post-vendita e l'adempimento di obblighi legali, amministrativi e fiscali.</p>
                <p><Label>Base giuridica:</Label></p>
                <Ul items={["Esecuzione del contratto (art. 6.1 lett. b GDPR).", "Obbligo legale (art. 6.1 lett. c GDPR), per gli obblighi fiscali, amministrativi e contabili."]} />
                <p><Label>Periodo di conservazione:</Label> per il tempo necessario all'esecuzione del contratto e, successivamente, per un periodo massimo di 10 anni, in conformità agli obblighi di legge in materia fiscale e contabile.</p>
              </SubSection>

              <SubSection title="4) Adempimenti di obblighi previsti dalle leggi vigenti">
                <p>I Dati saranno trattati per adempiere a qualunque obbligo previsto da leggi, regolamenti e normative correlate, incluse quelle in materia tributaria e fiscale.</p>
                <p><Label>Base giuridica:</Label> obbligo legale al quale è soggetto il Titolare.</p>
                <p><Label>Periodo di conservazione:</Label> periodo indicato dalla legge, comunque non oltre 10 anni.</p>
              </SubSection>

              <SubSection title="5) Newsletter">
                <p>I dati personali forniti dall'Interessato saranno trattati per l'invio di newsletter contenenti comunicazioni informative e promozionali. Per l'invio della newsletter, il Titolare tratta nome (se fornito) e indirizzo email, tramite il servizio MailerLite.</p>
                <p><Label>Base giuridica:</Label> consenso esplicito e libero dell'Interessato (art. 6.1 lett. a GDPR). L'iscrizione è facoltativa e il mancato conferimento dei dati non pregiudica l'utilizzo degli altri servizi del sito.</p>
                <p><Label>Periodo di conservazione:</Label> fino a revoca del consenso, esercitabile in qualsiasi momento tramite il link di cancellazione presente in calce a ogni newsletter o tramite richiesta diretta al Titolare.</p>
              </SubSection>

              <SubSection title="6) Statistica">
                <p>I dati saranno trattati per effettuare analisi statistiche finalizzate a comprendere le preferenze e i comportamenti degli utenti, migliorare i contenuti offerti e ottimizzare la navigazione, tramite gli strumenti Google Analytics 4 e PostHog.</p>
                <p><Label>Base giuridica:</Label></p>
                <Ul items={["Consenso dell'Interessato (art. 6.1 lett. a GDPR), se i dati sono raccolti tramite strumenti che tracciano il comportamento dell'utente.", "Legittimo interesse del Titolare (art. 6.1 lett. f GDPR), se le analisi vengono effettuate su dati anonimi e aggregati."]} />
                <p><Label>Periodo di conservazione:</Label> fino a revoca del consenso o per il periodo massimo impostato in ciascuno strumento di analisi.</p>
              </SubSection>

              <SubSection title="7) Remarketing e behavioral targeting">
                <p>I dati personali dell'Interessato saranno trattati per mostrare annunci pubblicitari personalizzati su piattaforme terze (Facebook e Instagram), tramite lo strumento Facebook Remarketing (Meta Pixel).</p>
                <p><Label>Base giuridica:</Label> consenso esplicito dell'Interessato (art. 6.1 lett. a GDPR), attivato tramite il banner cookie.</p>
                <p><Label>Periodo di conservazione:</Label> i dati raccolti tramite il Pixel di Meta sono conservati per un massimo di 180 giorni, salvo diversa impostazione da parte di Meta.</p>
              </SubSection>

              <SubSection title="8) Acquisto di prodotti digitali">
                <p>Nel caso di acquisto di corsi o percorsi digitali tramite il Sito, il Titolare tratta i Dati necessari alla gestione dell'ordine e del pagamento tramite la piattaforma di checkout Systeme.io, che si appoggia ai processori di pagamento PayPal e/o Stripe a seconda del metodo scelto dall'Utente.</p>
                <p><Label>Base giuridica:</Label></p>
                <Ul items={["Esecuzione del contratto (art. 6.1 lett. b GDPR), per completare l'acquisto.", "Obbligo legale (art. 6.1 lett. c GDPR), per gli adempimenti fiscali e contabili."]} />
                <p><Label>Periodo di conservazione:</Label> per il tempo necessario all'esecuzione del contratto e, successivamente, per un periodo massimo di 10 anni, in conformità agli obblighi di legge in materia fiscale e contabile.</p>
              </SubSection>
            </Section>

            <Section title="Comunicazione dei Dati">
              <p>I Dati Personali dell'Interessato potranno essere comunicati, nei limiti pertinenti alle finalità indicate, ai seguenti soggetti:</p>
              <p><Label>Responsabili del Trattamento ex art. 28 GDPR</Label>, quali fornitori di servizi strumentali all'attività del Titolare:</p>
              <Ul items={[
                "Vercel (hosting e deploy del sito)",
                "GitHub (repository del codice sorgente)",
                "VHosting (posta elettronica certificata)",
                "MailerLite (gestione newsletter)",
                "Google (Google Analytics 4)",
                "Meta Platforms, Inc. (Facebook Remarketing)",
                "PostHog (analisi comportamentale)",
                "Cal.com (prenotazione appuntamenti)",
                "FattureInCloud (gestione fatturazione)",
                "Systeme.io (piattaforma di checkout per l'acquisto di prodotti digitali)",
                "PayPal Europe S.a.r.l. et Cie, S.C.A (processore di pagamento)",
                "Stripe Payments Europe, Ltd. (processore di pagamento)",
                "JotForm Inc. (generazione e firma elettronica dei contratti)",
                "Notion Labs, Inc. (gestione operativa del rapporto con il cliente dopo la firma del contratto)",
                "Google LLC (Google Drive, per la condivisione di materiali con il cliente dopo la firma del contratto)",
                "Cybot A/S (Cookiebot, gestione del banner e delle preferenze cookie)",
              ]} />
              <p>Tali soggetti, ove necessario, sono nominati Responsabili del Trattamento ai sensi dell'art. 28 GDPR. L'elenco aggiornato può essere richiesto in qualsiasi momento al Titolare.</p>
              <p><Label>Soggetti destinatari per obblighi di legge</Label>, quali autorità amministrative, fiscali o giudiziarie, quando la comunicazione sia obbligatoria per legge.</p>
              <p>I Dati Personali non saranno oggetto di diffusione indiscriminata né di comunicazione a soggetti terzi per finalità diverse da quelle indicate nella presente informativa, salvo espresso consenso dell'Interessato o specifico obbligo di legge.</p>
            </Section>

            <Section title="Tecnologie utilizzate">
              <SubSection title="Hosting e Infrastruttura - Vercel">
                <p>Il Sito web è ospitato su infrastruttura fornita da Vercel Inc., piattaforma di hosting e deploy per applicazioni web. Il servizio consente al Titolare di garantire il corretto funzionamento del sito, la disponibilità dei contenuti e la sicurezza dei dati.</p>
                <p>Attraverso tale infrastruttura possono essere trattati, anche indirettamente, Dati Personali quali indirizzi IP, log di accesso e dati tecnici relativi ai dispositivi utilizzati.</p>
                <p><Label>Base giuridica:</Label> esecuzione del contratto e legittimo interesse del Titolare alla sicurezza e stabilità dei propri sistemi (art. 6.1 lett. b e f GDPR).</p>
                <p><Label>Luogo del trattamento:</Label> Vercel Inc. ha sede negli Stati Uniti; il trasferimento dei dati avviene nel rispetto degli artt. 44 e ss. del GDPR, mediante adeguate garanzie di protezione, incluse le Clausole Contrattuali Standard.</p>
              </SubSection>

              <SubSection title="Repository del codice - GitHub">
                <p>Il codice sorgente del Sito è gestito tramite GitHub (GitHub, Inc.), piattaforma di versionamento del codice. GitHub non entra in contatto diretto con i Dati Personali degli utenti del Sito, salvo eventuali dati tecnici presenti in log applicativi durante lo sviluppo.</p>
                <p><Label>Luogo del trattamento:</Label> Stati Uniti, con garanzie ai sensi degli artt. 44 e ss. GDPR.</p>
              </SubSection>

              <SubSection title="Form di Contatto">
                <p>Il Sito mette a disposizione degli utenti un form di contatto finalizzato alla richiesta di informazioni e consulenze. I Dati Personali raccolti tramite il form possono includere nome e cognome, indirizzo e-mail, numero di telefono e oggetto della richiesta.</p>
                <p><Label>Base giuridica:</Label> esecuzione di misure precontrattuali su richiesta dell'Interessato (art. 6.1 lett. b GDPR).</p>
              </SubSection>

              <SubSection title="Newsletter - MailerLite">
                <p>Il Titolare utilizza MailerLite, servizio fornito da MailerLite Limited (società di diritto irlandese) per gli utenti dello Spazio Economico Europeo, per la gestione delle newsletter e delle comunicazioni informative via email, nonché per l'analisi statistica dell'interazione con le newsletter (tasso di apertura, clic sui link).</p>
                <p><Label>Dati trattati:</Label> nome, indirizzo email.</p>
                <p><Label>Base giuridica:</Label> consenso dell'Interessato (art. 6.1 lett. a GDPR).</p>
                <p><Label>Modalità di disiscrizione:</Label> l'Interessato può revocare il consenso in qualsiasi momento cliccando sull'apposito link presente in calce a ciascuna email.</p>
                <p><Label>Luogo del trattamento:</Label> Unione Europea. Per gli account con sede nello Spazio Economico Europeo, MailerLite tratta i dati esclusivamente su infrastruttura Google Cloud situata in UE, senza trasferimento verso Paesi extra-UE.</p>
              </SubSection>

              <SubSection title="Prenotazione appuntamenti - Cal.com">
                <p>Il Titolare utilizza Cal.com, servizio fornito da Cal.com, Inc. (con sede a San Francisco, USA), quale piattaforma di pianificazione automatizzata di appuntamenti e call conoscitive. Attraverso Cal.com, l'Utente può selezionare la disponibilità del Titolare e prenotare un incontro. I Dati Personali trattati possono includere nome e cognome, indirizzo e-mail, data e orario dell'appuntamento ed eventuali note fornite dall'Utente.</p>
                <p><Label>Base giuridica:</Label> esecuzione di misure precontrattuali su richiesta dell'Interessato (art. 6.1 lett. b GDPR).</p>
                <p><Label>Luogo del trattamento:</Label> Stati Uniti. Cal.com, Inc. dichiara di trattare i dati sul proprio territorio nazionale; il trasferimento avviene nel rispetto degli artt. 44 e ss. del GDPR mediante Clausole Contrattuali Standard o adesione all'EU-US Data Privacy Framework. Cal.com dispone di un rappresentante nell'Unione Europea ai sensi dell'art. 27 GDPR.</p>
              </SubSection>

              <SubSection title="Statistica - Google Analytics 4">
                <p>Il Sito utilizza Google Analytics 4, servizio di analisi fornito da Google LLC, per raccogliere informazioni statistiche sull'utilizzo del sito. In Google Analytics 4, gli indirizzi IP vengono utilizzati solo al momento della raccolta e poi eliminati prima della memorizzazione.</p>
                <p><Label>Base giuridica:</Label></p>
                <Ul items={["Consenso dell'Interessato (art. 6.1 lett. a GDPR), se i dati sono raccolti tramite cookie non anonimizzati.", "Legittimo interesse del Titolare (art. 6.1 lett. f GDPR), se i dati sono raccolti in modo anonimo e aggregato."]} />
                <p><Label>Periodo di conservazione:</Label> massimo 14 mesi.</p>
                <p><Label>Disattivazione:</Label> tramite il banner cookie del sito o il componente aggiuntivo del browser per la disattivazione di Google Analytics.</p>
                <p><Label>Luogo del trattamento:</Label> USA - Irlanda.</p>
              </SubSection>

              <SubSection title="Statistica - PostHog">
                <p>Il Titolare utilizza PostHog come strumento di product analytics e analisi comportamentale, per comprendere le modalità di navigazione degli utenti e migliorare l'esperienza sul sito. PostHog può raccogliere informazioni relative a visualizzazione delle pagine, percorsi di navigazione, click effettuati e dati tecnici del dispositivo utilizzato.</p>
                <p><Label>Base giuridica:</Label> consenso dell'Interessato, ove richiesto, oppure legittimo interesse del Titolare nei casi in cui i dati siano raccolti in forma aggregata e non identificativa.</p>
                <p><Label>Luogo del trattamento:</Label> Unione Europea. L'account in uso è configurato su "PostHog Cloud EU" (dominio eu.posthog.com), con server situati a Francoforte (Germania). I dati non lasciano la giurisdizione dell'Unione Europea.</p>
              </SubSection>

              <SubSection title="Remarketing - Facebook Remarketing (Meta Platforms, Inc.)">
                <p>Il Sito utilizza il servizio Facebook Remarketing, fornito da Meta Platforms, Inc., che collega l'attività degli utenti sul sito con il network pubblicitario di Facebook e Instagram, per mostrare annunci personalizzati agli utenti che hanno visitato il sito.</p>
                <p><Label>Dati raccolti:</Label> Cookie, Strumenti di tracciamento, Dati di utilizzo.</p>
                <p><Label>Base giuridica:</Label> consenso esplicito dell'Interessato (art. 6.1 lett. a GDPR), attivato tramite il banner cookie.</p>
                <p><Label>Periodo di conservazione:</Label> massimo 180 giorni, salvo diversa impostazione da parte di Meta.</p>
                <p><Label>Disattivazione:</Label> tramite il banner cookie del sito o le impostazioni dell'account Facebook, sezione "Preferenze per le inserzioni".</p>
                <p><Label>Luogo del trattamento:</Label> Irlanda.</p>
              </SubSection>

              <SubSection title="Fatturazione - FattureInCloud">
                <p>Il Titolare utilizza FattureInCloud per la gestione della fatturazione elettronica verso i clienti. I Dati Personali trattati includono ragione sociale o nome e cognome, indirizzo, codice fiscale, P.IVA e dati relativi alle prestazioni fatturate.</p>
                <p><Label>Base giuridica:</Label></p>
                <Ul items={["Esecuzione del contratto (art. 6.1 lett. b GDPR).", "Obbligo legale (art. 6.1 lett. c GDPR), per gli adempimenti fiscali e contabili."]} />
                <p><Label>Periodo di conservazione:</Label> 10 anni, in conformità alla normativa fiscale.</p>
                <p><Label>Luogo del trattamento:</Label> Italia.</p>
              </SubSection>

              <SubSection title="Piattaforma di checkout - Systeme.io">
                <p>Il Titolare utilizza Systeme.io, servizio fornito da ITACWT Limited (società di diritto irlandese, con sede a Dublino), come piattaforma di checkout per la vendita di corsi e percorsi digitali offerti tramite il Sito. Al momento dell'acquisto, l'Utente viene indirizzato alla pagina di pagamento gestita da Systeme.io, che raccoglie i Dati Personali necessari a completare l'ordine e seleziona, in base alla scelta dell'Utente, il processore di pagamento (PayPal o Stripe) tramite cui la transazione viene effettivamente elaborata.</p>
                <p><Label>Dati raccolti:</Label> nome e cognome, indirizzo e-mail, indirizzo di fatturazione, dati relativi all'ordine.</p>
                <p><Label>Base giuridica:</Label></p>
                <Ul items={["Esecuzione del contratto (art. 6.1 lett. b GDPR), per completare l'acquisto.", "Obbligo legale (art. 6.1 lett. c GDPR), per gli adempimenti fiscali e contabili."]} />
                <p><Label>Periodo di conservazione:</Label> per il tempo necessario alla gestione dell'ordine e, successivamente, per un periodo massimo di 10 anni, in conformità agli obblighi di legge in materia fiscale.</p>
                <p><Label>Luogo del trattamento:</Label> Unione Europea. I server di Systeme.io sono ospitati su infrastruttura Amazon Web Services situata in Irlanda; i dati non vengono trasferiti al di fuori dell'Unione Europea.</p>
              </SubSection>

              <SubSection title="Gestione dei pagamenti - PayPal">
                <p>Il Titolare utilizza PayPal, servizio di pagamento fornito da PayPal Europe S.a.r.l. et Cie, S.C.A, che consente all'Interessato di effettuare pagamenti online in modo sicuro utilizzando le proprie credenziali PayPal o altre modalità di pagamento supportate.</p>
                <p><Label>Dati raccolti:</Label> Cookie e Strumenti di tracciamento, dati di pagamento (informazioni sulle transazioni e metodi di pagamento utilizzati), dati identificativi e di contatto (nome, email, indirizzo di fatturazione), indirizzo IP e informazioni sul dispositivo utilizzato.</p>
                <p><Label>Base giuridica:</Label></p>
                <Ul items={["Esecuzione del contratto (art. 6.1 lett. b GDPR), per completare la transazione.", "Obblighi legali e fiscali (art. 6.1 lett. c GDPR)."]} />
                <p>PayPal agisce come Titolare autonomo del trattamento dei dati raccolti durante la transazione. Il Titolare del presente sito non conserva direttamente i dati della carta di credito o di pagamento dell'Interessato, ma riceve solo una conferma dell'avvenuto pagamento da parte di PayPal.</p>
                <p><Label>Periodo di conservazione:</Label> i dati relativi ai pagamenti sono conservati da PayPal per il tempo necessario a soddisfare gli obblighi di legge (solitamente 10 anni, come previsto dalla normativa fiscale e bancaria).</p>
                <p><Label>Luogo del trattamento:</Label> Lussemburgo.</p>
              </SubSection>

              <SubSection title="Gestione dei pagamenti - Stripe">
                <p>Il Titolare utilizza Stripe, servizio fornito da Stripe Payments Europe, Ltd., per gestire i pagamenti elettronici tramite carta di credito, debito o altri metodi digitali. Durante la procedura di pagamento, Stripe raccoglie e tratta Dati Personali dell'Utente, tra cui informazioni bancarie, dati della carta, indirizzo email, indirizzo di fatturazione, indirizzo IP e dati del dispositivo.</p>
                <p><Label>Base giuridica:</Label></p>
                <Ul items={["Esecuzione del contratto (art. 6.1 lett. b GDPR), per processare i pagamenti richiesti dall'Utente.", "Obbligo legale (art. 6.1 lett. c GDPR), per gli adempimenti fiscali e contabili.", "Legittimo interesse del Titolare (art. 6.1 lett. f GDPR), per prevenire frodi e garantire la sicurezza dei pagamenti online."]} />
                <p>Il Titolare del presente sito non conserva direttamente i dati della carta di credito dell'Interessato, ma riceve solo una conferma dell'avvenuto pagamento da parte di Stripe.</p>
                <p><Label>Periodo di conservazione:</Label> i dati relativi ai pagamenti sono conservati da Stripe secondo i termini stabiliti nella propria privacy policy. Il Titolare conserva solo i dati necessari alla fatturazione per un periodo massimo di 10 anni.</p>
                <p><Label>Luogo del trattamento:</Label> Stripe Payments Europe ha sede in Irlanda, ma i dati possono essere trasferiti anche a Stripe Inc. (USA) e ad altri sub-responsabili in Paesi terzi, con garanzie ai sensi degli artt. 44 e ss. del GDPR.</p>
              </SubSection>

              <SubSection title="Generazione e firma dei contratti - JotForm">
                <p>Il Titolare utilizza JotForm Sign, servizio fornito da JotForm Inc., per la predisposizione e la sottoscrizione elettronica dei contratti di collaborazione con i clienti. Tramite questo strumento, il cliente riceve un link per prendere visione del contratto, compilare i propri dati anagrafici e apporre la firma elettronica.</p>
                <p><Label>Dati raccolti:</Label> ragione sociale o nome e cognome, sede/indirizzo, codice fiscale, P.IVA, SDI, firma elettronica, luogo e data della sottoscrizione.</p>
                <p><Label>Base giuridica:</Label> esecuzione del contratto (art. 6.1 lett. b GDPR); obbligo legale (art. 6.1 lett. c GDPR), per gli adempimenti fiscali e contabili connessi al rapporto contrattuale.</p>
                <p><Label>Periodo di conservazione:</Label> per la durata del rapporto contrattuale e, successivamente, per un periodo massimo di 10 anni, in conformità agli obblighi di legge in materia fiscale e contabile.</p>
                <p><Label>Luogo del trattamento:</Label> Unione Europea. Sull'account in uso è attiva l'opzione di conservazione dei dati in Unione Europea, che colloca i dati del modulo su server europei situati a Francoforte (Germania), gestiti su infrastruttura Google Cloud e AWS, con garanzia che i dati restino sempre nella regione selezionata, inclusi i backup.</p>
              </SubSection>

              <SubSection title="Gestione del rapporto con il cliente - Notion e Google Drive">
                <p>Successivamente alla sottoscrizione del contratto, il Titolare utilizza Notion (Notion Labs, Inc.) e Google Drive (Google LLC) per la gestione operativa della collaborazione con il cliente, quali la condivisione di materiali, la gestione di task e scadenze, e l'organizzazione dei contenuti relativi al progetto concordato.</p>
                <p><Label>Dati raccolti:</Label> nome e cognome, indirizzo e-mail, materiali e contenuti condivisi nell'ambito della collaborazione.</p>
                <p><Label>Base giuridica:</Label> esecuzione del contratto (art. 6.1 lett. b GDPR).</p>
                <p><Label>Periodo di conservazione:</Label> per la durata del rapporto contrattuale e per il tempo necessario alla gestione di eventuali richieste successive alla cessazione della collaborazione.</p>
                <p><Label>Luogo del trattamento:</Label> Stati Uniti, con garanzie ai sensi degli artt. 44 e ss. del GDPR.</p>
              </SubSection>

              <SubSection title="Posta Elettronica Certificata - VHosting">
                <p>Il Titolare utilizza il servizio di Posta Elettronica Certificata (PEC) fornito da VHosting per le comunicazioni ufficiali che richiedono valore legale, quali comunicazioni con clienti, fornitori o pubbliche amministrazioni. I Dati Personali eventualmente contenuti nelle comunicazioni scambiate tramite PEC sono trattati esclusivamente per le finalità della specifica comunicazione.</p>
                <p><Label>Base giuridica:</Label> esecuzione del contratto o obbligo legale, a seconda della natura della comunicazione (art. 6.1 lett. b e c GDPR).</p>
                <p><Label>Periodo di conservazione:</Label> per il tempo previsto dalla normativa applicabile alla conservazione della corrispondenza ufficiale e, ove rilevante ai fini fiscali, fino a 10 anni.</p>
                <p><Label>Luogo del trattamento:</Label> Italia.</p>
              </SubSection>

              <SubSection title="Gestione del consenso cookie - Cookiebot">
                <p>Il Titolare utilizza Cookiebot, servizio fornito da Cybot A/S, per la gestione del banner dei cookie e la raccolta, registrazione e gestione del consenso dell'Utente al trattamento dei cookie non tecnici. Cookiebot effettua una scansione periodica del Sito per rilevare i cookie e gli strumenti di tracciamento presenti, e consente all'Utente di accettare, rifiutare o personalizzare le proprie preferenze per ciascuna categoria di cookie (tecnici, analitici, marketing).</p>
                <p><Label>Dati raccolti:</Label> indirizzo IP (in forma abbreviata/anonimizzata), preferenze di consenso espresse dall'Utente, data e ora della scelta.</p>
                <p><Label>Base giuridica:</Label> obbligo legale e legittimo interesse del Titolare a documentare il consenso raccolto in conformità al GDPR e all'art. 122 del Codice Privacy (art. 6.1 lett. c e f GDPR).</p>
                <p><Label>Periodo di conservazione:</Label> le preferenze di consenso sono conservate per il tempo necessario a dimostrare la scelta effettuata dall'Utente, secondo le impostazioni configurate nell'account Cookiebot.</p>
                <p><Label>Luogo del trattamento:</Label> Cybot A/S ha sede in Danimarca (Unione Europea).</p>
              </SubSection>
            </Section>

            <Section title="Cookie">
              <p>Il presente Sito utilizza cookie e altre tecnologie di tracciamento per garantire il corretto funzionamento delle pagine, migliorare l'esperienza di navigazione, analizzare il traffico e, ove previsto, per finalità di marketing e remarketing. La gestione del consenso ai cookie avviene tramite Cookiebot, come descritto nella sezione "Tecnologie utilizzate" di questo documento.</p>
              <p>I cookie utilizzati dal Sito possono essere distinti in:</p>
              <p><Label>Cookie tecnici e strettamente necessari</Label> - indispensabili per il corretto funzionamento del Sito. Non richiedono consenso preventivo.</p>
              <p><Label>Cookie analitici</Label> - utilizzati per raccogliere informazioni statistiche aggregate sull'utilizzo del Sito (Google Analytics 4, PostHog). Se non adeguatamente anonimizzati, il loro utilizzo avviene solo previo consenso.</p>
              <p><Label>Cookie di marketing e remarketing</Label> - utilizzati per mostrare annunci pubblicitari mirati (Facebook Remarketing). L'installazione avviene esclusivamente previo consenso espresso tramite il banner Cookiebot.</p>
              <p><Label>Cookie di terze parti</Label> - il Sito può integrare servizi forniti da terze parti (Google, Meta, MailerLite, Cal.com, Systeme.io, PayPal, Stripe) che possono installare cookie propri secondo le rispettive informative privacy.</p>
              <p>Per maggiori informazioni, l'Utente è invitato a consultare la <a href="/cookie-policy" className="text-[#156686] underline underline-offset-2">Cookie Policy</a> dedicata, accessibile tramite apposito link presente sul Sito. L'Utente può in qualsiasi momento modificare o revocare il consenso prestato tramite il banner Cookiebot oppure attraverso le impostazioni del proprio browser.</p>
            </Section>

            <Section title="Luogo del Trattamento e trasferimento dei Dati all'estero">
              <p>I Dati Personali sono trattati presso la sede operativa del Titolare e in ogni altro luogo in cui si trovano i soggetti coinvolti nel trattamento. Il trattamento può essere effettuato direttamente dal Titolare oppure tramite soggetti terzi che forniscono servizi tecnici, organizzativi, informatici o amministrativi connessi alla gestione del Sito. Tali soggetti possono operare sia all'interno dello Spazio Economico Europeo (SEE) sia, ove necessario, in Paesi situati al di fuori del SEE, inclusi gli Stati Uniti, utilizzati dai fornitori delle piattaforme digitali impiegate dal Titolare (a titolo esemplificativo: Vercel, GitHub, Meta Platforms, PostHog, PayPal, Stripe, e i restanti fornitori elencati nella sezione "Tecnologie utilizzate" di questo documento).</p>
              <p>Qualora il trasferimento dei Dati Personali avvenga verso Paesi terzi che non garantiscono un livello di protezione adeguato secondo la Commissione Europea, il Titolare adotterà tutte le misure necessarie a garantire un livello di tutela adeguato e conforme agli artt. 44 e seguenti del GDPR, inclusa l'adozione delle Clausole Contrattuali Standard (SCCs) o ulteriori garanzie appropriate. L'Interessato può richiedere ulteriori informazioni in merito ai trasferimenti internazionali di dati contattando il Titolare.</p>
            </Section>

            <Section title="Tecnologie Digitali e Utilizzo di Sistemi di Intelligenza Artificiale">
              <p>Il Titolare, nello svolgimento della propria attività professionale, si avvale di strumenti di intelligenza artificiale generativa (quali, a titolo esemplificativo, Claude e/o ChatGPT) come supporto strumentale al proprio giudizio professionale, nell'ambito della gestione delle comunicazioni con clienti e prospect, della predisposizione di bozze di contenuti, contratti e materiali informativi.</p>
              <p><Label>Modalità d'uso:</Label> l'utilizzo di tali strumenti avviene esclusivamente come parte del processo di lavoro interno del Titolare, che ne rimane l'unico responsabile. Gli strumenti di intelligenza artificiale non sono integrati nel Sito web e non sono in alcun modo a contatto diretto con l'Utente o il Visitatore del Sito: nessuna comunicazione, contenuto o documento prodotto con il supporto di tali strumenti viene consegnato, inviato o pubblicato senza revisione, verifica e validazione umana da parte del Titolare.</p>
              <p>Il Titolare garantisce che:</p>
              <Ul items={[
                "ogni contenuto o comunicazione prodotta con il supporto di strumenti di intelligenza artificiale è sottoposta a revisione e validazione umana da parte del Titolare prima dell'invio o della pubblicazione; tale revisione costituisce parte integrante del servizio professionale reso, e il Titolare mantiene la piena responsabilità sul contenuto finale;",
                "l'apporto intellettuale e professionale del Titolare resta la componente dominante nella produzione di ogni contenuto, contratto o comunicazione, in conformità a quanto previsto dall'art. 13 della Legge 23 settembre 2025, n. 132 in materia di utilizzo dell'intelligenza artificiale;",
                "qualora richiesto, comunicherà all'Interessato quali strumenti di intelligenza artificiale sono stati impiegati e in quali fasi del rapporto professionale, in linguaggio chiaro e comprensibile.",
              ]} />
              <p><Label>Qualificazione ai sensi dell'AI Act:</Label> il Titolare opera quale "deployer" (utilizzatore) di sistemi di intelligenza artificiale ai sensi del Regolamento (UE) 2024/1689 ("AI Act"), non quale "provider" (sviluppatore) di tali sistemi. Gli obblighi di trasparenza tecnica automatica sugli output (art. 50, paragrafo 2, AI Act) ricadono sui fornitori dei modelli di intelligenza artificiale utilizzati, non sul Titolare.</p>
              <p>Le tecnologie di intelligenza artificiale utilizzate dal Titolare non determinano processi decisionali interamente automatizzati che producano effetti giuridici nei confronti degli Interessati o che incidano in modo analogo significativamente sulla persona ai sensi dell'art. 22 del GDPR: ogni comunicazione, contratto o contenuto resta sempre soggetto alla decisione e alla supervisione diretta e personale del Titolare prima di produrre qualsiasi effetto verso l'Interessato.</p>
              <p>L'utilizzo delle tecnologie digitali e degli strumenti di intelligenza artificiale avviene nel rispetto dei principi di liceità, correttezza, trasparenza, minimizzazione dei dati, limitazione delle finalità, sicurezza, supervisione umana e utilizzo responsabile delle tecnologie.</p>
            </Section>

            <Section title="Diritti dell'Utente sulla base del GDPR">
              <p>Gli Utenti possono esercitare determinati diritti con riferimento ai Dati trattati dal Titolare. In particolare, nei limiti previsti dalla legge, l'Utente ha il diritto di:</p>
              <Ul items={[
                "Revocare il consenso in ogni momento. L'Utente può revocare il consenso al trattamento dei propri Dati Personali precedentemente espresso.",
                "Opporsi al trattamento dei propri Dati, quando esso avviene in virtù di una base giuridica diversa dal consenso.",
                "Accedere ai propri Dati, ottenendo informazioni sui Dati trattati e una copia dei Dati stessi.",
                "Verificare e chiedere la rettificazione dei propri Dati.",
                "Ottenere la limitazione del trattamento dei propri Dati.",
                "Ottenere la cancellazione o rimozione dei propri Dati Personali.",
                "Ricevere i propri Dati o farli trasferire ad altro titolare, in formato strutturato e leggibile da dispositivo automatico.",
                "Proporre reclamo all'autorità di controllo competente (in Italia, il Garante per la protezione dei dati personali) o agire in sede giudiziale.",
              ]} />
              <p><Label>Come esercitare i diritti:</Label> eventuali richieste possono essere indirizzate al Titolare all'indirizzo email <a href="mailto:bonomoandrea90@gmail.com" className="text-[#156686] underline underline-offset-2">bonomoandrea90@gmail.com</a>. La richiesta è gratuita e il Titolare risponderà entro un mese, fornendo tutte le informazioni previste dalla legge.</p>
            </Section>

            <Section title="Ulteriori informazioni sul trattamento">
              <SubSection title="Log di sistema e manutenzione">
                <p>Per necessità legate al funzionamento e alla manutenzione, questo Sito e i servizi terzi utilizzati potrebbero raccogliere log di sistema, ossia file che registrano le interazioni e che possono contenere Dati Personali, quali l'indirizzo IP dell'Utente.</p>
              </SubSection>
              <SubSection title="Difesa in giudizio">
                <p>I Dati Personali dell'Utente possono essere utilizzati dal Titolare in giudizio o nelle fasi preparatorie alla sua eventuale instaurazione, per la difesa da abusi nell'utilizzo del Sito o dei Servizi connessi.</p>
              </SubSection>
              <SubSection title="Informazioni non contenute in questa policy">
                <p>Ulteriori informazioni in relazione al trattamento dei Dati Personali potranno essere richieste in qualsiasi momento al Titolare del Trattamento.</p>
              </SubSection>
            </Section>

            <Section title="Modifiche a questa Privacy Policy">
              <p>Il Titolare del Trattamento si riserva il diritto di apportare modifiche alla presente privacy policy in qualunque momento, notificandolo agli Utenti su questa pagina. Si prega di consultare con frequenza questa pagina, facendo riferimento alla data di ultima modifica indicata in fondo. Qualora le modifiche interessino trattamenti la cui base giuridica è il consenso, il Titolare provvederà a raccogliere nuovamente il consenso dell'Utente, se necessario.</p>
            </Section>

          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
