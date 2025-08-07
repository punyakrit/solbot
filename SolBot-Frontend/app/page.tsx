import React from 'react'
import Navebar from '@/components/main/Navbar'
import Hero from '@/components/landing/Hero'
import LogoTicker from '@/components/landing/LogoTicker'
import Introduction from '@/components/landing/Introduction'
import Features from '@/components/landing/Featores'
import Faq from '@/components/landing/Faq'

function page() {
  return (
    <div>
      <Navebar />
      <Hero/>
      <LogoTicker/>
      <Introduction/>
      <Features/>
      <Faq/>
    </div>
  )
}

export default page
