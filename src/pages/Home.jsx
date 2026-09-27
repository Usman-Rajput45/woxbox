import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Button, FinalCta, Panel, SectionHeading } from '../components/Layout'
import { FadeIn, StaggerContainer, StaggerItem } from '../components/Motion'
import heroImage from '../assets/woxbuiltheroimg.webp'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="border-b border-[var(--line)] px-0 py-12 sm:py-20 md:py-24 lg:py-32">
        <div className="mx-auto grid max-w-[1200px] items-center gap-8 px-4 sm:gap-12 sm:px-6 lg:grid-cols-[1.1fr_.9fr] lg:gap-16 xl:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="font-[var(--head)] text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] xl:text-6xl leading-[1.08] tracking-tight text-[var(--cream)]">
              We build the software you cannot afford to get wrong.
            </h1>
            <p className="mt-5 sm:mt-6 max-w-[54ch] text-base sm:text-lg md:text-xl leading-relaxed text-[var(--gray)]">
              WoxBuilt is a <strong className="text-[var(--cream)]">startup software development agency</strong> for founders building their first product, and an AI automation partner for SMBs still running their business on spreadsheets and group chats. We are new. We are also the two senior engineers who will actually write your code - not a project manager relaying it to someone you'll meet.
            </p>
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button to="/how-we-work" className="w-full sm:w-auto">
                See how we work
              </Button>
              <Button secondary to="/contact" className="w-full sm:w-auto">
                Book a 20-minute build call
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="h-60 sm:h-80 md:h-96 lg:h-[430px] w-full overflow-hidden border border-[var(--line-strong)] bg-[var(--surface)] shadow-lg"
          >
            <img
              className="block h-full w-full object-cover"
              src={heroImage}
              alt="Two engineers reviewing software together"
              loading="eager"
              fetchPriority="high"
              width="600"
              height="430"
            />
          </motion.div>
        </div>
      </section>

      {/* Why New Agency */}
      <section className="border-b border-[var(--line)] px-0 py-12 sm:py-18 md:py-24">
        <div className="mx-auto grid max-w-[1200px] gap-8 px-4 sm:gap-12 sm:px-6 lg:grid-cols-2 lg:gap-16 xl:gap-24">
          <div>
            <SectionHeading
              title="Why a new agency instead of an established one"
            />
          </div>
          <FadeIn direction="up" delay={0.1} className="grid max-w-[62ch] gap-5 sm:gap-6 text-base sm:text-lg leading-relaxed text-[var(--gray)]">
            <p>
              We are not going to pretend we have shipped 200 startups. We have not. What we have is <strong className="text-[var(--cream)]">10+ years each writing production software</strong> at companies that had to ship correctly the first time, and a decision to leave that to build things founders actually own.
            </p>
            <p>
              That is the trade you are making with us: lower price, direct access to the people writing your code, and a founder who answers Slack messages personally - in exchange for a shorter track record. We think that is a fair trade for the right project. If you need a 40-person agency with a case study for your exact industry, we are not it yet.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Services Grid */}
      <section className="border-b border-[var(--line)] px-0 py-12 sm:py-18 md:py-24" id="what-we-do">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
          <SectionHeading
            title="Two services. No scope creep between them."
          />
          <StaggerContainer className="grid gap-6 md:grid-cols-2">
            <StaggerItem>
              <article className="h-full flex flex-col border border-[var(--line-strong)] bg-[var(--surface)] p-6 sm:p-8 lg:p-10 transition-all duration-200 hover:border-[var(--copper)] hover:bg-[var(--surface-alt)]">
                <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-[var(--copper)]">Track 1</span>
                <h3 className="mt-4 sm:mt-6 font-[var(--head)] text-xl sm:text-2xl leading-tight text-[var(--cream)]">
                  Web/App Development for Startups
                </h3>
                <p className="mt-3 sm:mt-4 text-sm sm:text-base leading-relaxed text-[var(--gray)]">
                  You need an MVP, a v2 rebuild, or a technical co-founder replacement that doesn’t require equity. We scope it, price it as a fixed engagement, and build it in weeks, not quarters.
                </p>
                <Link
                  className="mt-6 sm:mt-8 inline-flex items-center gap-1.5 border-b border-transparent pt-2 text-sm sm:text-base font-semibold text-[var(--copper)] transition-colors hover:border-[var(--copper)] hover:text-[var(--copper-bright)]"
                  to="/services#web-app-development"
                >
                  <span>See Web/App Development</span>
                  <span>→</span>
                </Link>
              </article>
            </StaggerItem>

            <StaggerItem>
              <article className="h-full flex flex-col border border-[var(--line-strong)] bg-[var(--surface)] p-6 sm:p-8 lg:p-10 transition-all duration-200 hover:border-[var(--copper)] hover:bg-[var(--surface-alt)]">
                <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-[var(--copper)]">Track 2</span>
                <h3 className="mt-4 sm:mt-6 font-[var(--head)] text-xl sm:text-2xl leading-tight text-[var(--cream)]">
                  AI Automation for SMBs
                </h3>
                <p className="mt-3 sm:mt-4 text-sm sm:text-base leading-relaxed text-[var(--gray)]">
                  Your team is manually copying data between tools, answering the same customer questions, or reconciling spreadsheets that should reconcile themselves. We build the agentic workflow that removes the manual step - permanently.
                </p>
                <Link
                  className="mt-6 sm:mt-8 inline-flex items-center gap-1.5 border-b border-transparent pt-2 text-sm sm:text-base font-semibold text-[var(--copper)] transition-colors hover:border-[var(--copper)] hover:text-[var(--copper-bright)]"
                  to="/services#ai-automation"
                >
                  <span>See AI Automation</span>
                  <span>→</span>
                </Link>
              </article>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Founding Client Pricing Banner */}
      <section className="border-b border-[var(--line)] px-0 py-12 sm:py-18 md:py-24">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
          <FadeIn className="flex flex-col items-start justify-between gap-6 border border-[var(--copper)] bg-[var(--surface)] p-6 sm:p-8 lg:flex-row lg:items-center lg:p-10">
            <div className="max-w-[62ch]">
              <h2 className="font-[var(--head)] text-xl sm:text-2xl md:text-3xl lg:text-[2rem] leading-tight text-[var(--cream)]">
                Founding client pricing - while it lasts
              </h2>
              <p className="mt-3 sm:mt-4 text-sm sm:text-base leading-relaxed text-[var(--gray)]">
                We’re taking on a limited number of founding clients at a discounted rate in exchange for a case study, a testimonial, and your honest feedback while we build our process. This isn’t a permanent discount and we won’t pretend otherwise - it’s how a new shop earns its first references.
              </p>
            </div>
            <Button to="/how-we-work" className="w-full shrink-0 sm:w-auto">
              See how founding pricing works
            </Button>
          </FadeIn>
        </div>
      </section>

      {/* What we bring */}
      <section className="border-b border-[var(--line)] px-0 py-12 sm:py-18 md:py-24">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
          <SectionHeading
            title="What we bring, since we cannot yet bring a long client list"
          />
          <StaggerContainer className="grid grid-cols-1">
            {[
              'Senior engineering background - not junior devs learning on your dime',
              'Fixed-scope, fixed-price engagements - no hourly billing surprises',
              'Direct communication with the person coding, not an account manager',
              'A written technical process you can review before you sign anything',
            ].map((point, index) => (
              <StaggerItem key={index}>
                <div className="flex items-start sm:items-center gap-3 sm:gap-4 border-t border-[var(--line)] py-4 sm:py-5 last:border-b">
                  <span className="flex-none text-lg font-bold text-[var(--copper)]">—</span>
                  <p className="text-sm sm:text-base md:text-lg text-[var(--cream)]">{point}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
          <FadeIn delay={0.2} className="mt-8 sm:mt-12">
            <Button secondary to="/portfolio" className="w-full sm:w-auto">
              See our current build examples
            </Button>
          </FadeIn>
        </div>
      </section>

      {/* Fit Section */}
      <section className="border-b border-[var(--line)] px-0 py-12 sm:py-18 md:py-24">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
          <SectionHeading
            title="Is WoxBuilt right for your project?"
          />
          <div className="grid gap-6 md:grid-cols-2">
            <Panel
              title="Good fit"
              items={[
                'Pre-seed to Series A founders who need a working product to raise or sell against',
                'SMB owners with a specific, definable manual process worth automating',
                'Teams that want a small, accountable team over a big, insulated one',
              ]}
            />
            <Panel
              bad
              title="When to look elsewhere"
              items={[
                'You need enterprise compliance certifications on day one (SOC 2, HIPAA-audited infrastructure) - we build toward this, but are not there yet',
                'You want ongoing staff augmentation rather than a defined build',
                'You need 24/7 support coverage across time zones right now',
              ]}
            />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <FinalCta
        title={<>Tell us what you're building.<br className="hidden sm:inline" /> We’ll tell you if we’re the right fit.</>}
        description="No sales call theater. A 20-minute conversation where you describe the problem and we tell you honestly whether it’s a fit, roughly what it costs, and how long it takes."
      />
    </>
  )
}
