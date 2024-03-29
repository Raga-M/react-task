
import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'


function App() {
  const [user,setUser]=useState([])
  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  const [website,setWebsite]=useState("")
  const [updateID,setUpdateID]=useState("")
  const [btn,setBtn]=useState(false)

  useEffect(()=>{
  axios.get("https://express-api-jrzc.onrender.com").then(res=>setUser(res.data)
)
  },[])
  
 
    const handleAdd=()=>{
      const n=name.trim();
      const e=email.trim();
      const w=website.trim();

    if(n && e && w){
 
      axios.post("https://express-api-jrzc.onrender.com",{name,email,website}).then(setUser([...user,{name,email,website}], setEmail(""),setName(""),setWebsite("")))
    }
    }
    const handleEdit=(i,id)=>{
      setEmail(user[i].email),setName(user[i].name),setWebsite(user[i].website)
      setUpdateID(id)
      setBtn(true)
    
    }
    const handleUpdate=()=>{
    axios.put(`https://express-api-jrzc.onrender.com/${updateID}`,{name,email,website}).then(setUser((user.map((data)=> data._id === updateID ? {name,email,website}:data))  , setEmail(""),setName(""),setWebsite(""),  setBtn(false)))
    
  }
  const handleDelete=(id)=>{

    axios.delete(`https://express-api-jrzc.onrender.com/${id}`).then(setUser(user.filter((data)=>data._id !==id)))
    }
  return (
    <>
    <h1 className='text-primary text-bold ps-4'>User details</h1>
    <div className='d-flex flex-wrap flex-md-nowrap gap-md-4 gap-1 px-4'>
   <input type="text" className='form-control my-3' name="" value={name} placeholder='Name' onChange={(e)=>setName(e.target.value)} id="" />
   <input type="text" name="" className='form-control my-3' value={email} placeholder='Email' onChange={(e)=>setEmail(e.target.value)} id="" />
   <input type="text" name="" className='form-control my-3' value={website} placeholder='website' onChange={(e)=>setWebsite(e.target.value)} id="" />
   </div><button className={`btn  btn-primary ${btn?'d-none':''} mx-4`}  disabled={btn} onClick={handleAdd}>add user</button>
    <button className={`btn btn-warning  mx-4 ${!btn?'d-none':''}`} onClick={handleUpdate}>update user</button>
  <div className='table-responsive m-4'> 
    <table  className='table table-striped table-bordered '>
    <tr className='text-center py-3'>
      <th>S.NO</th>
      <th>Name</th>
      <th>email</th>
      <th>website</th>
      <th>action</th>
    </tr>
   {user.map((data,i)=>
   <tr key={i} className='text-center'>
    <td>{i+1}</td>
    <td>{data.name}</td>
    <td>{data.email}</td>
    <td>{data.website}</td>
    <td className='d-flex gap-2 align-items-center justify-content-center'><button className='btn btn-warning mx-3 my-2'  onClick={()=>handleEdit(i,data._id)}> edit</button>
    <button className='btn btn-danger' onClick={()=>handleDelete(data._id)}> delete</button>
    </td>

    </tr>
   )
   }
   </table>
   </div>
    </>
  )
}

export default App
