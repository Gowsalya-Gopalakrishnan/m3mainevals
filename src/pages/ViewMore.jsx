import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import '../styles/ViewMore.css'

const ViewMore = () => {
    const {id} = useParams()
    const[viewMore,setViewMore]=useState("")
    const[isLoading,setIsLoading]=useState(false)
    const[error,setError]=useState(null)

    useEffect(()=>{
        setIsLoading(true)
        setError(null)
        axios.get(`http://localhost:3000/movies/${id}`)
        .then((res)=>setViewMore(res.data))
        .catch((err)=>err.response?err.response.data:err.response)
        .finally(setIsLoading(false))
    },[id])
  return (
    <div className='viewmore'>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {viewMore && <div>
              <img src={viewMore.poster} alt={viewMore.title}/>
              <h3>{viewMore.title}</h3>
              <h4>Genre : {viewMore.genre}</h4>
              <p>ReleaseDate : {viewMore.releaseDate}</p>
              <p>Description : {viewMore.description}</p>
        </div>}
    </div>
  )
}

export default ViewMore
