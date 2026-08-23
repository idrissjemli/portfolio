import { about } from '../data/content.js'
import { withEmphasis } from '../lib/text.jsx'

export default function About() {
  return (
    <div className="grid items-start gap-10 md:grid-cols-[auto_1fr] md:gap-12">
      <img
        src={about.photo.src}
        alt={about.photo.alt}
        width={600}
        height={600}
        loading="lazy"
        decoding="async"
        className="h-40 w-40 justify-self-center rounded-full border border-line object-cover sm:h-48 sm:w-48 md:justify-self-start lg:h-56 lg:w-56"
      />

      <div>
        <div className="space-y-5">
          {about.paragraphs.map((paragraph) => (
            <p
              key={paragraph.slice(0, 40)}
              className="leading-relaxed text-muted"
            >
              {withEmphasis(paragraph)}
            </p>
          ))}
        </div>

        <p className="mt-8 rounded-lg border border-line bg-card px-5 py-4 text-sm text-muted">
          <span className="font-semibold text-body">{about.aside.label}</span> :{' '}
          {about.aside.value}
        </p>
      </div>
    </div>
  )
}
