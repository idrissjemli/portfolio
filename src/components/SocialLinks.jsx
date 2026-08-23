import { identity } from '../data/content.js'
import { GitHubIcon, LinkedInIcon, MailIcon } from './Icons.jsx'

const links = [
  { key: 'github', href: identity.github, label: 'GitHub', Icon: GitHubIcon },
  {
    key: 'linkedin',
    href: identity.linkedin,
    label: 'LinkedIn',
    Icon: LinkedInIcon,
  },
  {
    key: 'email',
    href: `mailto:${identity.email}`,
    label: identity.email,
    Icon: MailIcon,
  },
]

/**
 * Liens GitHub / LinkedIn / email.
 * `withLabels` affiche le libelle a cote de l'icone (utilise par la section Contact).
 */
export default function SocialLinks({ withLabels = false, className = '' }) {
  return (
    <ul className={`flex ${withLabels ? 'flex-col gap-1' : 'gap-1'} ${className}`}>
      {links.map(({ key, href, label, Icon }) => (
        <li key={key}>
          <a
            href={href}
            {...(key === 'email'
              ? {}
              : { target: '_blank', rel: 'noreferrer noopener' })}
            aria-label={withLabels ? undefined : label}
            className={[
              'inline-flex items-center rounded-md text-muted transition-colors hover:text-accent',
              withLabels
                ? 'gap-3 px-2 py-2 text-sm'
                : 'h-10 w-10 justify-center',
            ].join(' ')}
          >
            <Icon className="h-5 w-5 shrink-0" />
            {withLabels && <span className="break-all">{label}</span>}
          </a>
        </li>
      ))}
    </ul>
  )
}
