import { cv, ui } from '../data/content.js'
import { DownloadIcon, ExternalLinkIcon } from './Icons.jsx'

export default function Cv() {
  return (
    <div>
      {/* Boutons places avant le visualiseur : sur mobile, beaucoup de
          navigateurs refusent d'afficher un PDF en iframe, le telechargement
          est alors le seul chemin — il doit etre rencontre en premier. */}
      <div className="flex flex-wrap gap-3">
        {cv.downloads.map((fichier, index) => (
          <a
            key={fichier.lang}
            href={fichier.href}
            download=""
            className={[
              'inline-flex items-center gap-2 rounded-md px-5 py-2.5 text-sm font-semibold transition-colors',
              index === 0
                ? 'bg-accent text-ink hover:bg-accent/90'
                : 'border border-line text-body hover:border-accent hover:text-accent',
            ].join(' ')}
          >
            <DownloadIcon className="h-4 w-4" />
            {fichier.label}
          </a>
        ))}
      </div>

      {/* Sous 768 px, la plupart des navigateurs mobiles refusent de rendre un
          PDF en iframe et laissent un cadre blanc. On l'ouvre directement. */}
      <a
        href={cv.embedded}
        target="_blank"
        rel="noreferrer noopener"
        className="mt-8 flex items-center justify-center gap-2 rounded-xl border border-line bg-card px-5 py-4 font-semibold transition-colors hover:border-accent hover:text-accent md:hidden"
      >
        <ExternalLinkIcon className="h-5 w-5 shrink-0" />
        {ui.cv.open}
      </a>

      <div className="mt-8 hidden overflow-hidden rounded-xl border border-line bg-card md:block">
        <iframe
          src={cv.embedded}
          title={ui.cv.iframeTitle}
          className="h-[70vh] min-h-[480px] w-full"
        />
      </div>
    </div>
  )
}
