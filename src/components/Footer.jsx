import { footer } from '../data/content.js'

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto max-w-5xl px-5 py-10 sm:px-6">
        <p className="text-center text-sm text-muted">{footer}</p>
      </div>
    </footer>
  )
}
