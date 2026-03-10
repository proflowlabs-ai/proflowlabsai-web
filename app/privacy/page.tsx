export default function PrivacyPage() {
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
          <h1 className="font-display text-4xl tracking-tight text-white md:text-5xl">Privacy Policy</h1>
          <p className="mt-3 text-sm leading-relaxed text-slate-300">
            Last updated: [DD.MM.YYYY]. This is a short, editable template and not legal advice. Replace placeholders
            with your real details.
          </p>

          <div className="mt-8 space-y-6 text-sm leading-relaxed text-slate-200">
            <section>
              <h2 className="font-display text-xl text-white">1) Who is responsible?</h2>
              <p className="mt-2">[Company / Legal Name], [Address], [Country]</p>
              <p>Contact: [privacy@yourdomain.com]</p>
            </section>

            <section>
              <h2 className="font-display text-xl text-white">2) What data we process</h2>
              <p className="mt-2">
                We process data you provide directly (e.g., name, email, message content) and technical data generated
                when you visit this website (e.g., IP address, browser type, device information, pages visited).
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl text-white">3) Why we process data</h2>
              <p className="mt-2">
                We use your data to run the website, respond to inquiries, improve performance, and maintain security.
                We only process data where we have a valid legal basis (consent, contract, legal obligation, or
                legitimate interest).
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl text-white">4) Cookies</h2>
              <p className="mt-2">
                This site may use essential cookies for core functionality and optional cookies for analytics. You can
                control or disable cookies in your browser settings.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl text-white">5) Analytics</h2>
              <p className="mt-2">
                If analytics tools are enabled (for example: [Plausible / Google Analytics / other]), they help us
                understand traffic and improve content. Configure your provider list and consent behavior as required
                in your region.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl text-white">6) Retention</h2>
              <p className="mt-2">
                We keep personal data only as long as needed for the purposes above or as required by applicable law.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl text-white">7) Your rights</h2>
              <p className="mt-2">
                Depending on your location, you may have rights to access, correct, delete, or restrict processing of
                your personal data, and to object to certain uses.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl text-white">8) Contact</h2>
              <p className="mt-2">
                For privacy requests, email us at <a className="text-cyan-100 underline underline-offset-2" href="mailto:[privacy@yourdomain.com]">[privacy@yourdomain.com]</a>.
              </p>
            </section>
          </div>
        </section>

        <footer className="border-t border-white/10 pt-6 text-sm text-slate-400">
          <div className="flex flex-wrap gap-4">
            <a href="/" className="transition hover:text-slate-200">
              Home
            </a>
            <a href="/imprint" className="transition hover:text-slate-200">
              Imprint
            </a>
          </div>
        </footer>
      </div>
    </main>
  );
}
