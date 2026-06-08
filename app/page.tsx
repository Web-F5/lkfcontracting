import { Header } from '@/components/header'
import HeroSection from '@/components/hero-section'
import AboutSection from '@/components/about-section'
import TrustSection from '@/components/trust-section'
import { ServicesGrid } from '@/components/services-grid'
import { ServiceDetails } from '@/components/service-details'
import { ContactForm } from '@/components/contact-form'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <TrustSection />
        <ServicesGrid />
        <ServiceDetails />
        <ContactForm />
      </main>
      <Footer />
    </>
  )
}
