import Courses from '@/Components/Courses'
import HeroPage from '@/Components/Hero/HeroPage'
import Navbar from '@/Components/Navbar/Navbar'
import RelatedDeals from '@/Components/RelatedDeals'
import SignUp from '@/Components/SignUp'
import Footer from '@/Components/Footer'
import React from 'react'

export default function page() {
  return (
    <>
      <Navbar />
      <div className='sm:px-10 py-10 max-sm:px-3'>
        <HeroPage />
        <Courses />
        <RelatedDeals />
        <SignUp />
      </div>
      <Footer />
    </>
  )
}
