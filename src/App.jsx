import Navbar from './components/Navbar.jsx'
import Section from './components/Section.jsx'
import Footer from './components/Footer.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Timeline from './components/Timeline.jsx'
import Projects from './components/Projects.jsx'
import Certifications from './components/Certifications.jsx'
import Cv from './components/Cv.jsx'
import Contact from './components/Contact.jsx'
import { nav } from './data/content.js'

const titre = (id) => nav.find((item) => item.id === id).label

export default function App() {
  return (
    <>
      <a
        href="#contenu"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-card focus:px-4 focus:py-2 focus:text-sm focus:text-body"
      >
        Aller au contenu
      </a>

      <Navbar />

      <main id="contenu">
        <Hero />

        <Section id="a-propos" title={titre('a-propos')}>
          <About />
        </Section>

        <Section id="competences" title={titre('competences')}>
          <Skills />
        </Section>

        <Section id="experiences" title={titre('experiences')}>
          <Timeline />
        </Section>

        <Section id="projets" title={titre('projets')}>
          <Projects />
        </Section>

        <Section id="certifications" title={titre('certifications')}>
          <Certifications />
        </Section>

        <Section id="cv" title={titre('cv')}>
          <Cv />
        </Section>

        <Section id="contact" title={titre('contact')}>
          <Contact />
        </Section>
      </main>

      <Footer />
    </>
  )
}
