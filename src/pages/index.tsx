import Head from 'next/head'
import { Box, Heading } from '@chakra-ui/react'
import { NextSeo } from 'next-seo'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Plans from './components/Plans'
import { useEffect } from 'react'
import Testimonials from './components/Testimonials'
import FAQs from './components/FAQs'
import Contact from './components/Contact'

export default function Home() {
  return (
    <>
      {/* <Head>
        <title>PLDT Home Fiber - Cavite Sales Agent</title>
        <meta name="description" content="Ronnie is a legit sales agent under HF3B Enterprise Inc. that provides PLDT Home Fiber  plans in Cavite." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/pldticon.ico" />
      </Head> */}
      <NextSeo
        title="PLDT Home Fiber - Cavite Sales Agent"
        description="Ronnie is a legit sales agent under HF3B Enterprise Inc. that provides PLDT Home Fiber  plans in Cavite."
        canonical="https://pldthomefiber.vercel.app/"
        openGraph={{
          url: "https://pldthomefiber.vercel.app/",
          title: "PLDT Home Fiber - Cavite Sales Agent",
          description: "Ronnie is a legit sales agent under HF3B Enterprise Inc. that provides PLDT Home Fiber  plans in Cavite.",
          images: [
            {
              url: '/og-1200x630.jpg',
              alt: 'PLDT Home Fiber OG Image',
              type: 'image/jpeg'
            }
          ]
        }}
      />

      <main>
        <Navbar />
        <Hero />
        <Plans />
        <Testimonials />
        <FAQs />
        <Contact />
      </main>
    </>
  )
}
