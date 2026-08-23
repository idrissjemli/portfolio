import { useEffect, useState } from 'react'
import { identity, nav } from '../data/content.js'

const NAVBAR_HEIGHT = 'h-16' // 4rem — a garder aligne avec scroll-padding-top dans index.css

/** Renvoie l'id de la section actuellement en vue. */
function useActiveSection() {
  const [active, setActive] = useState(nav[0].id)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        if (visible.length > 0) setActive(visible[0].target.id)
      },
      // la zone d'observation demarre sous la barre fixe et s'arrete a mi-ecran,
      // pour que la section « active » soit celle qu'on lit, pas celle qui sort.
      { rootMargin: '-72px 0px -55% 0px', threshold: 0 },
    )

    const observed = nav
      .map((item) => document.getElementById(item.id))
      .filter(Boolean)
    observed.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  return active
}

function MenuIcon({ open }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      className="h-5 w-5"
      aria-hidden="true"
    >
      {open ? (
        <path d="M6 6l12 12M18 6L6 18" />
      ) : (
        <path d="M4 7h16M4 12h16M4 17h16" />
      )}
    </svg>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const active = useActiveSection()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Le menu mobile n'a pas de raison de rester ouvert au clavier ni en desktop.
  useEffect(() => {
    if (!open) return
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setOpen(false)
    }
    const desktop = window.matchMedia('(min-width: 1024px)')
    const onChange = (event) => {
      if (event.matches) setOpen(false)
    }
    document.addEventListener('keydown', onKeyDown)
    desktop.addEventListener('change', onChange)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      desktop.removeEventListener('change', onChange)
    }
  }, [open])

  const linkClass = (id) =>
    [
      'rounded-sm text-sm transition-colors',
      active === id ? 'text-accent' : 'text-muted hover:text-body',
    ].join(' ')

  return (
    <header
      className={[
        'fixed inset-x-0 top-0 z-50 border-b bg-ink/80 backdrop-blur-md transition-colors',
        scrolled ? 'border-line' : 'border-transparent',
      ].join(' ')}
    >
      <nav
        aria-label="Navigation principale"
        className={`mx-auto flex ${NAVBAR_HEIGHT} max-w-5xl items-center justify-between gap-4 px-5 sm:px-6`}
      >
        <a
          href="#accueil"
          onClick={() => setOpen(false)}
          className="rounded-sm text-base font-semibold text-body transition-colors hover:text-accent"
        >
          {identity.name}
        </a>

        {/* Navigation deroulee — a partir de lg, ou les huit libelles tiennent sur une ligne. */}
        <ul className="hidden items-center gap-6 lg:flex">
          {nav.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                aria-current={active === item.id ? 'true' : undefined}
                className={linkClass(item.id)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          className="-mr-2 inline-flex h-10 w-10 items-center justify-center rounded-md text-muted transition-colors hover:text-body lg:hidden"
        >
          <MenuIcon open={open} />
        </button>
      </nav>

      {open && (
        <div
          id="menu-mobile"
          className="animate-menu-in max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-line bg-ink lg:hidden"
        >
          <ul className="mx-auto max-w-5xl px-5 py-3 sm:px-6">
            {nav.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  aria-current={active === item.id ? 'true' : undefined}
                  className={`block rounded-md px-2 py-3 ${linkClass(item.id)}`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
