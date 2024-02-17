import { useEffect, useState } from 'react'

const Pagenation = () => {
const API="https://dummyjson.com/products?limit=100";
const [product,setProduct]=useState([])
const [page,setPage]=useState(1)
useEffect(()=>{
fetch(API)
.then((data)=>data.json())
.then((data)=>setProduct(data.products))
},[])

const handlePage=(selectPage)=>{
if(selectPage >= 1 && selectPage <= product.length /10 && selectPage !== page ){
setPage(selectPage)
}
}
  return (
    <div className='container'>
        {
    
        <div className='grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-5'>
            {product.slice(page*10 - 10, page*10).map(data=>(
            <div key={data.id} className='bg-slate-200 shadow-md rounded-md p-6'>
                <img src={data.thumbnail} alt={data.title} className='w-full h-60 object-cover' />
                <h2 className='text-md font-semibold pt-3'>{data.title}</h2>
            </div>
            
            ))
            }
        </div>
        }

        <div className='flex gap-5 my-8 justify-center '>
            <span className={`w-10 h-10 rounded-full flex items-center justify-center bg-gray-400 text-xl p-5 cursor-pointer ${page === 1 ? "hidden":""}`} onClick={()=>handlePage(page - 1)}>←</span>
            {
            [...Array(product.length / 10)].map((_,i)=>(
             <span key={i} onClick={()=>handlePage(i+1)} className={`w-10 h-10 rounded-full flex items-center justify-center  text-xl p-5 cursor-pointer ${page==i+1 ? "bg-blue-400 text-white" :"bg-gray-400"} `} >{i+1}</span>   
                
                ))
            }
            <span className={`w-10 h-10 rounded-full flex items-center justify-center bg-gray-400 text-xl p-5 cursor-pointer ${page === product.length/10 ? "hidden":""}`} onClick={()=>handlePage(page + 1)}>→</span>
        </div>
    </div>
  )
}

export default Pagenation