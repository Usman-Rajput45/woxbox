import { Link } from 'react-router-dom'
import { FinalCta, PageHero } from '../components/Layout'
import { FadeIn, StaggerContainer, StaggerItem } from '../components/Motion'
import launchdeskImage from '../assets/launchdesk.webp'
import qualifybootImage from '../assets/qualifyboot.webp'
import stockpilotinventoryImage from '../assets/stockpilotinventory.webp'

const projects = [
  {
    title: 'LaunchDesk',
    description: 'A project tracker built for speed, not sprawl',
    image: launchdeskImage,
    alt: 'LaunchDesk project dashboard',
    link: '/portfolio/launchdesk',
  },
  {
    title: 'StockPilot',
    description: 'Inventory Visibility for a Growing Retail Operation',
    image: stockpilotinventoryImage,
    alt: 'StockPilot inventory visibility dashboard',
    link: '/portfolio/stockpilot',
  },
  {
    title: 'QualifyBot',
    description: 'AI Lead Qualification Widget',
    image: qualifybootImage,
    alt: 'QualifyBot AI lead qualification widget',
    link: '/portfolio/qualifybot',
  },
]

export default function Portfolio() {
  return (
    <>
      <PageHero title="What we have built, and what we are building right now">
        We're going to be direct about something most agency portfolio pages hide: we're new, so this page has fewer projects on it than a 10-year-old agency's page. What it does have is real detail on how we approached each one, because that tells you more than a polished screenshot ever will.
      </PageHero>

      {/* Projects List */}
      <section className="border-b border-[var(--line)] px-0 py-12 sm:py-18 md:py-24">
        <div className="mx-auto max-w-[960px] px-4 sm:px-6">
          <FadeIn className="mb-8 sm:mb-12">
            <h2 className="font-[var(--head)] text-2xl sm:text-3xl md:text-4xl leading-tight text-[var(--cream)]">
              What we have been building
            </h2>
          </FadeIn>

          <StaggerContainer className="flex flex-col gap-6 sm:gap-8">
            {projects.map((project, idx) => (
              <StaggerItem key={idx}>
                <article className="grid grid-cols-1 md:grid-cols-[240px_1fr] lg:grid-cols-[280px_1fr] items-stretch border border-[var(--line-strong)] bg-[var(--surface)] transition-all duration-200 hover:border-[var(--copper)]">
                  <figure className="flex min-h-[180px] sm:min-h-[220px] items-center justify-center bg-[var(--surface-alt)] p-4 sm:p-6">
                    <img
                      className="block max-h-[160px] sm:max-h-[190px] w-full object-contain"
                      src={project.image}
                      alt={project.alt}
                      loading="lazy"
                      decoding="async"
                    />
                  </figure>

                  <div className="flex flex-col justify-between p-5 sm:p-6 md:p-8">
                    <div>
                      <h3 className="mt-1 font-[var(--head)] text-xl sm:text-2xl text-[var(--cream)]">
                        {project.title}
                      </h3>
                      <p className="mt-3 text-sm sm:text-base leading-relaxed text-[var(--gray)]">
                        {project.description}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-[var(--line)]">
                      <Link
                        to={project.link}
                        className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[var(--copper)] transition-colors hover:text-[var(--copper-bright)]"
                      >
                        <span>View live product</span>
                        <span>→</span>
                      </Link>
                    </div>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Note on Portfolio growth */}
      <section className="border-b border-[var(--line)] px-0 py-12 sm:py-18 md:py-24">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
          <FadeIn className="border border-[var(--copper)] bg-[var(--surface)] p-6 sm:p-10 text-center">
            <h2 className="mx-auto max-w-[24ch] font-[var(--head)] text-xl sm:text-2xl md:text-3xl leading-tight text-[var(--cream)]">
              This page grows as we ship
            </h2>
            <p className="mx-auto mt-3 sm:mt-4 max-w-[58ch] text-sm sm:text-base md:text-lg leading-relaxed text-[var(--gray)]">
              We'd rather you see three real, detailed projects than ten vague ones with a logo and a buzzword. Check back, or ask us directly for our current project list.
            </p>
          </FadeIn>
        </div>
      </section>

      <FinalCta title="Talk to us about your project" />
    </>
  )
}
