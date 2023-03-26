import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Wayfinder from './components/Wayfinder'
import About from './components/About'
import Services from './components/Services'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Glass and Aluminum Works by Telly</title>
        <meta name="description" content="Telly is a freelance fabricator with more than a decade of experience in glass and aluminum works." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        <Navbar />
        <Hero />
        <Wayfinder />
        <About />
        <Services />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  )
}
