import React, { useEffect } from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import Product from './components/product/Product'
import AOS from "aos"
import "aos/dist/aos.css"
import TopProduct from './components/topProduct/TopProduct'
import Banner from './components/banner/Banner'
import Subscribe from './components/subscribe/Subscribe'
import Testimonial from './components/testimonial/Testimonial'
import Footer from './components/footer/Footer'
const App = () => {
  useEffect(()=>{
  AOS.init({
    offset:100,
    duration:800,
    essing:"ease-in-sine",
    delay:100,
  });
  AOS.refresh()
  },[])
  return (
    <div className='dark:bg-gray-700 dark:text-white'>
      <Navbar/>
      <Hero/>
      <Product/>
      <TopProduct/>
      <Banner/>
      <Subscribe/>
      <Product/>
      <Testimonial/>
      <Footer/>
    </div>
  )
}

export default App