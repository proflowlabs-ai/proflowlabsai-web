"use client";

import { useEffect, useState } from "react";
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
    index: "01",
    title: "Lead Intelligence + Outreach Automation",
    description:
      "Capture buying signals, enrich accounts, and trigger personalized outreach with human approval checkpoints.",
    useCase: "Turn outbound from spreadsheet chaos into a daily qualified pipeline engine.",
  },
  {
    index: "02",
    title: "Content-to-Pipeline Systems",
    description:
      "Build workflows that repurpose one strategic idea into channel-ready assets and campaign sequences.",
    useCase: "Publish faster while tying content directly to booked calls and CRM actions.",
  },
  {
    index: "03",
    title: "Operations Automation Layer",
    description:
      "Connect CRM, inbox, docs, and internal tools so recurring workflows execute reliably in the background.",
    useCase: "Remove repetitive handoffs and reclaim team capacity for high-value work.",
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
    description: "One high-impact workflow designed, shipped, and documented in 2–3 weeks.",
    featured: false,
  },
  {
    name: "Growth System",
    price: "Starting at €8k",
    description: "Multi-workflow automation layer across sales, marketing, or operations with KPI tracking.",
    featured: true,
  },
  {
    name: "Custom Engagement",
    price: "Custom",
    description: "For teams needing end-to-end architecture, integrations, and ongoing optimization support.",
    featured: false,
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
    a: "Most clients go live with the first production workflow in 2–4 weeks depending on scope and integrations.",
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
  const [openFaq, setOpenFaq] = useState<number | null>(null);

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
      { threshold: 0.1, rootMargin: "0px 0px -8% 0px" },
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

      <div className="mx-auto flex w-full max-w-6xl flex-col gap-24 px-6 pb-16 pt-10 md:px-10 md:pt-14">

        {/* ── Header ──────────────────────────────────────── */}
        <header className="hero-item flex items-center justify-between border-b border-white/10 pb-5">
          <div className="font-body text-sm tracking-[0.24em] text-[var(--text-muted)]">PROFLOWLABSAI</div>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <a href="mailto:hello@proflowlabsai.com" className="pill-button text-xs">
              Book a call
            </a>
          </div>
        </header>

        {/* ── Hero ────────────────────────────────────────── */}
        <section className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-start lg:gap-10">
          <div className="space-y-8">
            <span className="hero-item inline-flex rounded-full border border-white/15 bg-white/5 px-4 py-1 text-xs uppercase tracking-[0.2em] text-[var(--accent-strong)]">
              AI Automation Agency
            </span>

            <h1
              className="hero-item font-display text-balance leading-[0.92] tracking-[-0.04em] text-[var(--text-primary)]"
              style={{ fontSize: "clamp(3.2rem, 7.5vw, 6.4rem)" }}
            >
              AI Systems That
              <br />
              <span className="text-gradient">Compound Revenue.</span>
            </h1>

            <p className="hero-item max-w-xl text-lg leading-relaxed text-[var(--text-muted)] md:text-xl">
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

            <div className="hero-item flex flex-wrap gap-6 border-t border-white/8 pt-6">
              <div className="inline-stat">
                <span className="inline-stat-value">2–4 wks</span>
                <span className="inline-stat-label">to first live system</span>
              </div>
              <div className="inline-stat">
                <span className="inline-stat-value">3</span>
                <span className="inline-stat-label">automation types</span>
              </div>
              <div className="inline-stat">
                <span className="inline-stat-value">€4k+</span>
                <span className="inline-stat-label">starting investment</span>
              </div>
            </div>
          </div>

          <div className="hero-item surface-card card-hover p-7">
            <p className="section-label">Typical outcomes</p>
            <div className="mt-3 space-y-5">
              <div className="border-b border-white/6 pb-5">
                <p className="font-display text-2xl text-[var(--text-primary)]">More meetings</p>
                <p className="mt-1.5 text-sm leading-relaxed text-[var(--text-muted)]">
                  Better targeting + faster outreach loops.
                </p>
              </div>
              <div className="border-b border-white/6 pb-5">
                <p className="font-display text-2xl text-[var(--text-primary)]">Faster execution</p>
                <p className="mt-1.5 text-sm leading-relaxed text-[var(--text-muted)]">
                  Systems replacing repetitive tasks across teams.
                </p>
              </div>
              <div>
                <p className="font-display text-2xl text-[var(--text-primary)]">Clear visibility</p>
                <p className="mt-1.5 text-sm leading-relaxed text-[var(--text-muted)]">
                  Automations tied to measurable business outcomes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Trust Marquee ────────────────────────────────── */}
        <section className="reveal trust-marquee-wrapper surface-card-soft p-5" aria-label="Trusted industries">
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--text-soft)]">Built for teams across</p>
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

        {/* ── Problem / Solution ───────────────────────────── */}
        <section className="reveal grid gap-5 md:grid-cols-2">
          <article className="surface-card card-hover p-7">
            <p className="section-label" style={{ color: "var(--text-soft)" }}>The Problem</p>
            <h2 className="font-display mt-1 text-2xl text-[var(--text-primary)] md:text-3xl">
              Most teams have tools, not systems.
            </h2>
            <p className="mt-4 leading-relaxed text-[var(--text-muted)]">
              Leads go cold, content gets delayed, and operations rely on manual handoffs that don&apos;t scale.
            </p>
          </article>
          <article
            className="surface-card card-hover p-7"
            style={{ borderColor: "rgba(145, 243, 255, 0.2)" }}
          >
            <p className="section-label">The Outcome</p>
            <h2 className="font-display mt-1 text-2xl text-[var(--text-primary)] md:text-3xl">
              A reliable growth engine.
            </h2>
            <p className="mt-4 leading-relaxed text-[var(--text-secondary)]">
              Your workflows run with consistency, your team moves faster, and every system supports revenue goals.
            </p>
          </article>
        </section>

        {/* ── ICP ─────────────────────────────────────────── */}
        <section className="reveal">
          <p className="section-label">Who This Is For</p>
          <h2 className="font-display text-3xl tracking-tight text-[var(--text-primary)] md:text-4xl">
            Built for operators who need results.
          </h2>
          <ul className="mt-7 grid gap-3">
            {icpItems.map((item, index) => (
              <li
                key={item}
                className="reveal surface-card-soft card-hover flex items-start gap-4 rounded-xl px-5 py-4"
                style={{ transitionDelay: `${index * 75}ms` }}
              >
                <span className="font-display mt-0.5 shrink-0 text-sm font-bold text-[var(--accent-soft)] opacity-55">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-[var(--text-secondary)]">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* ── Capabilities ────────────────────────────────── */}
        <section id="capabilities" className="reveal space-y-8">
          <div>
            <p className="section-label">Capabilities</p>
            <h2 className="font-display text-3xl tracking-tight text-[var(--text-primary)] md:text-4xl">
              What we build for you.
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {capabilities.map((capability, index) => (
              <article
                key={capability.title}
                className="reveal surface-card card-hover relative overflow-hidden p-6"
                style={{ transitionDelay: `${index * 85}ms` }}
              >
                <span className="pointer-events-none absolute -right-2 -top-4 select-none font-display text-[7rem] font-black leading-none text-[var(--text-primary)] opacity-[0.04]">
                  {capability.index}
                </span>
                <span className="font-display text-sm font-bold text-[var(--accent-soft)] opacity-65">
                  {capability.index}
                </span>
                <h3 className="font-display mt-3 text-xl text-[var(--text-primary)]">{capability.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">{capability.description}</p>
                <p className="mt-4 border-t border-white/6 pt-4 text-xs leading-relaxed text-[var(--accent-strong)]">
                  {capability.useCase}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* ── Example Systems ──────────────────────────────── */}
        <section id="systems" className="reveal space-y-8">
          <div>
            <p className="section-label">Example Systems</p>
            <h2 className="font-display text-3xl tracking-tight text-[var(--text-primary)] md:text-4xl">
              Pre-architected for common bottlenecks.
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {exampleSystems.map((system, index) => (
              <article
                key={system.title}
                className="reveal surface-card card-hover p-6"
                style={{ transitionDelay: `${index * 90}ms` }}
              >
                <h3 className="font-display text-xl text-[var(--text-primary)]">{system.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">{system.description}</p>
              </article>
            ))}
          </div>
        </section>

        {/* ── Process ─────────────────────────────────────── */}
        <section className="reveal surface-card-soft rounded-3xl p-8 md:p-10">
          <div className="mb-8">
            <p className="section-label">Process</p>
            <h2 className="font-display text-3xl tracking-tight text-[var(--text-primary)] md:text-4xl">
              Clear scope. Fast delivery.
            </h2>
            <p className="mt-3 max-w-md text-[var(--text-muted)]">
              No black-box agency process. You see every step.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {processSteps.map((step, index) => (
              <article
                key={step.step}
                className="reveal surface-card card-hover relative overflow-hidden p-6"
                style={{ transitionDelay: `${index * 90}ms` }}
              >
                <span className="pointer-events-none absolute -bottom-6 -right-2 select-none font-display text-[6rem] font-black leading-none text-[var(--text-primary)] opacity-[0.04]">
                  {step.step}
                </span>
                <div className="relative">
                  <span className="inline-flex rounded-full border border-cyan-300/36 px-2.5 py-0.5 text-xs tracking-[0.18em] text-[var(--accent-soft)]">
                    {step.step}
                  </span>
                  <h3 className="font-display mt-4 text-lg text-[var(--text-primary)]">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">{step.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ── Proof ───────────────────────────────────────── */}
        <section className="reveal space-y-8">
          <div>
            <p className="section-label">Selected Work</p>
            <h2 className="font-display text-3xl tracking-tight text-[var(--text-primary)] md:text-4xl">
              Outcomes from past projects.
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[var(--text-muted)]">
              Anonymized highlights. They illustrate what&apos;s possible with the right inputs—results vary by context.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {proofItems.map((item, index) => (
              <article
                key={item.label}
                className="reveal surface-card card-hover p-6"
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <p
                  className="section-label"
                  style={{ color: "var(--text-soft)", fontSize: "0.62rem" }}
                >
                  {item.metric}
                </p>
                <p className="font-display mt-2 text-xl text-[var(--text-primary)]">{item.label}</p>
                <p className="mt-3 text-sm leading-relaxed text-[var(--text-soft)]">{item.detail}</p>
              </article>
            ))}
          </div>
        </section>

        {/* ── Packages ────────────────────────────────────── */}
        <section className="reveal space-y-8">
          <div>
            <p className="section-label">Packages</p>
            <h2 className="font-display text-3xl tracking-tight text-[var(--text-primary)] md:text-4xl">
              Choose your starting point.
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {packages.map((pkg, index) => (
              <article
                key={pkg.name}
                className={`reveal card-hover flex flex-col p-6 ${pkg.featured ? "featured-card" : "surface-card"}`}
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                {pkg.featured && <span className="featured-badge">Most Popular</span>}
                <h3 className="font-display text-2xl text-[var(--text-primary)]">{pkg.name}</h3>
                <p className="mt-2 text-lg font-medium text-[var(--accent-soft)]">{pkg.price}</p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--text-muted)]">{pkg.description}</p>
                <a
                  href="mailto:hello@proflowlabsai.com"
                  className={`mt-5 inline-flex w-full items-center justify-center rounded-xl py-2.5 text-sm font-semibold transition-all duration-200 ${
                    pkg.featured
                      ? "bg-[var(--accent-soft)] accent-btn-text hover:opacity-90"
                      : "border border-white/14 text-[var(--text-secondary)] hover:border-white/26 hover:bg-white/4"
                  }`}
                >
                  Get started
                </a>
              </article>
            ))}
          </div>
        </section>

        {/* ── Principles ──────────────────────────────────── */}
        <section className="reveal grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="section-label">Principles</p>
            <h2 className="font-display text-3xl tracking-tight text-[var(--text-primary)] md:text-4xl">
              Designed for trust and control.
            </h2>
            <p className="mt-4 max-w-xl text-[var(--text-muted)]">
              Every system is built for controllability and business relevance—not flashy automation for its own sake.
            </p>
          </div>
          <ul className="grid gap-3 self-center">
            {principles.map((principle, index) => (
              <li
                key={principle}
                className="reveal surface-card-soft card-hover flex items-center gap-3 rounded-xl px-5 py-4"
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent-soft)] opacity-65" />
                <span className="text-[var(--text-secondary)]">{principle}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* ── FAQ ─────────────────────────────────────────── */}
        <section className="reveal space-y-6">
          <div>
            <p className="section-label">FAQ</p>
            <h2 className="font-display text-3xl tracking-tight text-[var(--text-primary)] md:text-4xl">
              Common questions.
            </h2>
          </div>
          <div className="grid gap-3">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={faq.q}
                  className={`reveal accordion-item ${isOpen ? "is-open" : ""}`}
                  style={{ transitionDelay: `${index * 60}ms` }}
                >
                  <button
                    type="button"
                    className="accordion-trigger"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    aria-expanded={isOpen}
                  >
                    <span>{faq.q}</span>
                    <span className="accordion-chevron" aria-hidden>+</span>
                  </button>
                  <div className="accordion-body">
                    <div className="accordion-body-inner">{faq.a}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ── CTA Section ─────────────────────────────────── */}
        <section
          className="reveal relative overflow-hidden rounded-3xl p-8 md:p-12"
          style={{
            background:
              "linear-gradient(135deg, rgba(73, 198, 255, 0.16) 0%, rgba(74, 84, 255, 0.1) 50%, rgba(106, 248, 220, 0.13) 100%)",
            border: "1px solid rgba(145, 243, 255, 0.26)",
          }}
        >
          <div className="pointer-events-none absolute -right-16 -top-16 h-72 w-72 rounded-full bg-cyan-300/15 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 left-1/3 h-56 w-56 rounded-full bg-sky-400/10 blur-3xl" />

          <div className="relative">
            <p className="section-label">Ready to start?</p>
            <h2
              className="font-display max-w-2xl text-balance tracking-[-0.03em] text-[var(--text-primary)]"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
            >
              Install your AI growth infrastructure.
            </h2>
            <p className="mt-4 max-w-xl text-lg text-[var(--text-secondary)]/85">
              Tell us your bottleneck and goals. We&apos;ll map the fastest path to a working automation system.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="mailto:hello@proflowlabsai.com"
                className="inline-flex rounded-xl bg-white px-6 py-3.5 font-semibold text-slate-950 transition hover:bg-cyan-50"
              >
                Book strategy call
              </a>
              <a
                href="mailto:hello@proflowlabsai.com"
                className="inline-flex rounded-xl border border-white/34 px-6 py-3.5 font-medium text-[var(--text-primary)] transition hover:bg-white/8"
              >
                hello@proflowlabsai.com
              </a>
            </div>
          </div>
        </section>

        {/* ── Footer ──────────────────────────────────────── */}
        <footer className="reveal flex flex-col gap-4 border-t border-white/8 pt-8 text-sm text-[var(--text-soft)] sm:flex-row sm:items-center sm:justify-between">
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
