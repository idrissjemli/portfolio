import { useEffect, useState } from 'react'
import { hero, identity } from '../data/content.js'
import useReducedMotion from '../lib/useReducedMotion.js'
import { DownloadIcon } from './Icons.jsx'
import SocialLinks from './SocialLinks.jsx'

const TYPE_MS = 70
const DELETE_MS = 35
const HOLD_MS = 1700

/** Enchaine les titres de `hero.typewriter` caractere par caractere. */
function useTypewriter(words) {
  const reduced = useReducedMotion()
  const [index, setIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    if (reduced) return undefined

    const word = words[index]

    if (!deleting && text === word) {
      const timer = setTimeout(() => setDeleting(true), HOLD_MS)
      return () => clearTimeout(timer)
    }

    if (deleting && text === '') {
      setDeleting(false)
      setIndex((current) => (current + 1) % words.length)
      return undefined
    }

    const timer = setTimeout(
      () =>
        setText((current) =>
          deleting
            ? word.slice(0, current.length - 1)
            : word.slice(0, current.length + 1),
        ),
      deleting ? DELETE_MS : TYPE_MS,
    )
    return () => clearTimeout(timer)
  }, [text, deleting, index, words, reduced])

  // Sans animation, le premier titre est affiche tel quel.
  return reduced ? words[0] : text
}

const BUTTON_VARIANTS = {
  primary: 'bg-accent text-ink hover:bg-accent/90',
  secondary:
    'border border-line text-body hover:border-accent hover:text-accent',
  ghost: 'border border-transparent text-muted hover:text-accent',
}

export default function Hero() {
  const typed = useTypewriter(hero.typewriter)

  // Reserve la hauteur du titre le plus long : aucun saut quand le texte change.
  const longest = hero.typewriter.reduce((a, b) => (b.length > a.length ? b : a))

  return (
    <section
      id="accueil"
      aria-labelledby="accueil-titre"
      className="flex min-h-[calc(100dvh-4rem)] scroll-mt-20 items-center pt-16"
    >
      <div className="mx-auto w-full max-w-5xl px-5 py-12 sm:px-6">
        <h1
          id="accueil-titre"
          className="text-4xl font-semibold tracking-tight sm:text-5xl"
        >
          {identity.name}
        </h1>

        {/* Les trois titres, lus une seule fois par les lecteurs d'ecran. */}
        <p className="sr-only">{hero.typewriter.join(' · ')}</p>

        <p
          aria-hidden="true"
          className="relative mt-4 text-xl font-semibold sm:text-2xl"
        >
          <span className="invisible">{longest}</span>
          <span className="absolute inset-0 text-accent">
            {typed}
            <span className="animate-caret ml-0.5 font-normal text-accent">
              |
            </span>
          </span>
        </p>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
          {hero.tagline.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </p>

        <div className="mt-9 flex flex-wrap gap-3">
          {hero.buttons.map((button) => (
            <a
              key={button.label}
              href={button.href}
              {...(button.download ? { download: '' } : {})}
              className={[
                'inline-flex items-center gap-2 rounded-md px-5 py-2.5 text-sm font-semibold transition-colors',
                BUTTON_VARIANTS[button.variant],
              ].join(' ')}
            >
              {button.download && <DownloadIcon className="h-4 w-4" />}
              {button.label}
            </a>
          ))}
        </div>

        <div className="mt-8 -ml-2">
          <SocialLinks />
        </div>
      </div>
    </section>
  )
}
