import { useEffect, useRef, useState } from 'react'

/**
 * Apparition discrete au defilement : IntersectionObserver pour declencher,
 * transition CSS pour animer. Ne se joue qu'une fois par element.
 *
 * L'etat masque est porte par des variantes `motion-safe:` uniquement : sous
 * `prefers-reduced-motion: reduce`, le contenu est visible des le premier rendu,
 * sans transition et sans dependre de l'observer.
 */
export default function Reveal({ children, delay = 0, className = '' }) {
  const ref = useRef(null)
  // Si l'observer n'existe pas (navigateur ancien), on affiche sans attendre.
  const [visible, setVisible] = useState(
    () => typeof IntersectionObserver === 'undefined',
  )

  useEffect(() => {
    if (visible) return undefined

    const element = ref.current
    if (!element) return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { rootMargin: '0px 0px -60px 0px', threshold: 0 },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [visible])

  return (
    <div
      ref={ref}
      style={delay ? { transitionDelay: `${delay}s` } : undefined}
      className={[
        'motion-safe:transition motion-safe:duration-500 motion-safe:ease-out',
        // Les deux bornes sont declarees explicitement : sans `translate-y-0`,
        // l'etat final n'aurait plus de propriete `translate` a interpoler.
        visible
          ? 'opacity-100 motion-safe:translate-y-0'
          : 'motion-safe:translate-y-4 motion-safe:opacity-0',
        className,
      ].join(' ')}
    >
      {children}
    </div>
  )
}
