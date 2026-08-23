import { skills } from '../data/content.js'

export default function Skills() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {skills.map((group) => (
        <article
          key={group.group}
          className="rounded-xl border border-line bg-card p-5"
        >
          <h3 className="font-semibold text-body">{group.group}</h3>
          <ul className="mt-4 flex flex-wrap gap-2">
            {group.items.map((item) => (
              <li
                key={item}
                className="rounded-full border border-line bg-ink px-3 py-1 text-sm text-muted"
              >
                {item}
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  )
}
