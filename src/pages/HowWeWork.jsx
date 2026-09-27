import {
  FinalCta,
  PageHero,
  Panel,
  SectionHeading,
} from '../components/Layout'
import { FadeIn, StaggerContainer, StaggerItem } from '../components/Motion'

const steps = [
  [
    '01',
    'Discovery call (free, 20 minutes)',
    'You describe the problem, we ask questions, and we tell you honestly if it is a fit.',
  ],
  [
    '02',
    'Written scope document',
    'We define exactly what is being built, what is out of scope, and the timeline. You see this before any payment.',
  ],
  [
    '03',
    'Fixed-price quote',
    'Based on the scope document, not hours. If scope changes mid-project, we re-quote in writing, not silently.',
  ],
  [
    '04',
    'Milestone-based payment',
    'Typically split across project start, midpoint demo, and delivery. Not 100% upfront, not net-60 on completion.',
  ],
]

const Price = ({ title, rows }) => (
  <FadeIn className="border-t border-[var(--line)] py-6">
    <h3 className="font-[var(--head)] text-lg sm:text-xl font-semibold text-[var(--copper)]">{title}</h3>
    <div className="mt-3 divide-y divide-[var(--line)]">
      {rows.map((row) => (
        <div
          className="flex flex-col sm:flex-row justify-between sm:items-center gap-1 sm:gap-6 py-3.5 text-sm sm:text-base text-[var(--gray)]"
          key={row}
        >
          <span className="text-[var(--cream)]">{row}</span>
          <strong className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[var(--copper)]">
            Scoped individually
          </strong>
        </div>
      ))}
    </div>
  </FadeIn>
)

export default function HowWeWork() {
  return (
    <>
      <PageHero title="How we scope, price, and deliver - before you ask">
        We are not publishing a fixed price list because no two builds cost the same, and a generic "$5k MVP" number would be a lie the moment we saw your actual requirements. Here's what we will tell you: exactly how pricing gets decided, what founding client pricing means, and what a typical engagement costs in real ranges.
      </PageHero>

      {/* The Process */}
      <section className="border-b border-[var(--line)] px-0 py-12 sm:py-18 md:py-24">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
          <SectionHeading
            eyebrow="Workflow"
            title="The process before you are quoted anything"
          />
          <StaggerContainer className="grid grid-cols-1">
            {steps.map(([number, title, text]) => (
              <StaggerItem key={number}>
                <div className="grid grid-cols-[40px_1fr] sm:grid-cols-[56px_1fr] md:grid-cols-[64px_1fr] gap-4 sm:gap-6 border-t border-[var(--line)] py-6 sm:py-8">
                  <span className="font-[var(--head)] text-xl sm:text-2xl md:text-3xl font-bold text-[var(--copper)]">
                    {number}
                  </span>
                  <div>
                    <h3 className="font-[var(--head)] text-lg sm:text-xl md:text-2xl text-[var(--cream)]">
                      {title}
                    </h3>
                    <p className="mt-2 text-sm sm:text-base leading-relaxed text-[var(--gray)]">
                      {text}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Founding Client Details */}
      <section className="border-b border-[var(--line)] px-0 py-12 sm:py-18 md:py-24">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
          <SectionHeading
            title="What founding client pricing actually means"
          />
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
            <FadeIn delay={0.1} className="grid max-w-[62ch] gap-5 sm:gap-6 text-base sm:text-lg leading-relaxed text-[var(--gray)]">
              <p>
                We are offering a limited number of early projects at reduced rates - typically <strong className="text-[var(--cream)]">20–30% below</strong> what we will charge once we have a full portfolio. In exchange, we ask for a few simple things.
              </p>
              <p>
                This is not a bait-and-switch discount. The reduced rate is locked in writing in your scope document and does not change mid-project.
              </p>
            </FadeIn>
            <Panel
              title="What we ask in exchange"
              items={[
                'Permission to use your project as a case study (details can stay anonymized if needed)',
                'A testimonial once you have seen the delivered work',
                'Reasonable flexibility on our working process as we refine it',
              ]}
            />
          </div>
        </div>
      </section>

      {/* Pricing Estimation */}
      <section className="border-b border-[var(--line)] px-0 py-12 sm:py-18 md:py-24">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
          <SectionHeading
            title="What projects typically look like"
          />
          <Price
            title="Web / App Development"
            rows={[
              'Small MVP (core single-user-flow product)',
              'Full MVP (multi-feature, auth, payments, admin dashboard)',
              'v2 rebuild of existing product',
            ]}
          />
          <Price
            title="AI Automation & Workflows"
            rows={[
              'Single-workflow automation (one process, one integration)',
              'Multi-system automation (2–4 tools connected, custom business logic)',
            ]}
          />
          <FadeIn delay={0.1} className="mt-6 rounded border border-[var(--copper)]/30 bg-[var(--surface)] p-4 sm:p-5">
            <p className="text-sm sm:text-base text-[var(--gray)]">
              <strong className="text-[var(--copper)]">Founding client discount:</strong> A 20–30% reduction to the above during our current founding cohort.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* What we won't do */}
      <section className="border-b border-[var(--line)] px-0 py-12 sm:py-18 md:py-24">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
          <SectionHeading title="What we won’t do" />
          <FadeIn className="border border-[var(--line-strong)] bg-[var(--surface)] p-6 sm:p-8 lg:p-10">
            <ul className="flex flex-col gap-4 sm:gap-5">
              <li className="relative pl-6 text-sm sm:text-base leading-relaxed text-[var(--gray)] before:absolute before:left-0 before:top-[0.65em] before:h-px before:w-3 before:bg-[var(--copper)]">
                <strong className="text-[var(--cream)]"></strong> We won’t quote a fixed price before a scope document exists - anyone who does is guessing or padding.
              </li>
              <li className="relative pl-6 text-sm sm:text-base leading-relaxed text-[var(--gray)] before:absolute before:left-0 before:top-[0.65em] before:h-px before:w-3 before:bg-[var(--copper)]">
                <strong className="text-[var(--cream)]"></strong> We don't offer unlimited - scope includes a defined number of review rounds, more is quoted separately
              </li>
              <li className="relative pl-6 text-sm sm:text-base leading-relaxed text-[var(--gray)] before:absolute before:left-0 before:top-[0.65em] before:h-px before:w-3 before:bg-[var(--copper)]">
                <strong className="text-[var(--cream)]"></strong> We don’t offer 24/7 on-call support; response times and support windows are agreed in writing upfront.
              </li>
            </ul>
          </FadeIn>
        </div>
      </section>

      <FinalCta title="Get a real quote for your project" />
    </>
  )
}
