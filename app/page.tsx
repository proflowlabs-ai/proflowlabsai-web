"use client";

import { useEffect } from "react";
import { CustomCursor } from "./components/custom-cursor";
import { ScrollTopProgress } from "./components/scroll-top-progress";
import { ThemeToggle } from "./components/theme-toggle";

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
  {
    metric: "Example outcome",
    label: "Faster lead-response workflows",
    detail: "Past B2B service projects often improved response speed after rollout; results vary by team and baseline.",
  },
  {
    metric: "Typical pattern",
    label: "Higher quality conversations",
    detail: "Anonymized outreach systems have helped teams create steadier meeting flow with better-fit prospects.",
  },
  {
    metric: "Operational lift",
    label: "Less manual coordination",
    detail: "Delivery and reporting automations frequently reduce repetitive admin load across core processes.",
  },
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
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16, rootMargin: "0px 0px -8% 0px" },
    );

    elements.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[var(--background)] text-[var(--foreground)]">
      <CustomCursor />
      <div className="aurora" />
      <div className="grain" />
      <div className="pointer-events-none absolute inset-0 tech-grid opacity-60" />

      <div className="mx-auto flex w-full max-w-6xl flex-col gap-20 px-6 pb-16 pt-10 md:px-10 md:pt-14">
        <header className="hero-item flex items-center justify-between border-b border-white/12 pb-5">
          <div className="font-body text-sm tracking-[0.24em] text-[var(--text-muted)]">PROFLOWLABSAI</div>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <a href="mailto:hello@proflowlabsai.com" className="pill-button text-xs text-[var(--text-secondary)]">
              Book a call
            </a>
          </div>
        </header>

        <section className="grid gap-10 lg:grid-cols-[1.16fr_0.84fr] lg:items-end">
          <div className="space-y-8">
            <span className="hero-item inline-flex rounded-full border border-white/15 bg-white/5 px-4 py-1 text-xs uppercase tracking-[0.2em] text-[var(--accent-strong)]">
              AI Automation Agency
            </span>
            <h1 className="hero-item font-display max-w-4xl text-balance text-5xl leading-[0.95] tracking-[-0.03em] text-[var(--text-primary)] md:text-7xl">
              AI Systems That Compound Revenue.
            </h1>
            <p className="hero-item max-w-2xl text-lg leading-relaxed text-[var(--text-muted)] md:text-xl">
              For B2B founders and operators, we design and deploy practical automation workflows across outreach,
              content, and operations—so execution gets faster and revenue becomes more predictable.
            </p>
            <div className="hero-item flex flex-wrap gap-4">
              <a href="mailto:hello@proflowlabsai.com" className="primary-button">
                Book strategy call
              </a>
              <a href="#systems" className="secondary-button">
                See example systems
              </a>
            </div>
          </div>

          <div className="hero-item glass-panel card-hover p-6">
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--accent-soft)]">Typical outcomes</p>
            <div className="mt-5 space-y-4">
              <div>
                <p className="font-display text-3xl text-[var(--text-primary)]">More meetings</p>
                <p className="text-sm text-[var(--text-muted)]">Better targeting + faster outreach loops.</p>
              </div>
              <div>
                <p className="font-display text-3xl text-[var(--text-primary)]">Faster execution</p>
                <p className="text-sm text-[var(--text-muted)]">Systems replacing repetitive tasks across teams.</p>
              </div>
              <div>
                <p className="font-display text-3xl text-[var(--text-primary)]">Clear visibility</p>
                <p className="text-sm text-[var(--text-muted)]">Automations tied to measurable business outcomes.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="reveal trust-marquee-wrapper rounded-2xl border border-white/10 bg-white/[0.02] p-6" aria-label="Trusted industries">
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--text-soft)]">Trusted by teams in</p>
          <p className="sr-only">SaaS, Ecommerce, B2B Services, Education, Healthcare, Finance.</p>
          <div className="trust-marquee mt-4" role="region" aria-live="off">
            <div className="trust-marquee-track">
              {[...logos, ...logos].map((logo, index) => (
                <span key={`${logo}-${index}`} className="trust-pill" aria-hidden={index >= logos.length}>
                  {logo}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="reveal grid gap-6 md:grid-cols-2">
          <article className="glass-panel card-hover p-6">
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--accent-soft)]">Problem</p>
            <h2 className="font-display mt-3 text-2xl text-[var(--text-primary)] md:text-3xl">Most teams have tools, not systems.</h2>
            <p className="mt-3 text-[var(--text-muted)]">
              Leads go cold, content gets delayed, and operations rely on manual handoffs that don&apos;t scale.
            </p>
          </article>
          <article className="card-hover rounded-2xl border border-cyan-200/30 bg-cyan-300/10 p-6">
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--accent-strong)]">Outcome</p>
            <h2 className="font-display mt-3 text-2xl text-[var(--text-primary)] md:text-3xl">A reliable growth engine.</h2>
            <p className="mt-3 text-[var(--text-secondary)]">
              Your workflows run with consistency, your team moves faster, and every system supports revenue goals.
            </p>
          </article>
        </section>

        <section className="reveal">
          <h2 className="font-display text-3xl tracking-tight text-[var(--text-primary)] md:text-4xl">Who this is for</h2>
          <ul className="mt-6 grid gap-3">
            {icpItems.map((item, index) => (
              <li key={item} className="reveal card-hover rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4 text-[var(--text-secondary)]" style={{ transitionDelay: `${index * 80}ms` }}>
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section id="capabilities" className="reveal space-y-8">
          <h2 className="font-display text-3xl tracking-tight text-[var(--text-primary)] md:text-4xl">Capabilities</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {capabilities.map((capability, index) => (
              <article
                key={capability.title}
                className="reveal card-hover rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.08] to-white/[0.02] p-6"
                style={{ transitionDelay: `${index * 85}ms` }}
              >
                <h3 className="font-display text-xl text-[var(--text-primary)]">{capability.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">{capability.description}</p>
                <p className="mt-4 text-sm text-[var(--accent-strong)]">{capability.useCase}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="systems" className="reveal space-y-8">
          <h2 className="font-display text-3xl tracking-tight text-[var(--text-primary)] md:text-4xl">Example systems</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {exampleSystems.map((system, index) => (
              <article
                key={system.title}
                className="reveal card-hover rounded-2xl border border-white/10 bg-black/25 p-6"
                style={{ transitionDelay: `${index * 90}ms` }}
              >
                <h3 className="font-display text-2xl text-[var(--text-primary)]">{system.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">{system.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="reveal grid gap-10 rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="font-display text-3xl tracking-tight text-[var(--text-primary)] md:text-4xl">Process</h2>
            <p className="mt-4 max-w-md text-[var(--text-muted)]">Clear scope. Fast delivery. No black-box agency process.</p>
          </div>
          <div className="grid gap-4">
            {processSteps.map((step, index) => (
              <article
                key={step.step}
                className="reveal card-hover rounded-2xl border border-white/10 bg-black/20 p-5"
                style={{ transitionDelay: `${index * 90}ms` }}
              >
                <div className="flex items-center gap-3">
                  <span className="rounded-full border border-cyan-300/40 px-3 py-1 text-xs tracking-[0.2em] text-[var(--accent-soft)]">
                    {step.step}
                  </span>
                  <h3 className="font-medium text-[var(--text-primary)]">{step.title}</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">{step.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="reveal space-y-8">
          <h2 className="font-display text-3xl tracking-tight text-[var(--text-primary)] md:text-4xl">Selected work</h2>
          <p className="max-w-3xl text-sm leading-relaxed text-[var(--text-muted)]">
            Example outcomes from past project highlights (anonymized). They illustrate what&apos;s possible with the
            right inputs and execution quality—results vary by context.
          </p>
          <div className="grid gap-4 md:grid-cols-3">
            {proofItems.map((item, index) => (
              <article
                key={item.label}
                className="reveal card-hover rounded-2xl border border-white/10 bg-white/[0.04] p-6"
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <p className="font-display text-5xl text-[var(--text-primary)]">{item.metric}</p>
                <p className="mt-2 text-[var(--text-secondary)]">{item.label}</p>
                <p className="mt-2 text-sm text-[var(--text-soft)]">{item.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="reveal space-y-8">
          <h2 className="font-display text-3xl tracking-tight text-[var(--text-primary)] md:text-4xl">Packages</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {packages.map((pkg, index) => (
              <article
                key={pkg.name}
                className="reveal card-hover rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.08] to-white/[0.02] p-6"
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <h3 className="font-display text-2xl text-[var(--text-primary)]">{pkg.name}</h3>
                <p className="mt-2 text-[var(--accent-soft)]">{pkg.price}</p>
                <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">{pkg.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="reveal grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="font-display text-3xl tracking-tight text-[var(--text-primary)] md:text-4xl">Principles</h2>
            <p className="mt-4 max-w-xl text-[var(--text-muted)]">
              Every system is designed for trust, controllability, and business relevance—not flashy automation for
              its own sake.
            </p>
          </div>
          <ul className="grid gap-3">
            {principles.map((principle, index) => (
              <li
                key={principle}
                className="reveal card-hover rounded-xl border border-white/10 bg-white/[0.04] px-5 py-4 text-[var(--text-secondary)]"
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                {principle}
              </li>
            ))}
          </ul>
        </section>

        <section className="reveal space-y-6">
          <h2 className="font-display text-3xl tracking-tight text-[var(--text-primary)] md:text-4xl">FAQ</h2>
          <div className="grid gap-4">
            {faqs.map((faq, index) => (
              <article
                key={faq.q}
                className="reveal card-hover rounded-2xl border border-white/10 bg-black/25 p-6"
                style={{ transitionDelay: `${index * 70}ms` }}
              >
                <h3 className="font-display text-2xl text-[var(--text-primary)]">{faq.q}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">{faq.a}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="reveal relative overflow-hidden rounded-3xl border border-cyan-200/30 bg-gradient-to-br from-cyan-300/20 via-sky-300/10 to-blue-400/20 p-8 md:p-10">
          <div className="pointer-events-none absolute -right-12 -top-12 h-44 w-44 rounded-full bg-cyan-200/30 blur-3xl" />
          <h2 className="font-display max-w-2xl text-4xl tracking-tight text-[var(--text-primary)] md:text-5xl">
            Ready to install your AI growth infrastructure?
          </h2>
          <p className="mt-4 max-w-2xl text-[var(--text-secondary)]/85">
            Tell us your bottleneck and goals. We&apos;ll map the fastest path to a working automation system.
          </p>
          <div className="mt-7 flex flex-wrap gap-4">
            <a href="mailto:hello@proflowlabsai.com" className="inline-flex rounded-xl bg-white px-6 py-3 font-medium text-slate-950 transition hover:bg-cyan-50">
              Book strategy call
            </a>
            <a href="mailto:hello@proflowlabsai.com" className="inline-flex rounded-xl border border-white/40 px-6 py-3 font-medium text-[var(--text-primary)] transition hover:bg-white/10">
              hello@proflowlabsai.com
            </a>
          </div>
        </section>

        <footer className="reveal flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-[var(--text-soft)] sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} ProFlowLabsAI</p>
          <div className="flex flex-wrap items-center gap-4 sm:justify-end">
            <a href="/imprint" className="transition hover:text-[var(--text-secondary)]">Imprint</a>
            <a href="/privacy" className="transition hover:text-[var(--text-secondary)]">Privacy</a>
          </div>
        </footer>
      </div>
      <ScrollTopProgress />
    </main>
  );
}
