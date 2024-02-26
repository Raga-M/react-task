import React from 'react'
import BannerImg from "../../assets/women/women2.jpg";
import { MdOutlineSecurity } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlinePayments } from "react-icons/md";
import { BiSolidOffer } from "react-icons/bi";
const Banner = () => {
  return (

    <div className='min-h-[550px] flex justify-center items-center py-12 sm:py-0'>
        <div className='container'>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center ">
<div data-aos="zoom-in">
    <img src={BannerImg} className='max-w-[400px] h-[350px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,0.8)] object-cover ' alt="" />
</div>
<div className='flex flex-col justify-center gap-6 sm:pt-0'>
    <h1 className='text-3xl sm:text-4xl font-bold' data-aos="fade-up">Winter sale upto 50% off</h1>
    <p className='text-sm text-gray-500 tracking-wide leading-5' data-aos="fade-up">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, repellendus ipsum. Nobis, possimus quasi. Quaerat inventore omnis dolor magni ducimus.</p>
<div className='flex flex-col gap-4'>
    <div className='flex items-center gap-5' data-aos="fade-up">
        <MdOutlineSecurity className='w-12 h-12 rounded-full bg-violet-200 dark:bg-violet-400 text-4xl p-4 shadow-sm '/>
        <p className='text-lg'>Quality Product</p>
    </div>
    <div className='flex items-center gap-5' data-aos="fade-up">
        <TbTruckDelivery className='w-12 h-12 rounded-full bg-orange-200 dark:bg-orange-400 text-4xl p-4 shadow-sm '/>
        <p className='text-lg'>Fast Delivery</p>
    </div>
    <div className='flex items-center gap-5' data-aos="fade-up">
        <MdOutlinePayments className='w-12 h-12 rounded-full bg-green-200 dark:bg-green-400 text-4xl p-4 shadow-sm '/>
        <p className='text-lg'>Easy Payment Method</p>
    </div>
    <div className='flex items-center gap-5' data-aos="fade-up">
        <BiSolidOffer className='w-12 h-12 rounded-full bg-yellow-200 dark:bg-yellow-400 text-4xl p-4 shadow-sm '/>
        <p className='text-lg'>Get Offer</p>
    </div>
</div>
</div>
        </div>
        </div>
        </div>
  )
}

export default Banner