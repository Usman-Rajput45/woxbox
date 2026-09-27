import { FinalCta, PageHero, SectionHeading } from '../components/Layout'
import { FadeIn, StaggerContainer, StaggerItem } from '../components/Motion'
import dailyImage from '../assets/dailywoxbuilt.webp'
import founderImage from '../assets/founderandco-founder (1).webp'
import ceoImage from '../assets/ceoandcto.webp'

const Proof = ({ text }) => (
  <div className="flex items-start sm:items-center gap-3 sm:gap-4 border-t border-[var(--line)] py-4 last:border-b">
    <span className="flex-none font-bold text-[var(--copper)]">—</span>
    <p className="text-sm sm:text-base leading-relaxed text-[var(--cream)]">{text}</p>
  </div>
)

const Founder = ({ image, name, title }) => (
  <article className="h-full flex flex-col border border-[var(--line-strong)] bg-[var(--surface)] transition-all hover:border-[var(--copper)]">
    <div className="h-64 sm:h-72 md:h-80 overflow-hidden border-b border-[var(--line-strong)] bg-[var(--surface-alt)]">
      <img className="block h-full w-full object-cover object-top" src={image} alt={`${name} - ${title}`} loading="lazy" decoding="async" />
    </div>
    <div className="p-6 sm:p-8">
      <h3 className="font-[var(--head)] text-xl sm:text-2xl leading-tight text-[var(--cream)]">{name}</h3>
      <span className="mt-1 block text-sm sm:text-[.9375rem] font-semibold text-[var(--copper)]">{title}</span>
    </div>
  </article>
)

export default function About() {
  return (
    <>
      <PageHero title="We are new. Here is exactly why that is on this page instead of buried.">
        Most agencies hide how young they are behind case studies and client logos. We don't have ten years of those yet, so instead you get this: who we are, what we've actually done, and why we think that's enough to trust us with a real project.
      </PageHero>

      {/* The Founders */}
      <section className="border-b border-[var(--line)] px-0 py-12 sm:py-18 md:py-24">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
          <SectionHeading title="The founders" />
          <StaggerContainer className="mx-auto grid max-w-[900px] gap-6 sm:gap-8 md:grid-cols-2">
            <StaggerItem>
              <Founder
                image={founderImage}
                name="Anas & Luqman"
                title="Founder & Co-founder"
              />
            </StaggerItem>
            <StaggerItem>
              <Founder
                image={ceoImage}
                name="Usman & Salman"
                title="CEO & CTO"
              />
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Why We Left */}
      <section className="border-b border-[var(--line)] px-0 py-12 sm:py-18 md:py-24">
        <div className="mx-auto grid max-w-[1200px] gap-8 px-4 sm:gap-12 sm:px-6 lg:grid-cols-2 lg:gap-16 xl:gap-24">
          <SectionHeading eyebrow="Our Story" title="Why we left to do this" />
          <FadeIn direction="up" delay={0.1} className="grid max-w-[62ch] gap-5 sm:gap-6 text-base sm:text-lg leading-relaxed text-[var(--gray)]">
            <p>
              We watched founders get burned two ways: agencies that padded timelines to bill more hours, and cheap offshore shops that shipped code nobody could maintain six months later.
            </p>
            <p>
              We started WoxBuilt because we thought we could split the difference:{' '}
              <strong className="text-[var(--cream)]">
                senior-level work, honest pricing, and a build you actually own when it is done.
              </strong>
            </p>
            <p>
              We're not claiming altruism. We think this is a better way to run a software business, and we think founders and SMB owners will notice the difference in how we communicate, scope, and price. If we're wrong, the founding client model means you're not locked into a long, expensive engagement to find out.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Day-to-day */}
      <section className="border-b border-[var(--line)] px-0 py-12 sm:py-18 md:py-24">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
          <SectionHeading title="What working with us looks like day-to-day" />
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center">
            <StaggerContainer>
              <StaggerItem>
                <Proof text="You talk directly to the person writing your code - no account manager relaying messages" />
              </StaggerItem>
              <StaggerItem>
                <Proof text="We scope in writing before any money changes hands" />
              </StaggerItem>
              <StaggerItem>
                <Proof text="We show working progress weekly, not a demo the week before launch" />
              </StaggerItem>
              <StaggerItem>
                <Proof text="We tell you when something in your plan does not make sense, even if it's easier to just build it" />
              </StaggerItem>
            </StaggerContainer>
            <FadeIn direction="up" delay={0.15} className="h-64 sm:h-80 md:h-96 lg:h-[360px] overflow-hidden border border-[var(--line-strong)] bg-[var(--surface)] shadow-lg">
              <img
                className="block h-full w-full object-cover"
                src={dailyImage}
                alt="WoxBuilt daily workflow"
                loading="lazy"
                decoding="async"
              />
            </FadeIn>
          </div>
        </div>
      </section>

      <FinalCta title="See if we are a fit for your project" />
    </>
  )
}
