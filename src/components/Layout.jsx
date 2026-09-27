import { Link, Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

import { motion } from 'framer-motion'

export const Button = ({ children, secondary = false, to = '/contact', className = '' }) => (
  <Link
    to={to}
    className={`${
      secondary
        ? 'border-[var(--line-strong)] bg-transparent text-[var(--cream)] hover:border-[var(--copper)] hover:bg-[rgba(193,98,45,0.08)] hover:text-[var(--copper-bright)]'
        : 'border-[var(--copper)] bg-[var(--copper)] text-[var(--charcoal)] hover:border-[var(--copper-bright)] hover:bg-[var(--copper-bright)]'
    } inline-flex min-h-[44px] w-full sm:w-auto items-center justify-center gap-2 border px-5 py-3 text-center font-[var(--head)] text-[.9375rem] font-semibold transition-all duration-200 sm:whitespace-nowrap sm:px-6 ${className}`}
  >
    {children}
  </Link>
)

export const SectionHeading = ({ eyebrow, title, children }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-40px' }}
    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    className="mb-8 max-w-[680px] sm:mb-10 lg:mb-12"
  >
    {eyebrow && (
      <span className="mb-2 block text-xs sm:text-sm font-semibold uppercase tracking-[0.1em] text-[var(--copper)]">
        {eyebrow}
      </span>
    )}
    <h2 className="font-[var(--head)] text-2xl sm:text-3xl md:text-4xl lg:text-[2.5rem] leading-[1.15] tracking-tight text-[var(--cream)]">
      {title}
    </h2>
    {children && (
      <p className="mt-3 sm:mt-4 text-base sm:text-lg lg:text-xl text-[var(--gray)] leading-relaxed">
        {children}
      </p>
    )}
  </motion.div>
)

export const PageHero = ({ title, children }) => (
  <section className="border-b border-[var(--line)] px-0 py-12 sm:py-16 md:py-20 lg:py-24">
    <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-[24ch] font-[var(--head)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight text-[var(--cream)]"
      >
        {title}
      </motion.h1>
      {children && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-5 sm:mt-6 max-w-[68ch] text-base sm:text-lg md:text-xl leading-relaxed text-[var(--gray)]"
        >
          {children}
        </motion.p>
      )}
    </div>
  </section>
)

export const Panel = ({ title, items, bad = false }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-40px' }}
    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    className={`h-full border border-[var(--line-strong)] bg-[var(--surface)] p-5 sm:p-6 md:p-8 transition-colors ${
      bad
        ? 'border-l-4 border-l-[var(--line-strong)]'
        : 'border-l-4 border-l-[var(--copper)]'
    }`}
  >
    <h3 className="mb-4 sm:mb-5 font-[var(--head)] text-lg sm:text-xl leading-snug text-[var(--cream)]">
      {title}
    </h3>
    <ul className="flex flex-col gap-3">
      {items.map((item) => (
        <li
          key={item}
          className="relative pl-5 text-sm sm:text-base leading-relaxed text-[var(--gray)] before:absolute before:left-0 before:top-[0.65em] before:h-px before:w-2.5 before:bg-[var(--copper)]"
        >
          {item}
        </li>
      ))}
    </ul>
  </motion.div>
)

export const FinalCta = ({
  title = 'See if we are a fit for your project',
  description = 'No sales theater. A 20-minute conversation where you describe the problem and we tell you honestly whether it’s a fit, roughly what it costs, and how long it takes.',
}) => (
  <section className="border-b border-[var(--line)] px-0 py-14 sm:py-20 md:py-28 text-center">
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="mx-auto max-w-[1200px] px-4 sm:px-6"
    >
      <h2 className="mx-auto max-w-[24ch] font-[var(--head)] text-2xl sm:text-3xl md:text-4xl lg:text-[2.5rem] leading-tight tracking-tight text-[var(--cream)]">
        {title}
      </h2>
      {description && (
        <p className="mx-auto mt-4 max-w-[64ch] text-base sm:text-lg text-[var(--gray)] leading-relaxed">
          {description}
        </p>
      )}
      <div className="mt-8 sm:mt-10 md:mt-12 flex flex-col sm:flex-row justify-center items-center gap-4">
        <Button className="w-full sm:w-auto">Book your build call</Button>
      </div>
    </motion.div>
  </section>
)

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col bg-[var(--charcoal)] text-[var(--cream)] selection:bg-[var(--copper)] selection:text-[var(--charcoal)]">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
