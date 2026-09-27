import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/woxbuiltlogo.png'

const navItems = [
  ['Home', '/'],
  ['Services', '/services'],
  ['Portfolio', '/portfolio'],
  ['About', '/about'],
  ['How We Work', '/how-we-work'],
  ['Contact', '/contact'],
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  // Close on Escape key or on screen resize to desktop
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    const handleResize = () => {
      if (window.innerWidth >= 1024) setOpen(false)
    }
    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const close = () => setOpen(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[var(--line)] bg-[rgba(26,24,21,.95)] backdrop-blur-md transition-colors duration-200">
      <div className="mx-auto flex h-16 sm:h-[72px] lg:h-[76px] max-w-[1200px] items-center justify-between px-4 sm:px-6">
        
        {/* Brand Logo */}
        <Link 
          to="/" 
          className="flex h-10 w-14 sm:h-[42px] sm:w-[58px] items-center transition-opacity hover:opacity-90" 
          onClick={close}
          aria-label="WoxBuilt Home"
        >
          <img className="block h-full w-full object-contain" src={logo} alt="WoxBuilt" />
        </Link>

        {/* Desktop Navigation */}
        <nav 
          id="desktop-navigation" 
          className="hidden lg:flex lg:items-center lg:gap-8" 
          aria-label="Main navigation"
        >
          {navItems.map(([label, path]) => (
            <NavLink
              key={path}
              to={path}
              end={path === '/'}
              className={({ isActive }) =>
                `relative py-1 text-[.9375rem] font-medium transition-colors hover:text-[var(--cream)] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-[var(--copper)] after:transition-all after:duration-200 ${
                  isActive
                    ? 'text-[var(--cream)] after:w-full'
                    : 'text-[var(--gray)] after:w-0 hover:after:w-full'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        {/* Action button & Hamburger */}
        <div className="flex items-center gap-3 sm:gap-4">
          <Link
            to="/contact"
            className="hidden border border-[var(--line-strong)] bg-transparent px-5 py-2.5 font-[var(--head)] text-[.9375rem] font-semibold text-[var(--cream)] transition-all duration-200 hover:border-[var(--copper)] hover:bg-[var(--copper)] hover:text-[var(--charcoal)] lg:inline-flex"
          >
            Book a build call
          </Link>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            className="relative flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center border border-[var(--line-strong)] bg-[var(--surface)] text-[var(--cream)] transition-all duration-200 hover:border-[var(--copper)] focus:outline-none focus:ring-1 focus:ring-[var(--copper)] lg:hidden"
            onClick={() => setOpen((prev) => !prev)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-controls="mobile-navigation"
            aria-expanded={open}
          >
            <div className="flex h-4 w-5 flex-col justify-between">
              <span
                className={`h-0.5 w-full bg-[var(--cream)] transition-all duration-300 origin-left ${
                  open ? 'rotate-45 translate-x-0.5' : ''
                }`}
              />
              <span
                className={`h-0.5 w-full bg-[var(--cream)] transition-all duration-200 ${
                  open ? 'opacity-0 scale-x-0' : 'opacity-100'
                }`}
              />
              <span
                className={`h-0.5 w-full bg-[var(--cream)] transition-all duration-300 origin-left ${
                  open ? '-rotate-45 translate-x-0.5' : ''
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Backdrop */}
      <div
        className={`fixed inset-0 top-[64px] sm:top-[72px] z-40 bg-black/70 backdrop-blur-xs transition-opacity duration-300 lg:hidden ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={close}
        aria-hidden="true"
      />

      {/* Mobile Drawer Menu */}
      <div
        id="mobile-navigation"
        className={`fixed inset-x-0 top-[64px] sm:top-[72px] z-50 max-h-[calc(100vh-64px)] sm:max-h-[calc(100vh-72px)] overflow-y-auto border-b border-[var(--line-strong)] bg-[var(--charcoal)] p-5 shadow-2xl transition-all duration-300 ease-in-out lg:hidden ${
          open
            ? 'translate-y-0 opacity-100 pointer-events-auto'
            : '-translate-y-4 opacity-0 pointer-events-none'
        }`}
      >
        <nav className="flex flex-col divide-y divide-[var(--line)]" aria-label="Mobile navigation">
          {navItems.map(([label, path]) => (
            <NavLink
              key={path}
              to={path}
              end={path === '/'}
              onClick={close}
              className={({ isActive }) =>
                `flex items-center justify-between py-4 text-lg font-medium transition-all ${
                  isActive
                    ? 'text-[var(--copper)] pl-2 font-semibold'
                    : 'text-[var(--cream)] hover:text-[var(--copper)] hover:pl-2'
                }`
              }
            >
              <span>{label}</span>
              <span className="text-[var(--gray)] text-sm">→</span>
            </NavLink>
          ))}
        </nav>

        {/* Mobile CTA inside Drawer */}
        <div className="mt-6 pt-4 border-t border-[var(--line-strong)] flex flex-col gap-3">
          <Link
            to="/contact"
            onClick={close}
            className="flex w-full items-center justify-center border border-[var(--copper)] bg-[var(--copper)] px-5 py-3 text-center font-[var(--head)] text-base font-semibold text-[var(--charcoal)] transition-colors hover:bg-[var(--copper-bright)]"
          >
            Book a 20-minute build call
          </Link>
          <a
            href="mailto:woxbuilt@gmail.com"
            className="py-2 text-center text-sm text-[var(--gray)] hover:text-[var(--cream)] transition-colors"
          >
            Or email us: <span className="text-[var(--copper)] underline">woxbuilt@gmail.com</span>
          </a>
        </div>
      </div>
    </header>
  )
}
