import React from 'react'
import Categories from '../../components/Categories/Categories'
import Contact from '../../components/Contact/Contact'
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts'
//import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts'
import Slider from '../../components/Slider/Slider'

//<FeaturedProducts/>
const Home = () => {
 
  return (
    <div className='home'>
      <Slider/>
      <FeaturedProducts type="trending"/>
      <Categories/>
      <FeaturedProducts type="featured"/>
      <Contact/>
     
    </div>
  )
}

export default Home