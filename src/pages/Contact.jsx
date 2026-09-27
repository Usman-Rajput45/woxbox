// import { useState } from 'react'
// import { Link } from 'react-router-dom'
// import { motion } from 'framer-motion'
// import { SectionHeading } from '../components/Layout'
// import { FadeIn, StaggerContainer, StaggerItem } from '../components/Motion'
// import contactImage from '../assets/contactwoxbuilt.webp'

// const Field = ({
//   label,
//   name,
//   type = 'text',
//   placeholder,
//   required = true,
// }) => (
//   <div className="grid gap-1.5">
//     <label
//       className="text-xs sm:text-[.8125rem] font-semibold text-[var(--gray)]"
//       htmlFor={name}
//     >
//       {label} {required && <span className="text-[var(--copper)]">*</span>}
//     </label>
//     <input
//       id={name}
//       name={name}
//       type={type}
//       placeholder={placeholder}
//       required={required}
//       className="w-full border border-[var(--line-strong)] bg-[var(--charcoal)] p-3 text-sm sm:text-base text-[var(--cream)] placeholder:text-[var(--gray)]/60 outline-none transition-colors focus:border-[var(--copper)] focus:ring-1 focus:ring-[var(--copper)]"
//     />
//   </div>
// )

// export default function Contact() {
//   const [submitted, setSubmitted] = useState(false)
// const [loading, setLoading] = useState(false)
// const [error, setError] = useState(false)

// const handleSubmit = async (event) => {
//   event.preventDefault()

//   setLoading(true)
//   setSubmitted(false)
//   setError(false)

//   const formData = new FormData(event.target)

//   formData.append('access_key', 'YOUR_ACCESS_KEY')

//   const data = Object.fromEntries(formData)

//   try {
//     const response = await fetch('https://api.web3forms.com/submit', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         Accept: 'application/json',
//       },
//       body: JSON.stringify(data),
//     })

//     const result = await response.json()

//     if (result.success) {
//       setSubmitted(true)
//       event.target.reset()
//     } else {
//       setError(true)
//     }
//   } catch (error) {
//     setError(true)
//   } finally {
//     setLoading(false)
//   }
// }

//   return (
//     <>
//       <section className="border-b border-[var(--line)] px-0 py-12 sm:py-18 md:py-24">
//         <div className="mx-auto grid max-w-[1200px] items-start gap-8 px-4 sm:gap-12 sm:px-6 lg:grid-cols-[1.1fr_.9fr] lg:gap-16 xl:gap-24">

//           {/* Contact Intro */}
//           <motion.div
//             initial={{ opacity: 0, y: 24 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
//           >
//             <h1 className="max-w-[16ch] font-[var(--head)] text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.1] tracking-tight text-[var(--cream)]">
//               Tell us what you are building. We will give you a straight answer.
//             </h1>
//             <p className="mt-5 sm:mt-6 max-w-[52ch] text-base sm:text-lg md:text-xl leading-relaxed text-[var(--gray)]">
//               No discovery-call theater. You will talk to one of the two senior engineers who would actually build your project, and you will know within 20 minutes whether we are a fit.
//             </p>
//             <div className="mt-8 sm:mt-10 overflow-hidden border border-[var(--line-strong)] bg-[var(--surface)] shadow-lg">
//               <img
//                 className="block h-48 sm:h-56 md:h-64 w-full bg-[var(--surface-alt)] object-cover"
//                 src={contactImage}
//                 alt="WoxBuilt contact workspace"
//                 loading="lazy"
//                 decoding="async"
//               />
//             </div>
//           </motion.div>

//           {/* Contact Form */}
//           <motion.form
//             initial={{ opacity: 0, y: 24 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.55, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
//             className="flex flex-col gap-4 sm:gap-5 border border-[var(--line-strong)] bg-[var(--surface)] p-5 sm:p-7 md:p-8"
//             onSubmit={(event) => {
//               event.preventDefault()
//               setSubmitted(true)
//             }}
//           >
//             <Field label="Your Name" name="name" placeholder="Alex Morgan" />

