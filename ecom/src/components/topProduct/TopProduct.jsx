import React from "react";
import Img1 from "../../assets/shirt/shirt.png";
import Img2 from "../../assets/shirt/shirt2.png";
import Img3 from "../../assets/shirt/shirt3.png";
import { FaStar } from "react-icons/fa";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Casual Wear",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    img: Img2,
    title: "Printed shirt",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    img: Img3,
    title: "Women shirt",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const TopProduct = () => {
  return (
    <div>
      <div className="container">
        {/* header section */}
        <div className="mb-24">
          <p className="text-sm text-primary font-medium" data-aos="fade-up">
            Top Selling Rated For You
          </p>
          <h1 className="text-3xl font-bold" data-aos="fade-up">
            Best Products
          </h1>
          <p className="text-sm text-gray-700" data-aos="fade-up">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias neque
            architecto illum ipsa minus.
          </p>
        </div>

        {/* body section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center">
          {ProductsData.map((data) => (
            <div key={data.id} data-aos="zoom-in">
              <div className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group max-w-[300px]">
                <div className="h-[100px]">
                  {" "}
                  <img
                    src={data.img}
                    className="max-w-[140px] mx-auto block transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md"
                    alt=""
                  />
                </div>

                <div className="p-4 text-center">
                  <div className="w-full flex justify-center items-center gap-1">
                    <FaStar className="text-primary dark:group-hover:text-gray-800" />
                    <FaStar className="text-primary dark:group-hover:text-gray-800" />
                    <FaStar className="text-primary dark:group-hover:text-gray-800" />
                    <FaStar className="text-primary dark:group-hover:text-gray-800" />
                    <FaStar className="text-primary dark:group-hover:text-gray-800" />
                  </div>
                  <h1 className="text-2xl  font-bold">{data.title}</h1>
                  <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">{data.description}</p>
               <button className="bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary">
Order Now
               </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopProduct;
