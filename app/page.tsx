const steps = [
  {
    title: "1. Brief teilen",
    description:
      "Du beschreibst kurz dein Ziel, deinen Stil und wo der Prozess gerade hängt.",
  },
  {
    title: "2. Agent baut den Flow",
    description:
      "Wir übernehmen Recherche, Text, Routing und Automationen in einem klaren Ablauf.",
  },
  {
    title: "3. Du gibst frei",
    description:
      "Du bekommst ein sauberes Ergebnis, passt Details an und veröffentlichst mit einem Klick.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-20 px-6 py-16 md:px-10 md:py-24">
        <section className="space-y-8">
          <span className="inline-flex rounded-full border border-slate-700 bg-slate-900/70 px-4 py-1 text-sm text-slate-300">
            ProFlowLabsAI · AI Assistant & Automation
          </span>

          <div className="space-y-5">
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-white md:text-6xl">
              Super simple AI-Workflows für Content, Outreach und Ops.
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-slate-300 md:text-xl">
              ProFlowLabsAI ist dein digitaler Assistenz-Layer: weniger Tool-Chaos,
              mehr Output. Wir verbinden Sprache, Prozesse und Automationen, damit
              aus Ideen schnell Ergebnisse werden.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="mailto:hello@proflowlabsai.com"
              className="rounded-lg bg-white px-5 py-3 font-medium text-slate-950 transition hover:bg-slate-200"
            >
              Kontakt aufnehmen
            </a>
            <a
              href="#how-it-works"
              className="rounded-lg border border-slate-600 px-5 py-3 font-medium text-slate-100 transition hover:border-slate-400 hover:bg-slate-900"
            >
              So läuft&apos;s ab
            </a>
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-3">
          <article className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
            <h2 className="text-lg font-semibold">Was wir machen</h2>
            <p className="mt-3 text-slate-300">
              Wir bauen schlanke AI-Systeme für Teams, die schneller veröffentlichen,
              klarer kommunizieren und wiederholbare Aufgaben automatisieren wollen.
            </p>
          </article>
          <article className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
            <h2 className="text-lg font-semibold">Für wen</h2>
            <p className="mt-3 text-slate-300">
              Gründer:innen, kleine Teams und Operator, die Wirkung wollen statt 20
              fragmentierter Tools.
            </p>
          </article>
          <article className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
            <h2 className="text-lg font-semibold">Ergebnis</h2>
            <p className="mt-3 text-slate-300">
              Weniger manuelle Arbeit, schnellere Content-Zyklen und ein Setup, das
              mit deinem Business mitwächst.
            </p>
          </article>
        </section>

        <section id="how-it-works" className="space-y-5">
          <h2 className="text-2xl font-semibold md:text-3xl">So läuft&apos;s ab</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {steps.map((step) => (
              <article
                key={step.title}
                className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5"
              >
                <h3 className="font-medium text-white">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-gradient-to-r from-slate-900 to-slate-800 p-8">
          <h2 className="text-2xl font-semibold">Lass uns simpel starten</h2>
          <p className="mt-3 max-w-2xl text-slate-300">
            Schick eine kurze Nachricht mit deinem Ziel. Wir starten mit einer
            einfachen Version und optimieren dann Schritt für Schritt.
          </p>
          <a
            href="mailto:hello@proflowlabsai.com"
            className="mt-6 inline-block rounded-lg bg-white px-5 py-3 font-medium text-slate-950 transition hover:bg-slate-200"
          >
            hello@proflowlabsai.com
          </a>
        </section>
      </div>
    </main>
  );
}
