import React from 'react'
import Homehead from '../Components/Home/Homehead'
import ToursCards from '../Components/Home/ToursCards'
import TransportInfo from '../Components/Home/TransportInfo'

export default function Home() {
  return (
    <section className='Home'>
      <Homehead/>
      <ToursCards/>
      <TransportInfo/>
    </section>
  )
}
