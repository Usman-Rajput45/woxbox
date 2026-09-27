import logo from '../assets/woxbuiltlogo.png'

export default function PageLoader() {
  return (
    <div
      className="flex min-h-[60vh] w-full flex-col items-center justify-center px-4 py-20 select-none"
      role="status"
      aria-live="polite"
      aria-label="Loading page content"
    >
      <div className="flex flex-col items-center gap-5">
        {/* Brand Logo & Name */}
        <div className="flex items-center gap-3 animate-pulse-subtle">
          <img
            src={logo}
            alt="WoxBuilt Logo"
            className="h-9 sm:h-10 w-auto object-contain drop-shadow-[0_2px_12px_rgba(193,98,45,0.25)]"
          />
          <span className="font-[var(--head)] text-xl sm:text-2xl font-bold tracking-tight text-[var(--cream)]">
            Wox<span className="text-[var(--copper)]">Built</span>
          </span>
        </div>

        {/* Loading Progress Bar */}
        <div className="relative h-1.5 w-44 sm:w-52 overflow-hidden rounded-full bg-[var(--surface-alt)] border border-[var(--line-strong)]">
          <div className="animate-indeterminate-bar h-full rounded-full bg-gradient-to-r from-[var(--copper)] via-[var(--copper-bright)] to-[var(--copper)] shadow-[0_0_12px_rgba(193,98,45,0.6)]" />
        </div>

        {/* Status text */}
        <span className="font-[var(--body)] text-[11px] font-medium uppercase tracking-[0.2em] text-[var(--gray)]">
          Loading...
        </span>
      </div>
    </div>
  )
}
