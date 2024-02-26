
import React from 'react'
import Img1 from "../../assets/women/women.png"
import Img2 from "../../assets/women/women2.jpg"
import Img3 from "../../assets/women/women3.jpg"
import Img4 from "../../assets/women/women4.jpg"
import { FaStar } from "react-icons/fa";
const ProductsData = [
    {
      id: 1,
      img: Img1,
      title: "Women Ethnic",
      rating: 5.0,
      color: "white",
      aosDelay: "0",
    },
    {
      id: 2,
      img: Img2,
      title: "Women western",
      rating: 4.5,
      color: "Red",
      aosDelay: "200",
    },
    {
      id: 3,
      img: Img3,
      title: "Goggles",
      rating: 4.7,
      color: "brown",
      aosDelay: "400",
    },
    {
      id: 4,
      img: Img4,
      title: "Printed T-Shirt",
      rating: 4.4,
      color: "Yellow",
      aosDelay: "600",
    },
    {
      id: 5,
      img: Img2,
      title: "Fashin T-Shirt",
      rating: 4.5,
      color: "Pink",
      aosDelay: "800",
    },
  ];
  
const Product = () => {
  return (
    <div className='mt-14 mb-12'>
        <div className="container">
            <div className="text-center max-w-[600px] mz-auto mx-auto">
<p  className="text-sm text-primary font-medium" data-aos="fade-up">
    Top Selling Product For You
</p>
<h1 className='text-3xl font-bold' data-aos="fade-up">Products</h1>
<p className="text-sm text-gray-700 mb-5 dark:text-white/80" data-aos="fade-up">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias neque architecto illum ipsa minus.
</p>
            </div>
            <div>
                <div className='grid grid-col-2 sm:grid-cols-3
                md:grid-cols-4 lg:grid-cols-5 place-items-center gap-2 sm:gap-5'>
{/* card section */}
{
ProductsData.map(data=>(
<div className='space-y-3' data-aos="fade-up" data-aos-delay={data.aosDelay}  key={data.id}>
    <img src={data.img} className='h-[220px] w-[150px] object-cover rounded-md' alt="" />
    <div className='p-3'>
        <h3>
            {data.title}
        </h3>
        <p>{data.color}</p>
        <div className='flex place-items-center gap-1'>
            <FaStar className='text-primary/70'/> 
            <span>{data.rating}</span>
        </div>
    </div>
</div>
))
}
                </div>

                {/*view btn */}
                <div className='flex justify-center'>
                  <button className='text-center mt-10 bg-primary text-white py-2 px-5 rounded-md duration-300 hover:scale-95 '>View All</button>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Product