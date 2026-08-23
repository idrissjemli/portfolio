import Reveal from './Reveal.jsx'

/**
 * Enveloppe commune a toutes les sections ancrees.
 * `scroll-mt-20` evite que la barre fixe recouvre le titre a l'arrivee sur l'ancre.
 */
export default function Section({ id, title, children, className = '' }) {
  const titleId = `${id}-titre`

  return (
    <section
      id={id}
      aria-labelledby={titleId}
      className={`scroll-mt-20 border-t border-line/60 py-20 sm:py-24 ${className}`}
    >
      <div className="mx-auto w-full max-w-5xl px-5 sm:px-6">
        <Reveal>
          <h2 id={titleId} className="text-2xl font-semibold sm:text-3xl">
            {title}
          </h2>
          <span
            aria-hidden="true"
            className="mt-3 block h-0.5 w-12 rounded-full bg-accent"
          />
        </Reveal>

        <Reveal delay={0.08} className="mt-10">
          {children}
        </Reveal>
      </div>
    </section>
  )
}
