import { useEffect } from "react";

export function CallConoscitiva() {
  useEffect(() => {
    if (document.getElementById("cal-embed-script")) return;

    const script = document.createElement("script");
    script.id = "cal-embed-script";
    script.type = "text/javascript";
    script.innerHTML = `
      (function (C, A, L) {
        let p = function (a, ar) { a.q.push(ar); };
        let d = C.document;
        C.Cal = C.Cal || function () {
          let cal = C.Cal; let ar = arguments;
          if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; }
          if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if(typeof namespace === "string"){cal.ns[namespace] = cal.ns[namespace] || api;p(cal.ns[namespace], ar);p(cal, ["initNamespace", namespace]);} else p(cal, ar); return; }
          p(cal, ar);
        };
      })(window, "https://app.cal.com/embed/embed.js", "init");

      Cal("init", "call-conoscitiva-gratuita", {origin:"https://app.cal.com"});

      Cal.ns["call-conoscitiva-gratuita"]("inline", {
        elementOrSelector: "#my-cal-inline-call-conoscitiva-gratuita",
        config: {"layout":"month_view","useSlotsViewOnSmallScreen":"true"},
        calLink: "andreabonomo-mktg/call-conoscitiva-gratuita",
      });

      Cal.ns["call-conoscitiva-gratuita"]("ui", {
        "cssVarsPerTheme": {"light":{"cal-brand":"#C4D9DC"},"dark":{"cal-brand":"#F0F0F0"}},
        "hideEventTypeDetails": false,
        "layout": "month_view"
      });
    `;
    document.head.appendChild(script);

    // Hide Cal.com branding element injected outside the iframe
    const mo = new MutationObserver(() => {
      const container = document.getElementById("my-cal-inline-call-conoscitiva-gratuita");
      if (!container) return;
      // Branding is typically a sibling or child anchor/div linking to cal.com
      const targets = document.querySelectorAll<HTMLElement>(
        'a[href*="cal.com?"][target="_blank"], [data-cal-embed-footer], .cal-embed__footer'
      );
      targets.forEach((el) => { el.style.display = "none"; });
    });
    mo.observe(document.body, { childList: true, subtree: true });

    return () => mo.disconnect();
  }, []);

  return (
    <section id="prenota" className="py-20 md:py-28 bg-white" style={{ scrollMarginTop: "80px" }}>
      <div className="container-narrow">
        <div className="max-w-3xl mb-12 md:mb-16">
          <p className="eyebrow mb-4">Prenota la call conoscitiva con me</p>
          <h2 className="h-display text-3xl md:text-4xl lg:text-5xl">
            Perché non ci prendiamo <em className="text-[#156686]">30 minuti</em> per parlare del tuo prossimo lancio?
          </h2>
        </div>

        {/* Wrapper clips any Cal.com footer branding that renders below the iframe */}
        <div className="relative">
          <div
            id="my-cal-inline-call-conoscitiva-gratuita"
            style={{ width: "100%", height: "100%", overflow: "scroll", minHeight: 600 }}
          />
          {/* White strip over the Cal.com watermark at the bottom of the embed */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: 48,
              background: "white",
              pointerEvents: "none",
              zIndex: 10,
            }}
          />
        </div>
      </div>
    </section>
  );
}
