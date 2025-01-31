import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import '../styles/AddNew.css'
const initial={
  title:"",
  poster:"",
  releaseDate:"",
  genre:"",
  description:""
}

const AddNew = () => {
  const [formData,setFormData]=useState(initial)
  // const [isLoading,setIsLoading]=useState(false)
  // const [error,setError]=useState(null)
  const navigate = useNavigate()

  const handleChange=(e)=>{
    const{name,value}=e.target;
    setFormData({...formData,[name]:value})
  }
  const handleSubmit= async (e)=>{
    e.preventDefault()
    console.log(formData)
   try{
         await axios.post("http://localhost:3000/movies",formData)
         navigate("/movies")
      }catch(err){
        // setError(err)
        alert("failed to loading")
      }
    };
  
  return (
    <div>
      {/* {isLoading && <p>Loading....</p>} */}
      {/* {error && <p>{error}</p>} */}
      <form onSubmit={handleSubmit} className='addnewform'>
        <h2>Add New Movies</h2>
        <input type='text'placeholder='Enter Username' name='title'value={formData.title}onChange={handleChange}/>
        <input type='text'placeholder='Enter URL' name='poster'value={formData.poster}onChange={handleChange}/>
        <input type='date'placeholder='Enter Date' name='releaseDate'value={formData.releaseDate}onChange={handleChange}/>
        <input type='text'placeholder='Enter Genre' name='genre'value={formData.genre}onChange={handleChange}/>
        <input type='text'placeholder='Enter Description' name='description'value={formData.description}onChange={handleChange}/>

        <input type='submit' value='Add New Movie'/>
      </form>
    </div>
  )

}
export default AddNew
