import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Work from '@/components/Work'
import CaseStudies from '@/components/CaseStudies'
import Play from '@/components/Play'
import Connect from '@/components/Connect'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Work />
        <CaseStudies />
        <Play />
        <Connect />
      </main>
      <Footer />
    </>
  )
}