//             <div className="grid gap-4 sm:grid-cols-2">
//               <Field
//                 label="Work Email"
//                 name="email"
//                 type="email"
//                 placeholder="alex@company.com"
//               />
//               <Field
//                 label="Company"
//                 name="company"
//                 placeholder="Company / Project name"
//                 required={false}
//               />
//             </div>

//             <div className="grid gap-1.5">
//               <label
//                 className="text-xs sm:text-[.8125rem] font-semibold text-[var(--gray)]"
//                 htmlFor="build-type"
//               >
//                 What are you looking to build? <span className="text-[var(--copper)]">*</span>
//               </label>
//               <select
//                 className="w-full border border-[var(--line-strong)] bg-[var(--charcoal)] p-3 text-sm sm:text-base text-[var(--cream)] outline-none transition-colors focus:border-[var(--copper)] focus:ring-1 focus:ring-[var(--copper)]"
//                 id="build-type"
//                 required
//                 defaultValue=""
//               >
//                 <option value="" disabled>
//                   Select project track
//                 </option>
//                 <option value="mvp">MVP</option>
//                 <option value="webapp">Web App</option>
//                 <option value="ai">AI Automation</option>
//                 <option value="other">Not sure yet </option>
//               </select>
//             </div>

//             <div className="grid gap-1.5">
//               <label
//                 className="text-xs sm:text-[.8125rem] font-semibold text-[var(--gray)]"
//                 htmlFor="description"
//               >
//                 Brief description of your problem / vision <span className="text-[var(--copper)]">*</span>
//               </label>
//               <textarea
//                 id="description"
//                 required
//                 rows={4}
//                 className="w-full resize-y border border-[var(--line-strong)] bg-[var(--charcoal)] p-3 text-sm sm:text-base text-[var(--cream)] placeholder:text-[var(--gray)]/60 outline-none transition-colors focus:border-[var(--copper)] focus:ring-1 focus:ring-[var(--copper)]"
//                 placeholder="What problem are you trying to solve, what are key requirements, and where are you stuck right now?"
//               />
//             </div>

//             <div className="grid gap-1.5">
//               <label
//                 className="text-xs sm:text-[.8125rem] font-semibold text-[var(--gray)]"
//                 htmlFor="timeline"
//               >
//                 Rough timeline <span className="text-[var(--copper)]">*</span>
//               </label>
//               <select
//                 className="w-full border border-[var(--line-strong)] bg-[var(--charcoal)] p-3 text-sm sm:text-base text-[var(--cream)] outline-none transition-colors focus:border-[var(--copper)] focus:ring-1 focus:ring-[var(--copper)]"
//                 id="timeline"
//                 required
//                 defaultValue=""
//               >
//                 <option value="" disabled>
//                   Select estimated start
//                 </option>
//                 <option value="asap">ASAP</option>
//                 <option value="1-3-months">1–3 months</option>
//                 <option value="3-6-months">3–6 months</option>
//                 <option value="exploring">Just exploring</option>
//               </select>
//             </div>

//             <button
//               className="mt-2 inline-flex w-full items-center justify-center border border-[var(--copper)] bg-[var(--copper)] px-6 py-3.5 font-[var(--head)] text-base font-semibold text-[var(--charcoal)] transition-colors hover:bg-[var(--copper-bright)] focus:outline-none focus:ring-2 focus:ring-[var(--copper)] focus:ring-offset-2 focus:ring-offset-[var(--charcoal)]"
//               type="submit"
//             >
//               Book my build call
//             </button>

//             <p className="text-center text-xs text-[var(--gray)]">
//               We respond within 1 business day — personally, no generic autoresponder.
//             </p>

//             {submitted && (
//               <div className="mt-2 border-l-4 border-l-[var(--copper)] bg-[var(--charcoal)] p-4 text-sm text-[var(--cream)]">
//                 <strong className="text-[var(--copper)]">Message received.</strong> A founder will review your note and reply within 1 business day.
//               </div>
//             )}
//           </motion.form>
//         </div>
//       </section>

