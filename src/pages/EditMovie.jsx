import React, { useState ,useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from "axios"
import '../styles/Editform.css'
const initial={
  title:"",
  poster:"",
  releaseDate:"",
  genre:"",
  description:""
}
const EditMovie = () => {
  const {id} =useParams()
  const [formData,setFormData]=useState(initial)
  const[isLoading,setIsLoading]=useState(false)
  const[error,setError]=useState(null)
  const navigate = useNavigate()
  useEffect(()=>{
    setIsLoading(true)
    setError(null)
    axios.get(`http://localhost:3000/movies/${id}`)
    .then((res)=>setFormData(res.data))
    .catch((err)=>err.response?err.response.data:err.response)
    .finally(setIsLoading(false))
},[id])
const handleChange=(e)=>{
  const{name,value}=e.target;
  setFormData({...formData,[name]:value})
}
const handleSubmit= async (e)=>{
  e.preventDefault()
  console.log(formData)
 try{
       await axios.put(`http://localhost:3000/movies/${id}`,formData)
       alert("edited successfully")
       navigate("/movies")
       
    }
    
    catch(err){
      // setError(err)
      alert("failed to loading")
    }
  };
  return (
    <div>
      <h2 style={{textAlign:"center"}}>Edit Form</h2>
    
      {/* {isLoading && <p>Loading....</p>} */}
      {/* {error && <p>{error}</p>} */}
      <form onSubmit={handleSubmit} className='editform'>
        {/* <h2>Add New Movies</h2> */}
        <input type='text'placeholder='Enter Username' name='title'value={formData.title}onChange={handleChange}/>
        <input type='text'placeholder='Enter URL' name='poster'value={formData.poster}onChange={handleChange}/>
        <input type='date'placeholder='Enter Date' name='releaseDate'value={formData.releaseDate}onChange={handleChange}/>
        <input type='text'placeholder='Enter Genre' name='genre'value={formData.genre}onChange={handleChange}/>
        <input type='text'placeholder='Enter Description' name='description'value={formData.description}onChange={handleChange}/>

        <input type='submit' value='Add Edit Movie'/>
      </form>
    
    </div>
  )
}

export default EditMovie
