import { motion } from 'framer-motion'
import { Button, FinalCta, Panel } from '../components/Layout'
import { FadeIn } from '../components/Motion'

const services = [
  {
    id: 'web-app-development',
    index: 'Track 01',
    title: 'MVP and web app development for pre-seed to Series A startups',
    intro:
      "If you're raising, testing a market, or replacing a technical co-founder who left, you need working software - not a deck describing working software. This is startup MVP development built around one goal: get you to a product you can put in front of users or investors.",
    good: [
      'Technical scoping session before any code is written - we tell you what is actually buildable in your timeline and budget',
      'A fixed-price, fixed-scope build (not open-ended hourly billing)',
      'Weekly working demos, not a black box until launch day',
      'Source code and infrastructure access - you own it outright, no vendor lock-in',
      '30 days of post-launch bug fixes included',
    ],
    build: [
      'MVPs for pre-seed and seed-stage products',
      'v2 rebuilds when a no-code MVP has hit its ceiling',
      'Internal tools and admin dashboards for early-stage teams',
      'API integrations connecting your product to third-party services',
    ],
    dontDo: [
      "We won’t do speculative “let's see where it goes” retainers - every engagement has a defined scope and end date, even if we later extend it",
      "We don't take equity in place of payment - we've seen how that goes for both sides",
    ],
    timeline:
      'A defined MVP typically takes 4–10 weeks depending on scope, discussed and locked before we start - see How We Work for how we price this.',
    ctaText: 'Scope your build',
  },
  {
    id: 'ai-automation',
    index: 'Track 02',
    title: 'AI automation and agentic workflows for SMBs',
    intro:
      "Most SMBs don't need a custom AI product. They need someone to sit down, watch how the team actually works, and remove the three manual steps eating six hours a week. That's practical AI automation for SMBs.",
    good: [
      'A process audit - we map your current manual workflow before proposing anything',
      'An agentic workflow built to handle repetitive decision-making, not just simple data-moving',
      'Integration with the tools you already use (CRM, email, spreadsheets, internal systems)',
      'A plain-language explanation of what the automation does and does not handle, so your team trusts it',
      'Handoff documentation your team can actually read and use',
    ],
    build: [
      'Customer inquiry triage and response drafting',
      'Data reconciliation between disconnected tools (orders, inventory, CRMs)',
      'Lead qualification and intelligent routing workflows',
      'Reporting automation that currently requires manually compiling spreadsheets',
    ],
    dontDo: [
      'We won’t sell you “AI” that\'s really just a chatbot wrapper with no actual workflow behind it',
      'We won’t automate a broken process - if the underlying process doesn\'t make sense, we\'ll say so before building around it',
    ],
    timeline:
      'Most automation builds run 2–6 weeks depending on how many systems are involved.',
    ctaText: 'Get a free process audit',
  },
]

export default function Services() {
  return (
    <>
      {/* Services Hero */}
      <section className="border-b border-[var(--line)] px-0 py-12 sm:py-18 md:py-24">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-[20ch] font-[var(--head)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight text-[var(--cream)]"
          >
            Two services. Built by the same two engineers.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 sm:mt-6 max-w-[62ch] text-base sm:text-lg md:text-xl leading-relaxed text-[var(--gray)]"
          >
            We don’t run a menu of ten offerings we’re mediocre at. We do two things - build startup software and build AI automation for SMBs - because that’s what we’re actually good at and where our senior background applies directly.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 sm:mt-8 flex flex-wrap gap-3 sm:gap-4"
          >
            <a
              className="inline-flex items-center gap-1.5 border border-[var(--line-strong)] bg-[var(--surface)] px-4 py-2 text-xs sm:text-sm font-medium text-[var(--cream)] transition-colors hover:border-[var(--copper)] hover:text-[var(--copper)]"
              href="#web-app-development"
            >
              <span>Jump to Web/App Development</span>
              <span>↓</span>
            </a>
            <a
              className="inline-flex items-center gap-1.5 border border-[var(--line-strong)] bg-[var(--surface)] px-4 py-2 text-xs sm:text-sm font-medium text-[var(--cream)] transition-colors hover:border-[var(--copper)] hover:text-[var(--copper)]"
              href="#ai-automation"
            >
              <span>Jump to AI Automation</span>
              <span>↓</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      {services.map((service) => (
        <section
          className="scroll-mt-20 sm:scroll-mt-24 border-b border-[var(--line)] px-0 py-12 sm:py-18 md:py-24"
          id={service.id}
          key={service.id}
        >
          <div className="mx-auto max-w-[960px] px-4 sm:px-6">
            <FadeIn>
              <span className="inline-block text-xs sm:text-sm font-semibold uppercase tracking-[0.12em] text-[var(--copper)]">
                {service.index}
              </span>
              <h2 className="mt-2 sm:mt-3 max-w-[26ch] font-[var(--head)] text-2xl sm:text-3xl md:text-4xl leading-tight text-[var(--cream)]">
                {service.title}
              </h2>
              <p className="mt-4 sm:mt-5 max-w-[68ch] text-base sm:text-lg leading-relaxed text-[var(--gray)]">
                {service.intro}
              </p>
            </FadeIn>

            <div className="mt-8 sm:mt-10 grid gap-6 md:grid-cols-2">
              <Panel title="What is included" items={service.good} />
              <Panel title="What we build" items={service.build} />
            </div>

            {/* What we don't do */}
            <FadeIn delay={0.1} className="mt-6 border border-[var(--line-strong)] border-l-4 border-l-[var(--line-strong)] bg-[var(--surface)] p-5 sm:p-7 md:p-8">
              <h3 className="mb-4 font-[var(--head)] text-lg sm:text-xl text-[var(--cream)]">
                What we don’t do here
              </h3>
              <ul className="flex flex-col gap-3">
                {service.dontDo.map((item, i) => (
                  <li
                    key={i}
                    className="relative pl-5 text-sm sm:text-base leading-relaxed text-[var(--gray)] before:absolute before:left-0 before:top-[0.65em] before:h-px before:w-2.5 before:bg-[var(--gray)]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </FadeIn>

            {/* Timeline Banner */}
            <FadeIn delay={0.15} className="mt-6 flex flex-col items-start justify-between gap-5 border border-[var(--line-strong)] bg-[var(--surface)] p-5 sm:p-6 md:flex-row md:items-center">
              <p className="text-sm sm:text-base text-[var(--gray)]">
                <strong className="text-[var(--copper)]">Typical timeline:</strong> {service.timeline}
              </p>
              <Button to="/contact" className="w-full shrink-0 sm:w-auto">
                {service.ctaText}
              </Button>
            </FadeIn>
          </div>
        </section>
      ))}

      <FinalCta
        title="Not sure which track fits your project?"
        description="Tell us what you're dealing with. We'll tell you honestly whether it's a build, an automation, or something else entirely."
      />
    </>
  )
}
