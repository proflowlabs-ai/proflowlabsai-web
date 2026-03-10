const logos = ["SaaS", "Ecommerce", "B2B Services", "Education", "Healthcare", "Finance"];

const icpItems = [
  "Founders and growth teams who are losing deals due to slow follow-up.",
  "Service businesses buried in repetitive admin and manual delivery steps.",
  "Sales teams with disconnected tools, fragmented data, and unclear ownership.",
  "Marketing teams that need quality pipeline, not more noisy campaigns.",
];

const capabilities = [
  {
    title: "Lead Intelligence + Outreach Automation",
    description:
      "Capture buying signals, enrich accounts, and trigger personalized outreach with human approval checkpoints.",
    useCase: "Use case: Turn outbound from spreadsheet chaos into a daily qualified pipeline engine.",
  },
  {
    title: "Content-to-Pipeline Systems",
    description:
      "Build workflows that repurpose one strategic idea into channel-ready assets and campaign sequences.",
    useCase: "Use case: Publish faster while tying content directly to booked calls and CRM actions.",
  },
  {
    title: "Operations Automation Layer",
    description:
      "Connect CRM, inbox, docs, and internal tools so recurring workflows execute reliably in the background.",
    useCase: "Use case: Remove repetitive handoffs and reclaim team capacity for high-value work.",
  },
];

const exampleSystems = [
  {
    title: "Signal-to-Meeting Engine",
    description: "Monitors market and social signals, enriches accounts, drafts relevant outreach, and books calls.",
  },
  {
    title: "Inbound Qualification Router",
    description: "Scores inbound leads in real time and routes each deal to the right owner with context.",
  },
  {
    title: "Content Repurposing Pipeline",
    description: "Transforms one long-form source into short-form assets, newsletter drafts, and campaign snippets.",
  },
  {
    title: "Delivery Ops Copilot",
    description: "Automates onboarding, project status updates, and client-facing reporting across the stack.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Diagnose the bottleneck",
    description: "We map where revenue or delivery flow breaks, then define the highest-leverage first system.",
  },
  {
    step: "02",
    title: "Build and launch fast",
    description: "You get a production-ready automation system with clear ownership, safeguards, and documentation.",
  },
  {
    step: "03",
    title: "Optimize for scale",
    description: "We track outcomes, refine prompts and logic, and expand what works into a repeatable operating layer.",
  },
];

const proofItems = [
  { metric: "37%", label: "faster lead response time", detail: "B2B services client in first 30 days" },
  { metric: "2.4x", label: "qualified meetings booked", detail: "signal-based outreach system" },
  { metric: "18h/week", label: "manual work removed", detail: "ops automation across delivery + reporting" },
];

const packages = [
  {
    name: "Foundation Sprint",
    price: "Starting at €4k",
    description: "One high-impact workflow designed, shipped, and documented in 2-3 weeks.",
  },
  {
    name: "Growth System",
    price: "Starting at €8k",
    description: "Multi-workflow automation layer across sales, marketing, or operations with KPI tracking.",
  },
  {
    name: "Custom Engagement",
    price: "Custom",
    description: "For teams needing end-to-end architecture, integrations, and ongoing optimization support.",
  },
];

const principles = [
  "Automate outcomes, not busywork.",
  "Keep humans in control of critical decisions.",
  "Ship practical systems before chasing complexity.",
  "Measure impact in revenue, speed, and reliability.",
];

