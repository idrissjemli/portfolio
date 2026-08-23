import { useState } from 'react'
import { projectFilters, projects } from '../data/content.js'
import { GitHubIcon } from './Icons.jsx'

const TOUS = projectFilters[0]

export default function Projects() {
  const [filtre, setFiltre] = useState(TOUS)

  const visibles =
    filtre === TOUS
      ? projects
      : projects.filter((projet) => projet.categories.includes(filtre))

  return (
    <div>
      <div
        role="group"
        aria-label="Filtrer les projets par catégorie"
        className="flex flex-wrap gap-2"
      >
        {projectFilters.map((categorie) => {
          const actif = filtre === categorie
          return (
            <button
              key={categorie}
              type="button"
              aria-pressed={actif}
              onClick={() => setFiltre(categorie)}
              className={[
                'rounded-full border px-4 py-1.5 text-sm transition-colors',
                actif
                  ? 'border-accent bg-accent/10 font-semibold text-accent'
                  : 'border-line text-muted hover:border-accent hover:text-accent',
              ].join(' ')}
            >
              {categorie}
            </button>
          )
        })}
      </div>

      {/* Le filtrage est muet pour un lecteur d'ecran sans cette annonce. */}
      <p aria-live="polite" className="sr-only">
        {visibles.length} projet{visibles.length > 1 ? 's' : ''} affiché
        {visibles.length > 1 ? 's' : ''}
      </p>

      {visibles.length === 0 ? (
        <p className="mt-8 text-muted">Aucun projet dans cette catégorie.</p>
      ) : (
        <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visibles.map((projet) => (
            <li key={projet.id}>
              <article className="flex h-full flex-col overflow-hidden rounded-xl border border-line bg-card">
                <img
                  src={projet.image}
                  alt={`Aperçu du projet ${projet.title}`}
                  loading="lazy"
                  decoding="async"
                  className="aspect-video w-full border-b border-line object-cover"
                />

                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-semibold">{projet.title}</h3>
                  {projet.subtitle && (
                    <p className="mt-1 text-sm text-accent">{projet.subtitle}</p>
                  )}

                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                    {projet.description}
                  </p>

                  <ul className="mt-4 flex flex-wrap gap-2">
                    {projet.stack.map((techno) => (
                      <li
                        key={techno}
                        className="rounded-full border border-line bg-ink px-2.5 py-1 text-xs text-muted"
                      >
                        {techno}
                      </li>
                    ))}
                  </ul>

                  {/* `github` vaut null tant qu'aucun depot n'est connu. */}
                  {projet.github && (
                    <a
                      href={projet.github}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label={`Code source de ${projet.title} sur GitHub`}
                      className="mt-5 inline-flex items-center gap-2 self-start rounded-md border border-line px-4 py-2 text-sm font-semibold transition-colors hover:border-accent hover:text-accent"
                    >
                      <GitHubIcon className="h-4 w-4" />
                      GitHub
                    </a>
                  )}
                </div>
              </article>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
