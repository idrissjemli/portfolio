import { certifications } from '../data/content.js'

/**
 * `aspect-[3/2] object-contain` et non `object-cover` : ce sont des documents
 * portant du texte, dont les rapports vont de 1,42 a 1,78. Un recadrage
 * couperait des libelles.
 */
function Vignette({ certification }) {
  return (
    <>
      <img
        src={certification.image}
        alt={`Certification ${certification.title}`}
        loading="lazy"
        decoding="async"
        className="aspect-[3/2] w-full border-b border-line bg-ink object-contain p-3"
      />
      <div className="p-4">
        <h3 className="text-sm font-semibold">{certification.title}</h3>
        <p className="mt-1 text-sm text-muted">{certification.org}</p>
      </div>
    </>
  )
}

export default function Certifications() {
  return (
    <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {certifications.map((certification) => (
        <li key={certification.title} className="h-full">
          {certification.link ? (
            <a
              href={certification.link}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`Vérifier la certification ${certification.title} (nouvel onglet)`}
              className="flex h-full flex-col overflow-hidden rounded-xl border border-line bg-card transition-colors hover:border-accent"
            >
              <Vignette certification={certification} />
            </a>
          ) : (
            // Pas de lien de verification : la vignette n'est pas cliquable.
            <div className="flex h-full flex-col overflow-hidden rounded-xl border border-line bg-card">
              <Vignette certification={certification} />
            </div>
          )}
        </li>
      ))}
    </ul>
  )
}
