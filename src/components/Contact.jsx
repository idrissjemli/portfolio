import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { contact, ui } from '../data/content.js'
import SocialLinks from './SocialLinks.jsx'
import { MapPinIcon } from './Icons.jsx'

// `|| {}` : hors Vite (tests, rendu serveur), `import.meta.env` n'existe pas.
const env = import.meta.env || {}
const SERVICE_ID = env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ID = env.VITE_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY = env.VITE_EMAILJS_PUBLIC_KEY

/** Sans les trois variables, on le dit — on ne laisse pas l'envoi echouer en silence. */
const configure = Boolean(SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY)

const MESSAGES = {
  inactif: '',
  envoi: ui.form.sending,
  envoye: ui.form.sent,
  erreur: ui.form.error,
}

const CHAMP_CLASS =
  'w-full rounded-md border border-line-strong bg-card px-3 py-2 text-sm text-body placeholder:text-muted disabled:opacity-60'

export default function Contact() {
  const [statut, setStatut] = useState('inactif')

  async function envoyer(evenement) {
    evenement.preventDefault()
    const formulaire = evenement.currentTarget // nul apres l'await
    setStatut('envoi')

    try {
      const donnees = new FormData(formulaire)
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name: donnees.get('name'),
          email: donnees.get('email'),
          message: donnees.get('message'),
        },
        { publicKey: PUBLIC_KEY },
      )
      formulaire.reset()
      setStatut('envoye')
    } catch (erreur) {
      console.error('Envoi EmailJS impossible :', erreur)
      setStatut('erreur')
    }
  }

  return (
    <div>
      <h3 className="text-xl font-semibold sm:text-2xl">{contact.title}</h3>
      <p className="mt-3 max-w-2xl leading-relaxed text-muted">{contact.text}</p>

      <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_15rem] lg:gap-14">
        <form onSubmit={envoyer} noValidate={false}>
          {!configure && (
            <p className="mb-6 rounded-lg border border-line bg-card px-4 py-3 text-sm text-muted">
              {ui.form.unconfigured}
            </p>
          )}

          <fieldset disabled={!configure || statut === 'envoi'} className="space-y-5">
            {contact.fields.map((champ) => {
              const id = `champ-${champ.name}`
              return (
                <div key={champ.name}>
                  <label
                    htmlFor={id}
                    className="mb-2 block text-sm font-semibold"
                  >
                    {champ.label}
                  </label>

                  {champ.type === 'textarea' ? (
                    <textarea
                      id={id}
                      name={champ.name}
                      rows={6}
                      required
                      className={`${CHAMP_CLASS} resize-y`}
                    />
                  ) : (
                    <input
                      id={id}
                      name={champ.name}
                      type={champ.type}
                      required
                      autoComplete={champ.type === 'email' ? 'email' : 'name'}
                      className={CHAMP_CLASS}
                    />
                  )}
                </div>
              )
            })}

            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-accent/90 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {statut === 'envoi' ? ui.form.sending : ui.form.submit}
            </button>
          </fieldset>

          {/* Region toujours presente : une region aria-live creee au moment
              du changement n'est pas annoncee de facon fiable. */}
          <p
            role="status"
            aria-live="polite"
            className={`mt-4 text-sm ${statut === 'erreur' ? 'text-body' : 'text-muted'}`}
          >
            {MESSAGES[statut]}
          </p>
        </form>

        <aside className="lg:pt-1">
          <SocialLinks withLabels className="-ml-2" />
          <p className="mt-4 inline-flex items-center gap-3 px-2 text-sm text-muted">
            <MapPinIcon className="h-5 w-5 shrink-0" />
            {contact.location}
          </p>
        </aside>
      </div>
    </div>
  )
}
