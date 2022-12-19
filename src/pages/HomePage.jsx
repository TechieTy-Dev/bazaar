import React from 'react'
import { Hero, Auction, Creators, Collections, Resources, Footer } from '../components'

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Auction />
      <Creators />
      <Collections />
      <Resources />
      <Footer />
    </div>
  )
}

export default HomePage