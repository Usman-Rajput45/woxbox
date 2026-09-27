import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/woxbuiltlogo.png'

export default function Footer() {
  const footerLinkClass = ({ isActive }) =>
    `relative w-fit py-1 text-sm sm:text-base text-[var(--gray)] transition-colors hover:text-[var(--cream)] after:absolute after:bottom-0 after:left-0 after:h-px after:bg-[var(--copper)] after:transition-all ${isActive ? 'text-[var(--copper)] after:w-full font-medium' : 'after:w-0 hover:after:w-full'
    }`

  return (
    <footer className="border-t border-[var(--line)] bg-[var(--charcoal)] px-0 pb-8 pt-12 sm:pt-16">
      <div className="mx-auto grid max-w-[1200px] gap-10 border-b border-[var(--line)] px-4 pb-10 sm:gap-12 sm:px-6 sm:pb-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.4fr_.6fr_.8fr_.8fr]">

        {/* Brand Description */}
        <div className="sm:col-span-2 lg:col-span-1">
          <Link to="/" className="flex h-10 w-14 sm:h-12 sm:w-16 items-center">
            <img className="block h-full w-full object-contain" src={logo} alt="WoxBuilt" />
          </Link>
          <p className="mt-4 max-w-[36ch] text-sm sm:text-[.9375rem] leading-relaxed text-[var(--gray)]">
            Software that keeps you steady. Startup MVP development and AI automation for SMBs, built by senior software engineers.
          </p>
        </div>

        {/* Site Navigation */}
        <div className="flex flex-col content-start gap-2">
          <h4 className="mb-2 text-xs sm:text-[.8125rem] font-semibold uppercase tracking-wider text-[var(--copper)]">
            Site
          </h4>
          <NavLink end to="/" className={footerLinkClass}>Home</NavLink>
          <NavLink to="/services" className={footerLinkClass}>Services</NavLink>
          <NavLink to="/portfolio" className={footerLinkClass}>Portfolio</NavLink>
        </div>

        {/* Company Links */}
        <div className="flex flex-col content-start gap-2">
          <h4 className="mb-2 text-xs sm:text-[.8125rem] font-semibold uppercase tracking-wider text-[var(--copper)]">
            Company
          </h4>
          <NavLink to="/about" className={footerLinkClass}>About</NavLink>
          <NavLink to="/how-we-work" className={footerLinkClass}>How We Work</NavLink>
          <NavLink to="/contact" className={footerLinkClass}>Contact</NavLink>
        </div>

        {/* Get in Touch */}
        <div className="flex flex-col content-start gap-2">
          <h4 className="mb-2 text-xs sm:text-[.8125rem] font-semibold uppercase tracking-wider text-[var(--copper)]">
            Get in touch
          </h4>
          <a
            href="mailto:woxbuilt@gmail.com"
            className="text-sm sm:text-base text-[var(--gray)] transition-colors hover:text-[var(--copper)] break-all"
          >
            woxbuilt@gmail.com
          </a>

        </div>
      </div>

      {/* Copyright & Sub-bar */}
      <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-3 px-4 pt-6 text-center text-xs sm:text-[.8125rem] text-[var(--gray)] sm:flex-row sm:text-left sm:px-6">
        <p>© 2026 WoxBuilt. All rights reserved.</p>
        <p className="text-[var(--gray)]">Built by two engineers, not an agency pretending to be one.</p>
      </div>
    </footer>
  )
}