const faqs = [
  {
    q: "How fast can we launch the first system?",
    a: "Most clients go live with the first production workflow in 2-4 weeks depending on scope and integrations.",
  },
  {
    q: "Do you replace our team?",
    a: "No. We remove repetitive execution load so your team can focus on high-value decisions, messaging, and closing.",
  },
  {
    q: "What tools do you work with?",
    a: "We work across modern stacks including HubSpot, Pipedrive, Notion, Slack, Google Workspace, and API-first tools.",
  },
  {
    q: "What if we need ongoing support?",
    a: "After build, you can continue with optimization support to improve performance and expand into new workflows.",
  },
];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#04070d] text-slate-100">
      <div className="pointer-events-none absolute inset-0 hero-grid opacity-40" />
      <div className="pointer-events-none absolute -top-48 left-1/2 h-[38rem] w-[38rem] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[130px]" />
      <div className="pointer-events-none absolute right-0 top-72 h-72 w-72 rounded-full bg-blue-500/10 blur-[120px]" />

      <div className="mx-auto flex w-full max-w-6xl flex-col gap-20 px-6 pb-16 pt-10 md:px-10 md:pt-14">
        <header className="flex items-center justify-between border-b border-white/10 pb-5">
          <div className="text-sm tracking-[0.24em] text-slate-300">PROFLOWLABSAI</div>
          <a
            href="mailto:hello@proflowlabsai.com"
            className="rounded-full border border-cyan-300/40 px-4 py-2 text-xs font-medium text-cyan-100 transition hover:border-cyan-200 hover:bg-cyan-300/10"
          >
            Book a call
          </a>
        </header>

        <section className="relative grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div className="space-y-8">
            <span className="inline-flex rounded-full border border-white/15 bg-white/5 px-4 py-1 text-xs uppercase tracking-[0.2em] text-cyan-100/90">
              AI Automation Agency
            </span>
            <h1 className="max-w-4xl text-balance text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl">
              We build AI systems that help growth-stage teams close more deals with less manual work.
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-slate-300 md:text-xl">
              For B2B founders and operators, we design and deploy practical automation workflows across
              outreach, content, and operations—so execution gets faster and revenue becomes more predictable.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="mailto:hello@proflowlabsai.com"
                className="rounded-xl bg-cyan-300 px-6 py-3 font-medium text-slate-950 transition hover:bg-cyan-200"
              >
                Book strategy call
              </a>
              <a
                href="#systems"
                className="rounded-xl border border-white/20 px-6 py-3 font-medium text-slate-100 transition hover:border-cyan-200/70 hover:bg-white/5"
              >
                See example systems
              </a>
            </div>
          </div>

          <div className="float-card rounded-2xl border border-white/15 bg-white/[0.03] p-6 backdrop-blur-xl">
            <p className="text-xs uppercase tracking-[0.2em] text-cyan-100/80">Typical outcomes</p>
            <div className="mt-5 space-y-4">
              <div>
                <p className="text-3xl font-semibold text-white">More meetings</p>
                <p className="text-sm text-slate-300">Better targeting + faster outreach loops.</p>
              </div>
              <div>
                <p className="text-3xl font-semibold text-white">Faster execution</p>
                <p className="text-sm text-slate-300">Systems replacing repetitive tasks across teams.</p>
              </div>
              <div>
                <p className="text-3xl font-semibold text-white">Clear visibility</p>
                <p className="text-sm text-slate-300">Automations tied to measurable business outcomes.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Trusted by teams in</p>
          <div className="mt-4 grid grid-cols-2 gap-3 text-sm text-slate-300 md:grid-cols-6">
            {logos.map((logo) => (
              <div key={logo} className="rounded-lg border border-white/10 bg-black/20 px-4 py-3 text-center">
                {logo}
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-2">
          <article className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-6">
            <p className="text-xs uppercase tracking-[0.2em] text-cyan-100/80">Problem</p>
            <h2 className="mt-3 text-2xl font-semibold text-white md:text-3xl">Most teams have tools, not systems.</h2>
            <p className="mt-3 text-slate-300">
              Leads go cold, content gets delayed, and operations rely on manual handoffs that don&apos;t scale.
            </p>
          </article>
          <article className="rounded-2xl border border-cyan-200/30 bg-cyan-300/10 p-6">
            <p className="text-xs uppercase tracking-[0.2em] text-cyan-100/90">Outcome</p>
            <h2 className="mt-3 text-2xl font-semibold text-white md:text-3xl">A reliable growth engine.</h2>
            <p className="mt-3 text-slate-100/90">
              Your workflows run with consistency, your team moves faster, and every system supports revenue goals.
            </p>
          </article>
        </section>

        <section>
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">Who this is for</h2>
          <ul className="mt-6 grid gap-3">
            {icpItems.map((item) => (
              <li key={item} className="rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4 text-slate-200">
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section id="capabilities" className="space-y-8">
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">Capabilities</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {capabilities.map((capability) => (
              <article
                key={capability.title}
                className="group rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-200/40"
              >
                <h3 className="text-lg font-semibold text-white">{capability.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">{capability.description}</p>
                <p className="mt-4 text-sm text-cyan-100/90">{capability.useCase}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="systems" className="space-y-8">
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">Example systems</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {exampleSystems.map((system) => (
              <article key={system.title} className="rounded-2xl border border-white/10 bg-black/20 p-6 transition hover:border-cyan-300/40">
                <h3 className="text-xl font-semibold text-white">{system.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">{system.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-10 rounded-3xl border border-white/10 bg-white/[0.02] p-8 md:p-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">Process</h2>
            <p className="mt-4 max-w-md text-slate-300">Clear scope. Fast delivery. No black-box agency process.</p>
          </div>
          <div className="grid gap-4">
            {processSteps.map((step) => (
              <article key={step.step} className="rounded-2xl border border-white/10 bg-black/20 p-5 transition hover:border-cyan-300/40">
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

        <section className="space-y-8">
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">Selected work</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {proofItems.map((item) => (
              <article key={item.label} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <p className="text-4xl font-semibold text-white">{item.metric}</p>
                <p className="mt-2 text-slate-200">{item.label}</p>
                <p className="mt-2 text-sm text-slate-400">{item.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="space-y-8">
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">Packages</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {packages.map((pkg) => (
              <article key={pkg.name} className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-6">
                <h3 className="text-xl font-semibold text-white">{pkg.name}</h3>
                <p className="mt-2 text-cyan-100">{pkg.price}</p>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">{pkg.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">Principles</h2>
            <p className="mt-4 max-w-xl text-slate-300">
              Every system is designed for trust, controllability, and business relevance—not flashy automation for its own sake.
            </p>
          </div>
          <ul className="grid gap-3">
            {principles.map((principle) => (
              <li key={principle} className="rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4 text-slate-200">
                {principle}
              </li>
            ))}
          </ul>
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">FAQ</h2>
          <div className="grid gap-4">
            {faqs.map((faq) => (
              <article key={faq.q} className="rounded-2xl border border-white/10 bg-black/20 p-6">
                <h3 className="text-lg font-semibold text-white">{faq.q}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">{faq.a}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="relative overflow-hidden rounded-3xl border border-cyan-200/30 bg-gradient-to-br from-cyan-300/20 via-sky-300/10 to-blue-400/20 p-8 md:p-10">
          <div className="pointer-events-none absolute -right-12 -top-12 h-44 w-44 rounded-full bg-cyan-200/30 blur-3xl" />
          <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Ready to install your AI growth infrastructure?
          </h2>
          <p className="mt-4 max-w-2xl text-slate-100/85">
            Tell us your bottleneck and goals. We&apos;ll map the fastest path to a working automation system.
          </p>
          <div className="mt-7 flex flex-wrap gap-4">
            <a href="mailto:hello@proflowlabsai.com" className="inline-flex rounded-xl bg-white px-6 py-3 font-medium text-slate-950 transition hover:bg-cyan-50">
              Book strategy call
            </a>
            <a href="mailto:hello@proflowlabsai.com" className="inline-flex rounded-xl border border-white/40 px-6 py-3 font-medium text-white transition hover:bg-white/10">
              hello@proflowlabsai.com
            </a>
          </div>
        </section>

        <footer className="flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} ProFlowLabsAI</p>
          <p>AI automation systems for sales, marketing, and operations.</p>
        </footer>
      </div>
    </main>
  );
}
