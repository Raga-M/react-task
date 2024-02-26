import React from 'react'
import Banner from "../../assets/website/orange-pattern.jpg";
const BannnerImg={
backgroundImage:`url(${Banner})`,
backgroundPosition:"center",
backgroungRepeat:"no-repeat",
backgroundSize:"cover",
width:"100%",
height:"100%"
};

const Subscribe = () => {
  return (
    <div className='bg-gray-100 mb-20 dark:bg-gray-800 text-white' style={BannnerImg} data-aos="zoom-in">
        <div className='container backdrop-blur-sm py-10'>
<div className='space-y-6 max-w-2xl mx-auto'>
    <h2 className='text-2xl sm:text-left !text-center  sm:text-4xl font-semibold' data-aos="fade-up">Get Notification About New Products</h2>
    <input type="text" placeholder='Enter your email'
    className='w-full p-3 focus:outline-none duration-300 text-black focus:scale-105 dark:bg-gray-700 dark:text-white'  data-aos="fade-up" data-aos-delay="500"/>
</div>
        </div>
        </div>
  )
}

export default Subscribe