//       {/* What happens next */}
//       <section className="border-b border-[var(--line)] px-0 py-12 sm:py-18 md:py-24">
//         <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
//           <SectionHeading title="What happens next" />
//           <StaggerContainer className="grid grid-cols-1">
//             {[
//               [
//                 'We respond within 1 business day',
//                 'Personally, not an autoresponder pretending to be personal.',
//               ],
//               [
//                 'We schedule a 20-minute call',
//                 'To understand the problem - not to run you through a sales script.',
//               ],
//               [
//                 'If it is a fit, you get a written scope outline',
//                 'Delivered within a few days of the call.',
//               ],
//               [
//                 'If it is not a fit, we will say so directly',
//                 'And where we can, point you toward what might be a better option.',
//               ],
//             ].map(([title, text], i) => (
//               <StaggerItem key={title}>
//                 <div className="grid grid-cols-[40px_1fr] sm:grid-cols-[56px_1fr] md:grid-cols-[64px_1fr] gap-4 sm:gap-6 border-t border-[var(--line)] py-6 sm:py-7">
//                   <span className="font-[var(--head)] text-xl sm:text-2xl md:text-3xl font-bold text-[var(--copper)]">
//                     0{i + 1}
//                   </span>
//                   <div>
//                     <h3 className="font-[var(--head)] text-lg sm:text-xl text-[var(--cream)]">
//                       {title}
//                     </h3>
//                     <p className="mt-1.5 text-sm sm:text-base leading-relaxed text-[var(--gray)]">
//                       {text}
//                     </p>
//                   </div>
//                 </div>
//               </StaggerItem>
//             ))}
//           </StaggerContainer>
//         </div>
//       </section>

//       {/* Email direct banner */}
//       <section className="border-b border-[var(--line)] px-0 py-12 sm:py-18 md:py-24">
//         <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
//           <FadeIn className="flex flex-col items-start justify-between gap-6 border border-[var(--copper)] bg-[var(--surface)] p-6 sm:p-8 md:flex-row md:items-center">
//             <p className="text-base sm:text-lg md:text-xl text-[var(--cream)] max-w-[54ch]">
//               Prefer email or a direct message? A founder reads and responds to every message personally - no ticket queue.
//             </p>
//             <a
//               href="mailto:woxbuilt@gmail.com"
//               className="shrink-0 font-[var(--head)] text-lg sm:text-xl md:text-2xl font-bold text-[var(--copper)] transition-colors hover:text-[var(--copper-bright)] break-all sm:break-normal"
//             >
//               woxbuilt@gmail.com
//             </a>
//           </FadeIn>
//         </div>
//       </section>

//       {/* Before you reach out */}
//       <section className="border-b border-[var(--line)] px-0 py-12 sm:py-18 md:py-24">
//         <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
//           <SectionHeading title="Before you reach out" />
//           <StaggerContainer className="grid gap-6 md:grid-cols-2">
//             <StaggerItem>
//               <article className="h-full border border-[var(--line-strong)] border-l-4 border-l-[var(--copper)] bg-[var(--surface)] p-6 sm:p-8">
//                 <h3 className="font-[var(--head)] text-lg sm:text-xl text-[var(--cream)]">
//                   Not sure if your project is a fit?
//                 </h3>
//                 <p className="mt-3 text-sm sm:text-base leading-relaxed text-[var(--gray)]">
//                   Send it anyway - the call is free and if we’re not right for it, we’ll say so immediately.
//                 </p>
//               </article>
//             </StaggerItem>
//             <StaggerItem>
//               <article className="h-full border border-[var(--line-strong)] border-l-4 border-l-[var(--copper)] bg-[var(--surface)] p-6 sm:p-8">
//                 <h3 className="font-[var(--head)] text-lg sm:text-xl text-[var(--cream)]">
//                   Worried about talking to “just two founders”?
//                 </h3>
//                 <p className="mt-3 text-sm sm:text-base leading-relaxed text-[var(--gray)]">
//                   That’s the direct access you're paying less for.
//                 </p>
//                 <Link
//                   to="/how-we-work"
//                   className="mt-4 inline-flex items-center gap-1 text-xs sm:text-sm font-semibold text-[var(--copper)] hover:text-[var(--copper-bright)]"
//                 >
//                   <span>See how we work</span>
//                   <span>→</span>
//                 </Link>
//               </article>
//             </StaggerItem>
//           </StaggerContainer>
//         </div>
//       </section>
//     </>
//   )
// }




