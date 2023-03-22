import React from 'react'
import Categories from './components/Categories'
import Food from './components/Food'
import HeadlineCards from './components/HeadlineCards'
import Hero from './components/Hero'
import Navbar from './components/Navbar'

const App = () => {

  return (
    <div>
        <Navbar />
        <Hero />
        <HeadlineCards />
        <Food />
        <Categories />
    </div>
  )
}

export default App