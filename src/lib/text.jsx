import { Fragment } from 'react'

/**
 * Rend les emphases `**...**` heritees de CONTENU.md en <strong>.
 * Unique endroit du projet qui interprete le balisage de la source.
 */
export function withEmphasis(text) {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, index) =>
    part.startsWith('**') && part.endsWith('**') ? (
      <strong key={index} className="font-semibold text-body">
        {part.slice(2, -2)}
      </strong>
    ) : (
      <Fragment key={index}>{part}</Fragment>
    ),
  )
}
