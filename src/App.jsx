import { useState } from 'react'
import './App.css'
import Section1 from './sections/Section1/Section1'
import Section2 from './sections/Section2/Section2'
import Section3 from './sections/Section3/Section3'
import Section4 from './sections/Section4/Section4'
import Section5 from './sections/Section5/Section5'
import Section6 from './sections/Section6/Section6'
import Header from './components/Header/Header'

function App() {
  return (
    <>
      <Header />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
    </>
  )
}

export default App
