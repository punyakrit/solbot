import React from 'react'
import Navebar from '@/components/main/Navbar'
import Hero from '@/components/landing/Hero'
import LogoTicker from '@/components/landing/LogoTicker'
import Introduction from '@/components/landing/Introduction'
import Features from '@/components/landing/Featores'
import Faq from '@/components/landing/Faq'
import Cta from '@/components/landing/Cta'
import Footer from '@/components/landing/Footer'

function page() {
  return (
    <div>
      <Navebar />
      <Hero/>
      <LogoTicker/>
      <Introduction/>
      <Features/>
      <Faq/>
      <Cta/>
      <Footer/>
    </div>
  )
}

export default page
