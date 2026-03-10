const capabilities = [
  {
    title: "AI Content Systems",
    description:
      "From brief to publish-ready assets in one flow: strategy, drafting, edits, and distribution support.",
  },
  {
    title: "Outreach Engines",
    description:
      "Signal-based lead workflows, research enrichment, and message orchestration that keep quality high.",
  },
  {
    title: "Ops Automation",
    description:
      "Connect your stack with practical automations so recurring work happens reliably in the background.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Map the bottleneck",
    description:
      "We identify where execution slows down and define the smallest high-leverage system to ship first.",
  },
  {
    step: "02",
    title: "Build the working flow",
    description:
      "We design, implement, and test the workflow end-to-end so your team gets usable output immediately.",
  },
  {
    step: "03",
    title: "Scale with confidence",
    description:
      "After launch, we refine prompts, automations, and handoffs until the system runs cleanly at volume.",
  },
];

const principles = [
  "Clarity over complexity",
  "Automation with human control",
  "Fast iteration, measurable outcomes",
  "Design that communicates trust",
];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#04070d] text-slate-100">
      <div className="pointer-events-none absolute inset-0 hero-grid opacity-40" />
      <div className="pointer-events-none absolute -top-48 left-1/2 h-[38rem] w-[38rem] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[130px]" />
      <div className="pointer-events-none absolute right-0 top-72 h-72 w-72 rounded-full bg-blue-500/10 blur-[120px]" />

      <div className="mx-auto flex w-full max-w-6xl flex-col gap-24 px-6 pb-16 pt-10 md:px-10 md:pt-14">
        <header className="flex items-center justify-between border-b border-white/10 pb-5">
          <div className="text-sm tracking-[0.24em] text-slate-300">PROFLOWLABSAI</div>
          <a
            href="mailto:hello@proflowlabsai.com"
            className="rounded-full border border-cyan-300/40 px-4 py-2 text-xs font-medium text-cyan-100 transition hover:border-cyan-200 hover:bg-cyan-300/10"
          >
            Start a project
          </a>
        </header>

        <section className="relative grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div className="space-y-8">
            <span className="inline-flex rounded-full border border-white/15 bg-white/5 px-4 py-1 text-xs uppercase tracking-[0.2em] text-cyan-100/90">
              Brand Showcase · Clean Tech Systems
            </span>
            <h1 className="max-w-4xl text-balance text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl">
              Build a sharper digital engine for your brand.
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-slate-300 md:text-xl">
              ProFlowLabsAI designs premium AI workflows for teams that want cleaner
              operations, stronger messaging, and consistent execution.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="mailto:hello@proflowlabsai.com"
                className="rounded-xl bg-cyan-300 px-6 py-3 font-medium text-slate-950 transition hover:bg-cyan-200"
              >
                Book intro call
              </a>
              <a
                href="#capabilities"
                className="rounded-xl border border-white/20 px-6 py-3 font-medium text-slate-100 transition hover:border-cyan-200/70 hover:bg-white/5"
              >
                Explore capabilities
              </a>
            </div>
          </div>

          <div className="float-card rounded-2xl border border-white/15 bg-white/[0.03] p-6 backdrop-blur-xl">
            <p className="text-xs uppercase tracking-[0.2em] text-cyan-100/80">Impact Focus</p>
            <div className="mt-5 space-y-4">
              <div>
                <p className="text-3xl font-semibold text-white">Faster cycles</p>
                <p className="text-sm text-slate-300">Ship campaigns and workflows in days, not weeks.</p>
              </div>
              <div>
                <p className="text-3xl font-semibold text-white">Less tool noise</p>
                <p className="text-sm text-slate-300">One coherent operating layer across content, outreach, and ops.</p>
              </div>
              <div>
                <p className="text-3xl font-semibold text-white">Higher signal</p>
                <p className="text-sm text-slate-300">Sharper positioning, cleaner data, better execution quality.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="capabilities" className="space-y-8">
          <div className="flex items-end justify-between gap-6">
            <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
              Featured capabilities
            </h2>
            <p className="max-w-md text-sm text-slate-400 md:text-base">
              Inspired by modern creator-brand structures: bold hero, high-trust proof styling,
              and modular section flow.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {capabilities.map((capability) => (
              <article
                key={capability.title}
                className="group rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-200/40"
              >
                <h3 className="text-lg font-semibold text-white">{capability.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">{capability.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-10 rounded-3xl border border-white/10 bg-white/[0.02] p-8 md:p-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">Process</h2>
            <p className="mt-4 max-w-md text-slate-300">
              Simple, transparent, and execution-first. Every phase is built to reduce friction and
              accelerate business output.
            </p>
          </div>

          <div className="grid gap-4">
            {processSteps.map((step) => (
              <article
                key={step.step}
                className="rounded-2xl border border-white/10 bg-black/20 p-5 transition hover:border-cyan-300/40"
              >
                <div className="flex items-center gap-3">
                  <span className="rounded-full border border-cyan-300/40 px-3 py-1 text-xs tracking-[0.2em] text-cyan-100">
                    {step.step}
                  </span>
                  <h3 className="font-medium text-white">{step.title}</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">{step.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">Principles</h2>
            <p className="mt-4 max-w-xl text-slate-300">
              We borrow the best from high-end personal-brand websites: clarity in hierarchy,
              restraint in color, and interaction details that feel polished without slowing performance.
            </p>
          </div>
          <ul className="grid gap-3">
            {principles.map((principle) => (
              <li
                key={principle}
                className="rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4 text-slate-200"
              >
                {principle}
              </li>
            ))}
          </ul>
        </section>

        <section className="relative overflow-hidden rounded-3xl border border-cyan-200/30 bg-gradient-to-br from-cyan-300/20 via-sky-300/10 to-blue-400/20 p-8 md:p-10">
          <div className="pointer-events-none absolute -right-12 -top-12 h-44 w-44 rounded-full bg-cyan-200/30 blur-3xl" />
          <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Ready to turn your brand operations into a clean, scalable system?
          </h2>
          <p className="mt-4 max-w-2xl text-slate-100/85">
            Tell us your bottleneck. We&apos;ll propose a practical first build and a roadmap that
            scales with your team.
          </p>
          <a
            href="mailto:hello@proflowlabsai.com"
            className="mt-7 inline-flex rounded-xl bg-white px-6 py-3 font-medium text-slate-950 transition hover:bg-cyan-50"
          >
            hello@proflowlabsai.com
          </a>
        </section>

        <footer className="flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} ProFlowLabsAI</p>
          <p>Single-page brand showcase · clean tech direction</p>
        </footer>
      </div>
    </main>
  );
}