import { useState } from 'react'

import { Link } from 'react-router-dom'

import { motion } from 'framer-motion'

import { SectionHeading } from '../components/Layout'

import { FadeIn, StaggerContainer, StaggerItem } from '../components/Motion'

import contactImage from '../assets/contactwoxbuilt.webp'

const Field = ({
  label,
  name,
  type = 'text',
  placeholder,
  required = true,
}) => (
  <div className="grid gap-1.5">
    <label
      className="text-xs sm:text-[.8125rem] font-semibold text-[var(--gray)]"
      htmlFor={name}
    >
      {label} {required && <span className="text-[var(--copper)]">*</span>}
    </label>

    <input
      id={name}
      name={name}
      type={type}
      placeholder={placeholder}
      required={required}
      className="w-full border border-[var(--line-strong)] bg-[var(--charcoal)] p-3 text-sm sm:text-base text-[var(--cream)] placeholder:text-[var(--gray)]/60 outline-none transition-colors focus:border-[var(--copper)] focus:ring-1 focus:ring-[var(--copper)]"
    />
  </div>
)

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()

    setLoading(true)
    setSubmitted(false)
    setError(false)

    const formData = new FormData(event.target)

  
    formData.append(
      'access_key',
      '4464d86d-c189-4ae9-ab11-eda666513b9b'
    )

    formData.append(
      'subject',
      'New Project Inquiry - WoxBuilt'
    )

    const data = Object.fromEntries(formData)

    try {
      const response = await fetch(
        'https://api.web3forms.com/submit',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify(data),
        }
      )

      const result = await response.json()

      if (result.success) {
        setSubmitted(true)
        event.target.reset()
      } else {
        setError(true)
      }
    } catch (error) {
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      {/* Contact Intro + Form */}
      <section className="border-b border-[var(--line)] px-0 py-12 sm:py-18 md:py-24">
        <div className="mx-auto grid max-w-[1200px] items-start gap-8 px-4 sm:gap-12 sm:px-6 lg:grid-cols-[1.1fr_.9fr] lg:gap-16 xl:gap-24">

          {/* Contact Intro */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="max-w-[16ch] font-[var(--head)] text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.1] tracking-tight text-[var(--cream)]">
              Tell us what you are building. We will give you a straight answer.
            </h1>

            <p className="mt-5 sm:mt-6 max-w-[52ch] text-base sm:text-lg md:text-xl leading-relaxed text-[var(--gray)]">
              No discovery-call theater. You will talk to one of the two senior engineers who would actually build your project, and you will know within 20 minutes whether we are a fit.
            </p>

            <div className="mt-8 sm:mt-10 overflow-hidden border border-[var(--line-strong)] bg-[var(--surface)] shadow-lg">
              <img
                className="block h-48 sm:h-56 md:h-64 w-full bg-[var(--surface-alt)] object-cover"
                src={contactImage}
                alt="WoxBuilt contact workspace"
                loading="lazy"
                decoding="async"
              />
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.55,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex flex-col gap-4 sm:gap-5 border border-[var(--line-strong)] bg-[var(--surface)] p-5 sm:p-7 md:p-8"
            onSubmit={handleSubmit}
          >
            <Field
              label="Your Name"
              name="name"
              placeholder="Alex Morgan"
            />

            <div className="grid gap-4 sm:grid-cols-2">
              <Field
                label="Work Email"
                name="email"
                type="email"
                placeholder="alex@company.com"
              />

              <Field
                label="Company"
                name="company"
                placeholder="Company / Project name"
                required={false}
              />
            </div>

            <div className="grid gap-1.5">
              <label
                className="text-xs sm:text-[.8125rem] font-semibold text-[var(--gray)]"
                htmlFor="build-type"
              >
                What are you looking to build?{' '}
                <span className="text-[var(--copper)]">*</span>
              </label>

              <select
                className="w-full border border-[var(--line-strong)] bg-[var(--charcoal)] p-3 text-sm sm:text-base text-[var(--cream)] outline-none transition-colors focus:border-[var(--copper)] focus:ring-1 focus:ring-[var(--copper)]"
                id="build-type"
                name="buildType"
                required
                defaultValue=""
              >
                <option value="" disabled>
                  Select project track
                </option>

                <option value="mvp">MVP</option>
                <option value="webapp">Web App</option>
                <option value="ai">AI Automation</option>
                <option value="other">Not sure yet</option>
              </select>
            </div>

            <div className="grid gap-1.5">
              <label
                className="text-xs sm:text-[.8125rem] font-semibold text-[var(--gray)]"
                htmlFor="description"
              >
                Brief description of your problem / vision{' '}
                <span className="text-[var(--copper)]">*</span>
              </label>

              <textarea
                id="description"
                name="description"
                required
                rows={4}
                className="w-full resize-y border border-[var(--line-strong)] bg-[var(--charcoal)] p-3 text-sm sm:text-base text-[var(--cream)] placeholder:text-[var(--gray)]/60 outline-none transition-colors focus:border-[var(--copper)] focus:ring-1 focus:ring-[var(--copper)]"
                placeholder="What problem are you trying to solve, what are key requirements, and where are you stuck right now?"
              />
            </div>

            <div className="grid gap-1.5">
              <label
                className="text-xs sm:text-[.8125rem] font-semibold text-[var(--gray)]"
                htmlFor="timeline"
              >
                Rough timeline{' '}
                <span className="text-[var(--copper)]">*</span>
              </label>

              <select
                className="w-full border border-[var(--line-strong)] bg-[var(--charcoal)] p-3 text-sm sm:text-base text-[var(--cream)] outline-none transition-colors focus:border-[var(--copper)] focus:ring-1 focus:ring-[var(--copper)]"
                id="timeline"
                name="timeline"
                required
                defaultValue=""
              >
                <option value="" disabled>
                  Select estimated start
                </option>

                <option value="asap">ASAP</option>
                <option value="1-3-months">1–3 months</option>
                <option value="3-6-months">3–6 months</option>
                <option value="exploring">Just exploring</option>
              </select>
            </div>

            <button
              className="mt-2 inline-flex w-full items-center justify-center border border-[var(--copper)] bg-[var(--copper)] px-6 py-3.5 font-[var(--head)] text-base font-semibold text-[var(--charcoal)] transition-colors hover:bg-[var(--copper-bright)] focus:outline-none focus:ring-2 focus:ring-[var(--copper)] focus:ring-offset-2 focus:ring-offset-[var(--charcoal)] disabled:cursor-not-allowed disabled:opacity-60"
              type="submit"
              disabled={loading}
            >
              {loading ? 'Sending...' : 'Book my build call'}
            </button>

            <p className="text-center text-xs text-[var(--gray)]">
              We respond within 1 business day — personally, no generic autoresponder.
            </p>

            {submitted && (
              <div className="mt-2 border-l-4 border-l-[var(--copper)] bg-[var(--charcoal)] p-4 text-sm text-[var(--cream)]">
                <strong className="text-[var(--copper)]">
                  Message received.
                </strong>{' '}
                A founder will review your note and reply within 1 business day.
              </div>
            )}

            {error && (
              <div className="mt-2 border-l-4 border-l-red-500 bg-[var(--charcoal)] p-4 text-sm text-[var(--cream)]">
                <strong className="text-red-400">
                  Something went wrong.
                </strong>{' '}
                Please try again.
              </div>
            )}
          </motion.form>
        </div>
      </section>

      {/* What happens next */}
      <section className="border-b border-[var(--line)] px-0 py-12 sm:py-18 md:py-24">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6">

          <SectionHeading title="What happens next" />

          <StaggerContainer className="grid grid-cols-1">
            {[
              [
                'We respond within 1 business day',
                'Personally, not an autoresponder pretending to be personal.',
              ],
              [
                'We schedule a 20-minute call',
                'To understand the problem - not to run you through a sales script.',
              ],
              [
                'If it is a fit, you get a written scope outline',
                'Delivered within a few days of the call.',
              ],
              [
                'If it is not a fit, we will say so directly',
                'And where we can, point you toward what might be a better option.',
              ],
            ].map(([title, text], i) => (
              <StaggerItem key={title}>
                <div className="grid grid-cols-[40px_1fr] sm:grid-cols-[56px_1fr] md:grid-cols-[64px_1fr] gap-4 sm:gap-6 border-t border-[var(--line)] py-6 sm:py-7">

                  <span className="font-[var(--head)] text-xl sm:text-2xl md:text-3xl font-bold text-[var(--copper)]">
                    0{i + 1}
                  </span>

                  <div>
                    <h3 className="font-[var(--head)] text-lg sm:text-xl text-[var(--cream)]">
                      {title}
                    </h3>

                    <p className="mt-1.5 text-sm sm:text-base leading-relaxed text-[var(--gray)]">
                      {text}
                    </p>
                  </div>

                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Email direct banner */}
      <section className="border-b border-[var(--line)] px-0 py-12 sm:py-18 md:py-24">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6">

          <FadeIn className="flex flex-col items-start justify-between gap-6 border border-[var(--copper)] bg-[var(--surface)] p-6 sm:p-8 md:flex-row md:items-center">

            <p className="text-base sm:text-lg md:text-xl text-[var(--cream)] max-w-[54ch]">
              Prefer email or a direct message? A founder reads and responds to every message personally - no ticket queue.
            </p>

            <a
              href="mailto:woxbuilt@gmail.com"
              className="shrink-0 font-[var(--head)] text-lg sm:text-xl md:text-2xl font-bold text-[var(--copper)] transition-colors hover:text-[var(--copper-bright)] break-all sm:break-normal"
            >
              woxbuilt@gmail.com
            </a>

          </FadeIn>
        </div>
      </section>

      {/* Before you reach out */}
      <section className="border-b border-[var(--line)] px-0 py-12 sm:py-18 md:py-24">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6">

          <SectionHeading title="Before you reach out" />

          <StaggerContainer className="grid gap-6 md:grid-cols-2">

            <StaggerItem>
              <article className="h-full border border-[var(--line-strong)] border-l-4 border-l-[var(--copper)] bg-[var(--surface)] p-6 sm:p-8">

                <h3 className="font-[var(--head)] text-lg sm:text-xl text-[var(--cream)]">
                  Not sure if your project is a fit?
                </h3>

                <p className="mt-3 text-sm sm:text-base leading-relaxed text-[var(--gray)]">
                  Send it anyway - the call is free and if we’re not right for it, we’ll say so immediately.
                </p>

              </article>
            </StaggerItem>

            <StaggerItem>
              <article className="h-full border border-[var(--line-strong)] border-l-4 border-l-[var(--copper)] bg-[var(--surface)] p-6 sm:p-8">

                <h3 className="font-[var(--head)] text-lg sm:text-xl text-[var(--cream)]">
                  Worried about talking to “just two founders”?
                </h3>

                <p className="mt-3 text-sm sm:text-base leading-relaxed text-[var(--gray)]">
                  That’s the direct access you're paying less for.
                </p>

                <Link
                  to="/how-we-work"
                  className="mt-4 inline-flex items-center gap-1 text-xs sm:text-sm font-semibold text-[var(--copper)] hover:text-[var(--copper-bright)]"
                >
                  <span>See how we work</span>
                  <span>→</span>
                </Link>

              </article>
            </StaggerItem>

          </StaggerContainer>
        </div>
      </section>
    </>
  )
}
