import { useLocation } from 'react-router-dom'
import { Button } from '../components/Layout'

export default function NotFound() {
  const location = useLocation()
  return (
    <section className="flex min-h-[65vh] items-center justify-center px-4 py-16 sm:py-24 sm:px-6">
      <div className="mx-auto max-w-[800px] text-center sm:text-left">
        <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-[var(--copper)]">
          404 — Not Found
        </span>
        <h1 className="mt-3 font-[var(--head)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-[var(--cream)]">
          There is nothing anchored at <span className="text-[var(--copper)] break-all">{location.pathname}</span>.
        </h1>
        <p className="mt-4 sm:mt-6 max-w-[54ch] text-base sm:text-lg md:text-xl leading-relaxed text-[var(--gray)]">
          The page may have moved, or it may not have been built yet. Either way, the useful next step is still available.
        </p>
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center gap-4">
          <Button to="/" className="w-full sm:w-auto">Back to home</Button>
          <Button secondary to="/contact" className="w-full sm:w-auto">Start a conversation</Button>
        </div>
      </div>
    </section>
  )
}
