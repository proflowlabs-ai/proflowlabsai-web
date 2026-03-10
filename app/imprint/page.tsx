export default function ImprintPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[var(--background)] text-[var(--foreground)]">
      <div className="aurora" />
      <div className="grain" />
      <div className="pointer-events-none absolute inset-0 tech-grid opacity-60" />

      <div className="mx-auto flex w-full max-w-3xl flex-col gap-8 px-6 pb-16 pt-10 md:px-10 md:pt-14">
        <header className="flex items-center justify-between border-b border-white/12 pb-5">
          <a href="/" className="font-body text-sm tracking-[0.24em] text-slate-300 transition hover:text-white">
            PROFLOWLABSAI
          </a>
          <a href="mailto:hello@proflowlabsai.com" className="pill-button text-xs text-slate-100">
            Contact
          </a>
        </header>

        <section className="reveal rounded-2xl border border-white/10 bg-white/[0.03] p-7 md:p-8">
          <h1 className="font-display text-4xl tracking-tight text-white md:text-5xl">Imprint</h1>
          <p className="mt-3 text-sm leading-relaxed text-slate-300">
            Template provided for informational purposes only. Please replace all placeholders with your official legal
            business details.
          </p>

          <div className="mt-8 space-y-6 text-sm leading-relaxed text-slate-200">
            <section>
              <h2 className="font-display text-xl text-white">Provider</h2>
              <p className="mt-2">[Company / Legal Name]</p>
              <p>[Legal Form, e.g. GmbH / AG / Sole Proprietorship]</p>
              <p>[Street + Number]</p>
              <p>[Postal Code + City]</p>
              <p>[Country]</p>
            </section>

            <section>
              <h2 className="font-display text-xl text-white">Represented by</h2>
              <p className="mt-2">[Managing Director / Authorized Representative]</p>
            </section>

            <section>
              <h2 className="font-display text-xl text-white">Contact</h2>
              <p className="mt-2">Email: [contact@yourdomain.com]</p>
              <p>Phone: [optional]</p>
            </section>

            <section>
              <h2 className="font-display text-xl text-white">Register Information (if applicable)</h2>
              <p className="mt-2">Commercial Register: [Court + Register Number]</p>
              <p>VAT ID: [VAT / UID Number]</p>
            </section>

            <section>
              <h2 className="font-display text-xl text-white">Responsible for content</h2>
              <p className="mt-2">[Full Name]</p>
              <p>[Address, if required by local law]</p>
            </section>
          </div>
        </section>

        <footer className="border-t border-white/10 pt-6 text-sm text-slate-400">
          <div className="flex flex-wrap gap-4">
            <a href="/" className="transition hover:text-slate-200">
              Home
            </a>
            <a href="/privacy" className="transition hover:text-slate-200">
              Privacy
            </a>
          </div>
        </footer>
      </div>
    </main>
  );
}
