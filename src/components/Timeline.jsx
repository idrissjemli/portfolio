import { timeline } from '../data/content.js'

/**
 * Frise verticale : les postes du plus recent au plus ancien, puis la formation.
 * Toutes les entrees sont rendues de la meme facon — `type` n'est pas utilise
 * visuellement, la formation est « une entree de plus ».
 */
export default function Timeline() {
  return (
    <ol className="relative space-y-10 border-l border-line">
      {timeline.map((item) => (
        <li key={`${item.company}-${item.period}`} className="relative pl-6 sm:pl-8">
          <span
            aria-hidden="true"
            className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-accent ring-4 ring-ink"
          />

          <h3 className="font-semibold">{item.role}</h3>

          <p className="mt-1 text-sm">
            <span className="font-semibold text-accent">{item.company}</span>
            <span className="text-muted">
              {item.place ? ` · ${item.place}` : ''} · {item.period}
            </span>
          </p>

          <p className="mt-3 leading-relaxed text-muted">{item.description}</p>

          {item.document && (
            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href={item.document.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-md border border-accent bg-accent/10 px-3 py-2 text-sm font-medium text-body transition hover:bg-accent/20"
              >
                {item.document.label}
              </a>

              {item.document.download && (
                <a
                  href={item.document.href}
                  download
                  className="inline-flex items-center rounded-md border border-line px-3 py-2 text-sm text-muted transition hover:border-accent hover:text-body"
                >
                  Télécharger
                </a>
              )}
            </div>
          )}
        </li>
      ))}
    </ol>
  )
}
