import { useEffect } from 'react'
import { LanguageProvider } from './i18n/LanguageProvider'
import { ThemeProvider } from './theme/ThemeProvider'
import { useTranslation } from './hooks/useTranslation'
import { useReveal } from './hooks/useReveal'
import { applySeo } from './lib/seo'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Intro } from './components/Intro'
import { Features } from './components/Features'
import { Services } from './components/Services'
import { Regions } from './components/Regions'
import { Pricing } from './components/Pricing'
import { Subsidies } from './components/Subsidies'
import { CtaBanner } from './components/CtaBanner'
import { Faq } from './components/Faq'
import { ContactForm } from './components/ContactForm'
import { Footer } from './components/Footer'

function Site() {
  const { t, lang } = useTranslation()
  useReveal()

  useEffect(() => {
    applySeo(t.meta)
  }, [t.meta, lang])

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Intro />
        <Features />
        <Services />
        <Regions />
        <Pricing />
        <Subsidies />
        <CtaBanner />
        <Faq />
        <ContactForm />
      </main>
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Site />
      </LanguageProvider>
    </ThemeProvider>
  )
}
